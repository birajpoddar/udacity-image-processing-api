# ImageProcessing API

[![CodeFactor](https://www.codefactor.io/repository/github/birajpoddar/udacity-image-processing-api/badge)](https://www.codefactor.io/repository/github/birajpoddar/udacity-image-processing-api) [![Node.js CI](https://github.com/birajpoddar/udacity-image-processing-api/actions/workflows/node.js.yml/badge.svg?branch=birajpoddar-nodejs)](https://github.com/birajpoddar/udacity-image-processing-api/actions/workflows/node.js.yml)

## Basic Scripts

    init        |   Initiliazes the project by downloading all the node_modules
    lint        |   Runs eslint on src directory and displays error, if any
    prettier    |   Runs prettier on src directory and prettifies the TS files
    build       |   Transpiles the TS files on src folders to dist directory
    jasmine     |   Runs Jasmine Tests in dist/tests directory
    clean       |   Cleans the dist folder
    test-smoke  |   Runs Smoke tests after cleaning & building the solution
    test        |   Runs Unit tests after cleaning & building the solution
    start-dev   |   Start a live version of the app without building it using the nodemon module
    start       |   Starts the prod build from dist folder after cleaning & building the solution

## How to run the Scripts?

- Please run the scripts using <code>npm run **scriptName**</code> command, replacing the **scriptName** with the above scripts

## Starting Point

- The application would be started from 'dist/server.js'

## Initialize the Project

- To Initialize the project, run <code>npm run init</code>

## Start the application

- To start the project after initialization, run <code>npm run start</code>

## API route

- To navigate to the API, you can use GET method on <code>/api/images?filename=**name**&width=**w**&height=**h**</code>

## Important Considerations while using the API

- When no queries are passed it will throw a <code>404, NOT FOUND</code> message
- When valid filename is passed through query params, API will return the full image
- When valid filename and either valid width or height is paased, it will return a cropped square image of WxW or HxH dimension
- When valid filename is passed along with valid width and height, it will return a cropped image of WxH dimension
- When valid filename along with either invalid width or height is passed, API will return <code>404, NOT FOUND</code> message
- When valid filename along with one valid and other invalid width/height is passed, the API will throw <code>404, NOT FOUND</code> message
- When passing any query param viz. filename/width/height more than once, only the first query param would be processed and the rest would be discarded
- Width and Height less than or equal to 0 viz. <code>/api/images?filename=**name**&width=**0**&height=**0**</code> will result in a <code>404, NOT FOUND</code> message
