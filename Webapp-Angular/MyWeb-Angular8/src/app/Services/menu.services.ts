import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Menu } from './menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  formData : Menu;
  list : Menu[];
  readonly rootURL ="https://localhost:44357/api"

  constructor(private http : HttpClient) { }

  postMenu(formData : Menu){
   return this.http.post(this.rootURL+'/Menus',formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/Menus')
    .toPromise().then(res => this.list = res as Menu[]);
  }

  putMenu(formData : Menu){
    return this.http.put(this.rootURL+'/Menus/'+formData.ID,formData);

   }

   deleteMenu(id : number){
    return this.http.delete(this.rootURL+'/Menus/'+id);
   }
}
