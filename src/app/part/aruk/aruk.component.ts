import { Component, Input, SimpleChanges } from '@angular/core';
import { map } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-aruk',
  templateUrl: './aruk.component.html',
  styleUrls: ['./aruk.component.css']
})
export class ArukComponent {
  @Input() aktualisKategoria:any;
  aruk:any;
  suly:any=[];
  pushSuly()
  {
    for (let i = 0.1; i <= 3; i=i+0.1) {
      this.suly.push(Math.round(i*10)/10)
      
    }
  }
  ngOnChanges(changes:SimpleChanges){
    let change = changes['aktualisKategoria']
    if (change && change.currentValue!=change.previousValue)
          this.get()
    
  }

  get(){
    console.log("AktKategória", this.aktualisKategoria)

    this.base.get(this.aktualisKategoria).snapshotChanges().pipe(
      map( ch=>ch.map(c=>({key:c.payload.key, ...c.payload.val() })))
    ).subscribe(
      (a)=>  this.aruk=a
    )
  }

  constructor(private base:BaseService){
    this.pushSuly();
  }

  addTetel(aru:any,mennyiseg:any){
    if (mennyiseg>0)
      {
        const tetel = {aru:aru, mennyiseg:mennyiseg}
        this.base.addTetel(tetel);
        // console.log(tetel)
      }
  }
}
