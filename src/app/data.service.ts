import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  property =  [
    {  id:  1,  name:  '', size: "", description: '' },
   ];

   return {property};

  }
}
