import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Aru } from '../models/aru';
import { BehaviorSubject } from 'rxjs';
import { Tetel } from '../models/tetel';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  rendeles:Tetel[]=[];
  megrendelesek=new BehaviorSubject(this.rendeles)
  
  constructor(private db:AngularFireDatabase) { }

  getRendelesek(){
    this.megrendelesek.next(this.rendeles);
    return this.megrendelesek;
  }

  get(target:any){
    if (!target) target='BBQ'
    const aruRef:AngularFireList<Aru>=this.db.list('/'+target);
    return aruRef;
  }

  addTetel(body:any){
    const index= this.rendeles.findIndex(x => x.aru?.key==body.aru.key)
    console.log("index",index);
    if (index>=0){
        const m1= Number(this.rendeles[index].mennyiseg);
        const m2=Number(body.mennyiseg)
        if (m1) this.rendeles[index].mennyiseg=m1+m2
    }
    else 
      this.rendeles.push(body);
    // console.log("Rendelések", this.rendeles)
    this.getRendelesek()
  }

  deleteTetel(tetel:any)
  {
    this.rendeles=this.rendeles.filter(x=> x!==tetel)
    this.getRendelesek();
  }
}
