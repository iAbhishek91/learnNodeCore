# Explain how module and require works

## Execution workflow

* `module.js`is a anonymous function which is called by node internally when we execute node app.

* node creates five arguments for module.js anonymous function.

  * exports:
    * this is shorter to module.export (type less).

    * this is an object containing all the methods and atrributes exported in module.js.

    * note: all function and attributes are exported from module.js.

    * `module` object is created from global Object. Hence prototype chain is only one level deep.

  * require:
    * is a function that takes one argument: `path`.

    * `require` function sits on `Module.prototype`

    * `Module.prototype.require` functions returns what `Module._load` function execution returns.

    * `Module._load` function takes three parameters: path, this and isMain(hardcoded to false). `main` is a attribute on require object which points to the module that is executed. Hence `require.main() === module` is true only when it is in the same file it is where it is executed by node. All other will have will false for the above expression.

    * `require` also provide a filename under main object, which is equivalent to __filename. access it using `require.main.filename`.

    * `Module._resolveFilename` is called internally my `Module._load`. `_resolveFilename` returns(filename) the actual path of module to be imported.

    * `Module._cache[]` is called with the `filename` returned by `_resolveFilename`. If the file is loaded previously then it is not loaded and it returns with `cachedModule.exports` from `_load` after calling `updateChildren()`.

    * If file is not cached previously, then `Module` constructor function is called with filename and parent parameter. `Module` function constructor internally `updateChildren()`.

    * `module` object is created in the previous step, has a blank export object. This will be loaded in `Module.load()`.

    * Checks if the module is a Native module. Incase of native module it returns `NativeModule.require(filename)` and exits `Module._load()`.

    * `Module` function constructor returns `module` object and then the object is added in `Module_cache[filename]` = `module`.

    * `module` 's parent id is `Module`.

    * `Module.prototype.load(filename)` is called from `Module._load()`

    * `Module.prototype.load()` function adds extension `.js` if nothing is assigned in `required()` function.

    * finally `module.exports` is returned from `Module._load()`.

    * `Module.prototype.require()` returns `Module._load()`, i.e. `module.exports` object.

  * module:
    * `module` always points to self module.

    * `module.children` returns the module.exports of all the require. `module.children` is an array of module object imported.

  * Module:
    * `Module` is an function constructor which creates `module`. `Module` is the parent of `module` object.

    * `Module` prototype contains all the methods which is required to manupulate `module`.

    * this object lives for entire execution of node.

  * __filename: path of the file name executed including the filename
  * __dirname: path of the dirname from where node is executed

## Understanding Modules API documentation(my words)

Refer: [Node API docs `Modules`](https://nodejs.org/api/modules.html)

* each module is wrapped in a function.

* any thing attached to export object can be imported/required by other module.

* all other methods and attirutes are private to the module.

* path can start `/` representing absolute path, `./` or `../` representing relative path. If all the above is missing then it should be either a core module or module from node_modules.

* folder as module! There are three way allowed in node:
  1. creating a package.json on the root of the folder and passing `main` attribute in the package.json. for example: { "name" : "some-library",
  "main" : "./lib/some-library.js" }. if we pass `require('./some-library')` the node will try to load './lib/some-library.js'.

  2. if `pacakage.json` is not available then it will try to load `index.js` or `index.json` or `index.node`. incase both of the above is missing it will compain module not found.

  3. other is loading a directory as core module or node module or global node module (NODE_PATH)