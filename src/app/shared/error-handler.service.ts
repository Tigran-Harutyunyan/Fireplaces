import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx'
 
 

@Injectable()

export class ErrorHandlerService {
  constructor(private http: Http,  private router: Router) { }

  //========= HANDLE HTTP ERRORS =================

  handleHttpErrors(error: any) {
     
  }
}
