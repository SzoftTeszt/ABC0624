import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Aru } from '../models/aru';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private db:AngularFireDatabase) { }

  get(target:any){
    if (!target) target='BBQ'
    const aruRef:AngularFireList<Aru>=this.db.list('/'+target);
    return aruRef;
  }
}
