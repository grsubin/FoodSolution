import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  proxyurl = "https://cors-anywhere.herokuapp.com/";
  aLogin = "";
  ulogin = "";


  constructor(
    private http: HttpClient
  ) { }

  adminLogin(userName: string, password: string){
    return this.http.post<any>(Config.adminLoginUrl, {userName, password});
  }

  userLogin(userName: string, password: string){
    return this.http.post<any>(Config.userLoginUrl, {userName, password});
  }

  logout(){ 
    //remove user from local storage to log user out
    if(localStorage.getItem('currentAdmin'))
      localStorage.removeItem('currentAdmin');

    if(localStorage.getItem('currentUser'))
      localStorage.removeItem('currentUser');
  }

  isAdminLoggedIn(){
    if(localStorage.getItem('currentAdmin'))
      return true;

    return false;
  }

  isUserLoggedIn(){
    if(localStorage.getItem('currentUser'))
      return true;

    return false;
  }
}
