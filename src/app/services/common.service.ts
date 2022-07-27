import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  private url = environment.server

  submitMessage(data:any){
    return this.http.post(this.url + '/api/leads', data)
  }
}
