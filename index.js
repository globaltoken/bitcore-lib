'use strict';

var gltcore = module.exports;

// module information
gltcore.version = 'v' + require('./package.json').version;
gltcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of gltcore-lib found. ' +
      'Please make sure to require gltcore-lib and check that submodules do' +
      ' not also include their own gltcore-lib dependency.';
    throw new Error(message);
  }
};
gltcore.versionGuard(global._gltcore);
global._gltcore = gltcore.version;

// crypto
gltcore.crypto = {};
gltcore.crypto.BN = require('./lib/crypto/bn');
gltcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
gltcore.crypto.Hash = require('./lib/crypto/hash');
gltcore.crypto.Random = require('./lib/crypto/random');
gltcore.crypto.Point = require('./lib/crypto/point');
gltcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
gltcore.encoding = {};
gltcore.encoding.Base58 = require('./lib/encoding/base58');
gltcore.encoding.Base58Check = require('./lib/encoding/base58check');
gltcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
gltcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
gltcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
gltcore.util = {};
gltcore.util.buffer = require('./lib/util/buffer');
gltcore.util.js = require('./lib/util/js');
gltcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
gltcore.errors = require('./lib/errors');

// main bitcoin library
gltcore.Address = require('./lib/address');
gltcore.Block = require('./lib/block');
gltcore.MerkleBlock = require('./lib/block/merkleblock');
gltcore.BlockHeader = require('./lib/block/blockheader');
gltcore.HDPrivateKey = require('./lib/hdprivatekey.js');
gltcore.HDPublicKey = require('./lib/hdpublickey.js');
gltcore.Networks = require('./lib/networks');
gltcore.Opcode = require('./lib/opcode');
gltcore.PrivateKey = require('./lib/privatekey');
gltcore.PublicKey = require('./lib/publickey');
gltcore.Script = require('./lib/script');
gltcore.Transaction = require('./lib/transaction');
gltcore.URI = require('./lib/uri');
gltcore.Unit = require('./lib/unit');

// dependencies, subject to change
gltcore.deps = {};
gltcore.deps.bnjs = require('bn.js');
gltcore.deps.bs58 = require('bs58');
gltcore.deps.Buffer = Buffer;
gltcore.deps.elliptic = require('elliptic');
gltcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
gltcore.Transaction.sighash = require('./lib/transaction/sighash');
