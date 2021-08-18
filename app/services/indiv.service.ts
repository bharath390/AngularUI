import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Individual } from '../models/Individual';


@Injectable({
  providedIn: 'root'
})
export class IndivService {

  indvs : Individual[]; 
  data : Observable<any>;

  constructor() { 
    this.indvs = [{
      indivId : 123,
      firstName : 'Timothee',
      lastName : 'chalamet',
      age : 29,
      gender : 'Male',
      address : {
        street : '2016 Trappers cove',
        city : 'Lansing',
        state : 'MI'
      },
      image : 'http://lorempixel.com/400/200/people/2/',
      isActive : true,
      hide : true
    },
    {
      indivId : 1234,
      firstName : 'Jessica',
      lastName : 'biel',
      age : 30,
      gender : 'Female',
      address : {
        street : '2035 Cella lorca',
        city : 'Santa fe',
        state : 'NM'
      },
      image : 'http://lorempixel.com/400/200/people/5/',
      hide : true
    }
  ]
  
  }

  getIndivs():Observable<Individual[]>{
    return of(this.indvs);
  }

  addIndv(indv : Individual){
    this.indvs.unshift(indv);
  }

  getDate(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      },2000);

      setTimeout(()=>{
        observer.next(3);
      },3000);

      setTimeout(()=>{
        observer.next(4);
      },4000);

    });

    return this.data
  }
}
