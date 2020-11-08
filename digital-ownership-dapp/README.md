# Build A DApp

## Digital Ownership DApp

Using this app you can create the digital ownership for any kind of the files like an image, video etc. You can claim the create and remove claim on file. No multiple person can have the claim for the same file.

## To run the app

```bash
cd node

cargo run -- --dev --tmp

cd front-end

yarn

yarn start
```

### Substrate Node Running

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/node.jpg?raw=true)

### The UI

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-08%20at%2011.27.29%20PM.png?raw=true)

### Adding File For Digital Ownership

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-08%20at%2011.57.03%20PM.png?raw=true)

### Adding the file named 'biden' for user ALICE

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-08%20at%2011.42.27%20PM.png?raw=true)

### Creating claim for file named 'biden' and user ALICE

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-09%20at%2012.02.07%20AM.png?raw=true)

### Can't claim the smae file with user BOB (claimed by ALICE)

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-09%20at%2012.04.29%20AM.png?raw=true)

### Revoke the claim of the file from user ALICE

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-09%20at%2012.04.47%20AM.png?raw=true)

### Only after revoking the claim for ALICE claim for the file can be added to BOB

![](https://github.com/nnnkit/hello_world/blob/master/digital-ownership-dapp/Screenshot%202020-11-09%20at%2012.05.19%20AM.png?raw=true)
