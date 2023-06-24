import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC';
  aktualisKategoria:any="BBQ";
  kategoriaValtas(event:any){
    this.aktualisKategoria=event;
  }
}
