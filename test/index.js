'use strict';

var should = require('chai').should();
var gltcore = require('../');

describe('#versionGuard', function() {
  it('global._gltcore should be defined', function() {
    should.equal(global._gltcore, gltcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      gltcore.versionGuard('version');
    }).should.throw('More than one instance of gltcore');
  });
});
