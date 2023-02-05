function UploadEncrypted() {

    const encryptionSignature = async() =>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []); // <- this promps user to connect metamask
  
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const messageRequested = (await lighthouse.getAuthMessage(address)).data.message;
      const signedMessage = await signer.signMessage(messageRequested);
      return({
        signedMessage: signedMessage,
        publicKey: address
      });
    }
  
    const progressCallback = (progressData) => {
      let percentageDone =
        100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
      console.log(percentageDone);
    };
  
    /* Deploy file along with encryption */
    const deployEncrypted = async(e) =>{
      /*
         uploadEncrypted(e, publicKey, accessToken, uploadProgressCallback)
         - e: js event
         - publicKey: wallets public key
         - accessToken: your api key
         - signedMessage: message signed by the owner of publicKey
         - uploadProgressCallback: function to get progress (optional)
      */
      const sig = await encryptionSignature();
      const response = await lighthouse.uploadEncrypted(
        e,
        sig.publicKey,
        "bdce1f5e-9e9e-4a3a-9740-15d94750da9d",
        sig.signedMessage,
        progressCallback
      );
      console.log(response);
      /*
        output:
          {
            Name: "c04b017b6b9d1c189e15e6559aeb3ca8.png",
            Size: "318557",
            Hash: "QmcuuAtmYqbPYmPx3vhJvPDi61zMxYvJbfENMjBQjq7aM3"
          }
        Note: Hash in response is CID.
      */
    }
  
    return (
      <div className="App">
        <input onChange={e=>deployEncrypted(e)} type="file" />
      </div>
    );
  }
  
  //export default UploadEncrypted;