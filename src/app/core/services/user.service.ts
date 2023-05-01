import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL=  `${environment.host}/api`

  constructor( private Http: HttpClient ) { }

  login(credentials:{ email: string, password: string }){
    return this.Http.post(`${this.URL}/user/login_user`,credentials)
  }

}

