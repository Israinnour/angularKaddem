import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../Models/Departement';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  urlAdd='http://localhost:8071/kaddem/departement/add'
  urlApi = 'http://localhost:8071/kaddem/departement/all';
  urlDel='http://localhost:8071/kaddem/departement/delete';
  urlById =  'http://localhost:8071/kaddem/departement/get';
  urlup='http://localhost:8071/kaddem/departement/update';
  Departement=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.urlApi);
}
  AddDepart(Departement: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.urlAdd,Departement)
   }
   deleteUser(id:Number){
    return this.http.delete(this.urlDel+'/'+id);
  }
  getDepartById(id: Number){
    return this.http.get<Departement>(this.urlById+'/'+id);
  }
  UpdateDepart(id:Number,departement:Departement){
    alert(departement.nomDepart);
    return this.http.put<Departement>(this.urlup, departement);
  }

  }



