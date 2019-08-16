import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';

import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private _http : HttpClient) {
    console.log("UserInformationService constructor...");
  }

  sendUserData(obj : User)
  {
    console.log("user data to send : ",obj);
    return this._http.post<any>("http://localhost:3000/saveData",obj).pipe(catchError(this.errorHandler)); //NodeJs server
    // return this._http.post<any>("http://localhost:8080/saveData",obj).pipe(catchError(this.errorHandler)); //Springboot (apche tomcat) server
  }

  errorHandler(error : HttpErrorResponse)
  {
    console.log("error handled...");
    return throwError(error);
  }

}
