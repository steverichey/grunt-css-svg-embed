grunt-css-svg-embed
===================

Convert SVGs linked as URLs in your CSS to strings inside your style sheet.

# Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-svg-embed --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-svg-embed');
```

# csssvgembed task

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Usage Examples

```js
csssvgembed: {
  myTarget: {
    files: {
      'path/to/output.css': ['path/to/input.css']
    }
  }
}
```

# Version History

Currently WIP. Use at your own risk!

# License

Shared under an MIT license. See [license.md](https://github.com/steverichey/grunt-css-svg-embed/blob/master/license.md) for details.
