import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GroceryItemService {
  url = "http://localhost:9090/item";
  constructor(
    private http: HttpClient
  ) { }

public getItemsByListId(id: number) {
  return this.http.get<any>(`${this.url}/${id}`).toPromise();
}

public deleteItemById(id: number) {
  return this.http.delete<any>(`${this.url}/delete/${id}`).toPromise();
}

public saveItem(type, list_id) {
  return this.http.get<any>(`${this.url}/create/${type}/${list_id}`).toPromise();
}

}
