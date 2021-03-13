var sodium = require('sodium-native')

// ECDH
// x25519

// Create Alice keypair
var AlicePublicKey = sodium.sodium_malloc(sodium.crypto_box_PUBLICKEYBYTES)
var AlicePrivateKey = sodium.sodium_malloc(sodium.crypto_box_SECRETKEYBYTES)

sodium.crypto_box_keypair(AlicePublicKey, AlicePrivateKey)

console.log(`Alice ${sodium.crypto_box_PUBLICKEYBYTES}-byte public key is: ${AlicePublicKey.toString('hex')}`)
console.log(`Alice ${sodium.crypto_box_SECRETKEYBYTES}-byte private key is: ${AlicePrivateKey.toString('hex')}`)

// Create Bob keypair

// Alice to create secret using her private key and bob's public key

// Bob to create secret using his private key and alice's public key
