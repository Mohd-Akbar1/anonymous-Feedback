import { Request, Response } from "express";
export declare const userController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const userMessage: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const allUserMessages: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getNameById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
