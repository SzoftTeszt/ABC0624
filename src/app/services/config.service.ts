import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  kategoriak=["BBQ","Zöldség, gyümölcs","Tejtermékek, tojás","Pékáru","Hús, hal, felvágott","Alapvető élelmiszerek","Speciális és egészséges táplálkozás","Fagyasztott élelmiszerek","Italok","Alkohol","Háztartás","Szépségápolás","Babaápolás","Kisállat","Otthon, hobbi","Ruházat"]
  constructor() { }
  getKategoriaNev(){
    return this.kategoriak
  }
}
