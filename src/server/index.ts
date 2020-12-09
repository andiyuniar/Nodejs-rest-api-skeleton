// In this example we use isExpressionStatement.
// You can use change to other web service framework like restify

import { HttpServer } from './httpServer';
import express from 'express';
import { RequestHandler } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


export class ApiServer implements HttpServer {

    private server = express();  //change this server to your server

    public get(url:string, ...requestHandlers: RequestHandler[]): void {
        requestHandlers.forEach(handler => {
            this.addRoute('get', url, handler);
        })
    }

    public post(url:string, ...requestHandlers: RequestHandler[]): void {
        requestHandlers.forEach(handler => {
            this.addRoute('post', url, handler);
        })
    }

    public put(url:string, ...requestHandlers: RequestHandler[]): void {
        requestHandlers.forEach(handler => {
            this.addRoute('put', url, handler);
        })
    }

    public delete(url:string, ...requestHandlers: RequestHandler[]): void {
        requestHandlers.forEach(handler => {
            this.addRoute('delete', url, handler);
        })
    }

    private addRoute(method: 'get'|'post'|'put'|'delete', url: string, requestHandler: RequestHandler): void {
        this.server[method](url, async(req, res, next) => {
            try {
                await requestHandler(req, res, next);
            }
            catch(e) {
                console.log(e);
                res.status(500).json({ message: e })
            }
        });
        console.log(`Added route ${method.toUpperCase()}: ${url}`);
    }

    public start(port: number): void {
        // defines all middleware used here
        this.server.use(bodyParser.json());
        this.server.use(cors());

        //initialize all routes
        this.server.get('/', (req, res) => {
            console.log('Welcome to Hello world');
            res.send('Hello world!!')
        })

        this.server.listen(port, () => {
            console.log(`Server up and running on http://localhost:${port}`);
        })

    }

}