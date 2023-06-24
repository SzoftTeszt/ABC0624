import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KategoriakComponent } from './part/kategoriak/kategoriak.component';
import { KosarComponent } from './part/kosar/kosar.component';
import { ArukComponent } from './part/aruk/aruk.component';
import { FormsModule } from '@angular/forms';
import { Enviroments } from 'src/enviroments';


@NgModule({
  declarations: [
    AppComponent,
    KategoriakComponent,
    KosarComponent,
    ArukComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
