import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduseComponent } from './produse/produse.component';
import { ContactComponent } from './contact/contact.component';
import { DespreComponent } from './despre/despre.component';
import { BateriiComponent } from './baterii/baterii.component';
import { BoilereComponent } from './boilere/boilere.component';
import { CalorifereComponent } from './calorifere/calorifere.component';
import { CentraleComponent } from './centrale/centrale.component';
import { ChiuveteComponent } from './chiuvete/chiuvete.component';
import { ChiuveteBaieComponent } from './chiuvete-baie/chiuvete-baie.component';
import { FitinguriComponent } from './fitinguri/fitinguri.component';
import { RobinetiComponent } from './robineti/robineti.component';
import { TeviComponent } from './tevi/tevi.component';
import { VasWcComponent } from './vas-wc/vas-wc.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProduseComponent,
    ContactComponent,
    DespreComponent,
    BateriiComponent,
    BoilereComponent,
    CalorifereComponent,
    CentraleComponent,
    ChiuveteComponent,
    ChiuveteBaieComponent,
    FitinguriComponent,
    RobinetiComponent,
    TeviComponent,
    VasWcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
