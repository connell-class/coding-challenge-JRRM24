import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroceryListService {

  constructor(
    private http: HttpClient
  ) { }
 url = "http://localhost:9090/list";
  getAllLists() {
    return this.http.get<any>(this.url).toPromise();
  }

getListById(id: number) {
  return this.http.get<any>(`${this.url}/${id}`).toPromise();
}  

}
