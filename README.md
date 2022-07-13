# ImageProcessing API

## Basic Scripts

    init        |   Used to initiliaze the project by downloading all the node_modules
    lint        |   Used to run eslint on src directory
    prettier    |   Used to runn prettier on src directory
    build       |   Used to transpile the TS files on src folders to dist directory
    jasmine     |   Used to run Jasmine Tests in dist/tests directory
    clean       |   Used to clean the dist folder
    test-smoke  |   Used to clean & build the solution and perform soke tests
    test        |   Used to clean & build the solution and than start the tests
    start-dev   |   Used to run a live version of the app without building it using the nodemon module
    start       |   Used to start the prod build from dist folder after cleaning & building the solution

## How to run the Scripts?

- Please run the scripts using <code>npm run **scriptName**</code> command, replacing the **scriptName** with the above scripts

## Starting Point

- The application would be started from 'dist/server.js'

## Initialize the Project

- To Initialize the project, run <code>npm run init</code>

## Start the application

- To start the project after initialization, run <code>npm run start</code>
