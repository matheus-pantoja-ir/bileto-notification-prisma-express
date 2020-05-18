import express from 'express';
import BodyParser from 'body-parser';
import Routes from './routes';

const SERVER_PORT = 3000

const App = express()

App.use(BodyParser.json())

App.use(Routes)

App.listen(SERVER_PORT, function () {
    console.log(`Server running on port: ${SERVER_PORT}`)
})