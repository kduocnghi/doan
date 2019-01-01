import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: Http) {
  }

  getCollections() {
    return this.http.get('http://localhost:8080/rest/collections')
      .toPromise().then(res => res.json())
      .catch(er => {console.log(er); });
  }
}
