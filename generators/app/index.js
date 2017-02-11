'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('minetest mod') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'modname',
      message: 'Name of this new mod?',
      default: this.determineAppname()
    }];

    return this.prompt(prompts).then(function(props) {
      this.props = props;
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('init.lua'),
      this.destinationPath('init.lua'),
      this.props
    );
  },

  end: function() {
    var modname = this.props.modname;
    this.log(
      `All went well. I made an ident for mod ${modname} in init.lua. ` +
      `You can add ${modname} to your Minetest world, though it won't do ` +
      `anything yet. Use subgenerators to add things. Good luck! <3`
    );
  }
});
