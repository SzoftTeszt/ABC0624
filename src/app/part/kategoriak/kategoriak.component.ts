import { Component, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-kategoriak',
  templateUrl: './kategoriak.component.html',
  styleUrls: ['./kategoriak.component.css']
})
export class KategoriakComponent {
kategoriak:any;
selectedIndex=0;
@Output() kategoriaValtas: EventEmitter<any>= new EventEmitter();

constructor(private config:ConfigService){
  this.kategoriak=this.config.getKategoriaNev();
}

click(index:any, elem:any)
{
  console.log("i:",index,"; elem:", elem)
  this.selectedIndex=index;
  this.kategoriaValtas.emit(elem)

}

isActive(index:any){
  return this.selectedIndex==index;
}
}
