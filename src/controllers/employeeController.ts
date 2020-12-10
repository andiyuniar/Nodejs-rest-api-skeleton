import { Controller } from './controller';
import { HttpServer } from '../server/httpServer';
import { Request, Response } from 'express';

// Controller class. Provides methods for http request

export class EmployeeController implements Controller {

    public initialize(httpserver: HttpServer): void {
        httpserver.get('/employee', this.getEmployees.bind(this));
        httpserver.post('/employee', this.addNewEmployee.bind(this));
        httpserver.get('/employee/:id', this.getEmployeeById.bind(this));
        httpserver.delete('/employee/:id', this.deleteEmployee.bind(this));
    }

    private async getEmployees(req:Request, res:Response): Promise<void> {
        // do something here to get the employees data
        
        // await MongoDB.Models.Employee.find({}).limit(100).exec()
        // .then(data => {
        //     res.status(200).json(data);
        // })
        // .catch(err => {
        //     res.status(500).json({ message: err });
        // })
    }

    private async addNewEmployee(req:Request, res:Response): Promise<void> {
        // do something here to add new employee
    }

    private async getEmployeeById(req:Request, res:Response): Promise<void> {
        // do something here to get employee by id
    }

    private async deleteEmployee(req:Request, res:Response): Promise<void> {
        // do something here to delete employee 
    }
}