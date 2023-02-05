# Filecoin Space Warp Hackathon

fevm-space-warp - Ustore DAO Tooling

- https://spacewarp.fvm.dev/

## Storage deals and actors

- storage deals existed in Filecoin chain before FEVM; 
- storage deals are agreements between storage providers and customers
- currency is FIL; deals are bought in chunks of 16G

- actors are implemented as smart contracts (written in Solidity)
- all filecoin activities can be wrapped in a smart contact


## Use cases / Hack ideas 

### Perperual storage 
- service framework for sustained storage of data without user interaction
  - price discovery 
  - reputation system
  - sharing deals / clustering (to allow smaller-sized chunks)

### privary-preserving computing (uStore)
- https://www.openfhe.org/webinars/
- https://blog.openmined.org/private-machine-learning-explained/
- https://en.wikipedia.org/wiki/Homomorphic_encryption

## Hack away

Cheat sheet by Anna
- https://github.com/filecoin-project/community/discussions/585
Smart contract wrappers for filecoin actors
- https://github.com/Zondax/filecoin-solidity
FVM Hardhat Kit 
- https://github.com/0xwaya/space-warp

UStore is a perpetual storage DAO for communities of DIY enthusiasts

## Sponsors

Lighthouse - Store Files Perpetually on IPFS and Filecoin

Nandit Mehra introducing lighthouse

- libriarians and computer scientist shared goal is to organize information and make it accessible.
- Simple protocols like html and inventions like the hyperlinks are prone to problems like link rot  

## Logs

torsten@tri:~/src/fevm-hardhat-kit $ yarn hardhat deploy

````
Compiled 57 Solidity files successfully
Wallet Ethereum Address: 0xe35afF5664Fb6B8Fb4a0E4A84bB8D0206FfF0423
Deploying Simplecoin...
SimpleCoin deployed to: 0x80Ea5aC5966F48EaCFCfC02036350A99B71431c4
Deploying FilecoinMarketConsumer...
FilecoinMarketConsumer deployed to: 0x478973504A879Ef7a114436cFD01dFAf66EB9Bb0
Deploying DealRewarder...
DealRewarder deployed to: 0x2E63683eEed814B60738d48245c54959900769aE
Done in 221.29s.
``` 
### Explorer 
https://explorer.glif.io/address/f410f4nnp6vte7nvy7nfa4suexogqebx76bbdx5huowy/?network=hyperspacenet
https://hyperspace.filfox.info/en/address/t410f4nnp6vte7nvy7nfa4suexogqebx76bbdx5huowy

### DIY Circuits Archive

Lighthouse.storare uses the Lighthouse SDK

- DIYLC v1 Layout Collection (Bane)
- http://diy-fever.com/software/diylc/
- http://diy-fever.com/wordpress/wp-content/uploads/2009/12/layouts-01-19-2010.zip

CID = QmUYrEkCRKp6C3uQxsK8YaMVBqbp9X3ve5y6DLxe6etJ5y

Upload File Example (https://docs.lighthouse.storage/lighthouse-1/lighthouse-sdk/code-examples)

- https://gateway.lighthouse.storage/ipfs/QmUYrEkCRKp6C3uQxsK8YaMVBqbp9X3ve5y6DLxe6etJ5y

Upload Encrypted Example
````
{
    "Name": "Torsten Goerke.svg",
    "Hash": "QmXzW11XQDPHhcT6WNC54et78JyUz3kN4w45JGGivaLLYp",
    "Size": "18504"
}
``` 
