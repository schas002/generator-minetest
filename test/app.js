'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-minetest:app', function() {
  before(function() {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({modname: "generator-minetest-test"})
      .toPromise();
  });

  it('should create an init.lua', function() {
    assert.file('init.lua');
  });
  
  it('init.lua should correctly set the MODNAME ident variable', function() {
    assert.fileContent('init.lua', 'local MODNAME = "generator-minetest-test"');
  });
});