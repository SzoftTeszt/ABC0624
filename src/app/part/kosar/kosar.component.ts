import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.css']
})
export class KosarComponent {
 tetelek:any;

 constructor(private base:BaseService){

  this.base.getRendelesek().subscribe(
    (adatok)=> {this.tetelek=adatok; console.log("Vége", this.tetelek)}
  )
 }
 ar(ar:number, mennyiseg:number){
  return Math.round(ar*mennyiseg)
 }

 osszesen(){
  let sum=0;

  for (let i = 0; i < this.tetelek.length; i++) {
    sum += this.ar(this.tetelek[i].aru.ar,this.tetelek[i].mennyiseg)    
  }
  return sum;
 }

 deleteTetel(tetel:any){
  this.base.deleteTetel(tetel);
 }
}
