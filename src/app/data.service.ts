import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  property =  [
    {  id:  1,  name:  'PO1', size: 1000, description: 'Insurance policy number PO1' },
   ];

   return {property};

  }
}
