// Defines a request methods to indicate the desire action
// to be performed for a given resources

import { RequestHandler } from 'express';

export interface HttpServer {
    get(url:string, ...requestHandlers: RequestHandler[]): void;
    post(url:string, ...requestHandlers: RequestHandler[]): void;
    put(url:string, ...requestHandlers: RequestHandler[]): void;
    delete(url:string, ...requestHandlers: RequestHandler[]): void;
}