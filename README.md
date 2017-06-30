# Music search
This solution is an application which allows the user to search for an artist or album using the Spotify API to get the results.

## Requirements
To launch this solution, you must have this tools
1. Node.js version 6 or above
2. npm version 3 or above (You can use yarn instead if you feel at ease)

## Test Installation Deployment
Here are different commands of this application 
1. `npm install`. This command will install all packages as dependencies.
2. `npm run build`. This command will launch all tests. if the tests succeed, it will build the dist folder and run the application in your default browser. The you can take the contains of the dist folder and deploy in your server. 
3. `npm run lint` This command will use ESlint configuration to summary warnings and errors in JavaScript code.
4. `npm test` This command will launch all tests.
5. `npm run test:watch` This command will launch all test and test different changes in the code.


## Architecture
The main framework of this solution is _angularjs 1.6.4_. The language specification is ES6. I associate it with [babel](https://babeljs.io/) to transcribe the distribution from ES6 to ES5. So the solution will work on olds browsers.

### Why ES6?
ES6 brings much news in JavaScript and allows me write better code. With ES6 the code is much more readable and easily testable. I no longer have to use external libraries such as lodash.

### Developements tools

#### Webpack
[Webpack](https://webpack.js.org/) is a real Swiss knife as JavaScript developments tool.
In this case, it allows me to:
- Handle all application's dependencies
- Call babel to transcribe ES6 to ES5
- Convert sass to css
- Bundle and minify javascript and css code
- use tree shaking to only include codes in bundle that is being used
 
There are three webpack configurations in this solution. Configurations for development is in webpack.config.dev.js file. Configurations for production is in webpack.config.prod.js. For the test the configurations are included in karma.conf.js file.

#### Test
[Kama](https://www.npmjs.com/package/karma), [karma-jasmine](https://www.npmjs.com/package/karma-jasmine), [karma-webpack](https://www.npmjs.com/package/karma-webpack) and [istanbul](https://www.npmjs.com/package/istanbul) are the main the test framework of this solution. Jasmine provides the infrastructure of test and karma the runner. karma-webpack allows to use webpack ability in the test environment. Thank to karma-webpack I can write test in ES6 and use all webpack benefice in this tests. Finally, Istabul allows code coverage. It generates html coverage file in coverage folder.

## Connect With Spotify Api
To connect with Spotify, you must have a Spotify account and allow your browser to display popup windows for this site. Then you can try to do your search. The application will guide you to connect with Spotif.
