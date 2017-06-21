# Music search
This code is a solution of **Compucorp Front End Developer Test v4.0**. The solution is an application which allows the user to search for an artist or album using the Spotify API to get the results.

## Requirements
To launch this solution
1. Node.js version 6 or above
2. npm version 3 or above (You can use yarn instead if you feels at ease)

## Test Installation Deployment
Here are deferrents commands of this application 
1. `npm install`. This command will install all packages an dependencies.
2. `npm run build`. This command will launch all tests. if the tests succeed, it will build the dist folder and run the application in your default browser. The you can take the contain of the dist folder and deploy in your server.
3. `npm run lint` THis command will use ESlint configuration to sammary warnings ang errors in javascrip code.
4. `npm test` This command will lanch all tests.
5. `npm run test:watch` This command will lanch all test and test differents changes in the code.


## Architecture
The main framework of this solution is _angularjs 1.6.4_. The language specification is ES6. The language specification is ES6 which I associate with [babel](https://babeljs.io/) to transcribe the distribution from ES6 to ES5. So the solution will work on the old browser.

### Why ES6?
SS6 brings much news in javascript and allows me write bette code. So with ES6 the code is much more readable and easily testable easily. I no longer have to use external library such as lodash.

### Developements tools

#### Webpack
[Webpack](https://webpack.js.org/) is a real Swiss knife as javascript developements tool.
In this case, it allows me to:
- Handle all application's dependencies
- Call babel to transcribe ES5 to ES6
- Convert sass to css
- Bundle and minify javascript and css code
- use tree shaking to only include code in bundle that is being used
 
There are three webpack configurations in the application. Configuration for developement is in webpack.config.dev.js file. Configuration for producetion is in webpack.config.prod.js. For the test the configuration is included in karma.conf.js file.

#### Test
[Kama](https://www.npmjs.com/package/karma), [karma-jasmine](https://www.npmjs.com/package/karma-jasmine), [karma-webpack](https://www.npmjs.com/package/karma-webpack) and [istanbul](https://www.npmjs.com/package/istanbul) are the main the framework for testing. Jasmine provides the infrastructure of test and karma the runner. karma-webpack allows to use webpack ability in the test enviroment. Thank to karma-webpack I can write test in ES6 and use all webpack benefice in the tests. Finally, Istabul allows do code coverage. It generates html coverage file in coverage in the folder.

