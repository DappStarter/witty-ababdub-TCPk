require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stock raise machine erode install bag army genuine'; 
let testAccounts = [
"0x2f5403767235e8c9accaa39c126c80313bfb3ebbf4636f73a5833b296ba99b49",
"0x0b884a4403b089d240e24e03358a9239f9f6ff197b7dc3537cdca54a95202910",
"0x3821a4f9b6eef1cf5b6d46bddd8d214f272366f7374998a3aa169f4513a15686",
"0xa802e8221c2049f30c9b2880b45436500513dce4922861fe91b44fd83723e940",
"0xacce398049ae490917c03ae725abc40beaf14d907ee95d34b5df82579ce1b73d",
"0xb6dff9d7b2dd122f37daff807f47ddfda44b1190b4c870b61aef477bd90c8945",
"0x8c6a5b4ef71a8715090604aa73f853a3f29826a5789f0dda59828a573b8e4f10",
"0xc64571799e8a8ad1139ddfa585e6e1ffde0e59f2c41a269282836208104546fc",
"0x71176dcdeef8bcdf6d69f29e1046955dde237a70ed4603b4003a50b7621638f0",
"0xe3fca507d0e7e0a49806a33a448596eb9ae2334126f8a9c7703e8dcd2911644f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


