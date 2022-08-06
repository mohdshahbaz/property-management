import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getProperties(){ 
       return this.httpClient.get(this.SERVER_URL + 'properties');
  }

  public createPolicy(data: any){
      return this.httpClient.post(`${this.SERVER_URL + 'properties'}`, data)
  }

 
}

