require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone stone dash ranch pulse harvest pave army gesture'; 
let testAccounts = [
"0xbdd7cde75f408d364e3da32171033017fac62309ebfeffe9612abdcec0bd4aba",
"0xef8d444932d31c3622d061888bf6d1c107d0d3d8fe0ea1d2b8cd46a527a47c43",
"0x8497f6afdaaa3cde3e3333fc770760aaac02418b4b44d22b212a39442045001c",
"0x73a13fa7a32a49136401f3c6eae00b525cd2f3d7be3f7358f6a228562f126bfd",
"0x858f25c3d9a73390e5ab6f4c40c51d54a840d8c891d181494035f2ba163359f7",
"0x72dca527d52afdda3d53dd52772dd390f9e66d9bba2c7457ff487f8bfdb5acc9",
"0x46a2ee1a99058f2c153b29d1cddbe485f956a865aa8d2895acc71f23ec8f247e",
"0x4b036980ff849c80d3b68e410694ffef117b8549dfd0cd04d54355140be8416e",
"0x05f8a0138306d28ad2eda7f78731931565b60b39b5d54eab37e613cc2ac389f2",
"0xef9873efef520531ec9d3e3e2b61bee1d183e50e3ea736e13f1c14e76fd0f48c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
