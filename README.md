# Nodejs TypeScript

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | Server Port            |    8000   |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 19.0.0


# Getting started
- Install dependencies
```
cd party-invitation-uiisla
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:8000`

## Getting TypeScript
Add Typescript to project `npm`.
```
npm install -D typescript
```

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contains the distributable (or output) from your TypeScript build.  |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
|**Data**                  | Contains the Test Instructions and Dummy Data |
| **src**/index.ts         | Entry point to express app                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)
| tsconfig.json            | Config settings for compiling source code only written in TypeScript

## Building the project
### Configuring TypeScript compilation
```json
{
    "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "outDir": "dist",
      "sourceMap": true
    },

    "include": [
      "src/**/*.ts"


    ],
    "exclude": [
      "src/**/*.spec.ts",
      "test",
      "node_modules"

    ]
  }

```

### Running the build
All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Runs full build and runs node on dist/index.js. Can be invoked with `npm start`                  |
| `test`                    | Runs build and run tests using mocha        |

```

## Testing
The tests are  written in Mocha and the assertions done using Chai

```
    "@types/jest": "^29.2.0",
    "ts-jest": "^29.0.3",


```

### Example test.ts
```
import { describe, expect, test } from '@jest/globals';
import { calcCrow, toRad } from './utils';


// Test Deg to RAd Function
describe('To Rad Module', () => {
    test('convert deg to rad', () => {
        expect(toRad(53.339428)).toBe(0.9309486397304539)
    })
})
```
### Running tests using NPM Scripts
````
npm run test

## Project Objectives

- Read the full list of customers
- Output the names and user ids of matching customers (within 100km), sorted by User ID (ascending). The output should be in JSON.







## Screenshots

### Post request to '/'

![App Screenshot](https://firesidebackapp.s3.amazonaws.com/mypics/Pst.png)

### Get request to '/' returns Filtered JSON
![App Screenshot](https://firesidebackapp.s3.amazonaws.com/mypics/POST.png)


## How it works

- Theres Default Dummy Data that preloaded and is saved under customers.txt.
- customer.txt will act as our storage in this project
- When you post a txt file to this endpoint '/' , the data is read and the processed and outputed as JSON with the customers with a 100km range and arranged according to the userID
- In order for your txt file to be read ensure customer items are listed as objects for example {"latitude": "52.833502", "user_id": 25, "name": "David Behan", "longitude": "-8.522366"}
- Default Location is set to the Dublin office are 53.339428, -6.257664 , this can be changed on the calcCrow Function




## Authors

- [@layan2k](https://www.github.com/layan2k)
