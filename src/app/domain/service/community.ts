import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private http: Http) {
  }

  getCommunities() {
    return this.http.get('http://localhost:8080/rest/communities')
      .toPromise().then(res => res.json())
      .catch(er => {console.log(er); });
  }
}
