import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private baseUrl = 'http://localhost:58635/api';
  constructor(private http: HttpClient) { }

  post(value: ITodo) {
    return this.http.post(this.baseUrl + "/ToDos", value);
  }

  put(value: ITodo) {
    return this.http.put(this.baseUrl + "/ToDos/" + value.id, value);
  }

  get(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl + "/ToDos");
  }

  getById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(this.baseUrl + `/ToDos/${id}`);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + `/ToDos/${id}`);
  }
}
