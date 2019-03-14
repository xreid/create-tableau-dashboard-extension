# Create an Extension

## Replace the contents of this readme with information on the usage of this extension and any other additional details

## Quick Start

* `yarn install`
* `yarn run dev`
* http://localhost:9000

## Commands

Some basic commands are included to make development easier. These commands can be found and edited in the **scripts** portion of **package.json**

* `yarn run bundle`
    * Calls `npx webpack` to bundle js starting from **index.js**
    * The **bundle.js** file is output to **/dist** and already included in **index.html**
    * [Learn more about bundling with webpack](https://webpack.js.org/guides/getting-started/#creating-a-bundle)
* `yarn run dev-server`
    * Calls `webpack-dev-server` to start a server in the **/public** directory at http://localhost:9000 and watch for code changes in order to automatically re-bundle during development
    * [Learn more about webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
* `yarn run start`
    * Calls `node src/scripts/server.js`
    * Runs a simple express server to host the extension outside of development
    * [Learn more about Express](https://expressjs.com)
* `yarn run test`
    * Calls `jasmine --config=spec/config/jasmine.config.json`
    * [Learn more about testing with Jasmine](https://jasmine.github.io/setup/nodejs.html)
