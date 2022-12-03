import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../Models/Departement';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {
  urlAdd='http://localhost:8071/kaddem/departement/addDep'
  urlApi = 'http://localhost:8071/kaddem/departement/all';
  Departement=[];
  constructor(private http: HttpClient) { }
  getData():Observable<Departement[]> {
    return this.http.get<Departement[]>(this.urlApi);
}
  AddDepart(Departement: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.urlAdd,Departement)
   }
}
