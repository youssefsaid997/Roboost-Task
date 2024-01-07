import { IStudent } from "./Studet";

export interface IResponse{
    Data:IStudent[],
    IsAuthorized:boolean,
    Sucess:string,
    Message:string
  }