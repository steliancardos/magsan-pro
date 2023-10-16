import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produse', component: ProduseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'despre', component: DespreComponent },
  { path: 'produse-baterii', component: BateriiComponent },
  { path: 'produse-boilere', component: BoilereComponent },
  { path: 'produse-calorifere', component: CalorifereComponent },
  { path: 'produse-centrale', component: CentraleComponent },
  { path: 'produse-chiuvete-normale', component: ChiuveteComponent },
  { path: 'produse-chiuvete-baie', component: ChiuveteBaieComponent },
  { path: 'produse-fitinguri', component: FitinguriComponent },
  { path: 'produse-robineti', component: RobinetiComponent },
  { path: 'produse-tevi', component: TeviComponent },
  { path: 'produse-vas-wc', component: VasWcComponent },
  { path: '*', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
