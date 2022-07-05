import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';
import { Menu } from '../_model/menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url : string = "/assets/data/menu.json";
  //  url_menu = "menu"
  constructor(
    private http: HttpClient
  ) { }

  getMenuList(): Observable<Menu[]>{

    return this.http.get<Menu[]>(Config.menuUrl);
    // return this.http.get<Menu[]>(this._url);

  }

  updateMenuAvailibility(menuList){
    return this.http.post<any>(this._url, {menuList});
  }
  



}
