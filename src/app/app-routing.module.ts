import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProduseComponent } from './produse/produse.component';
import { ContactComponent } from './contact/contact.component';
import { DespreComponent } from './despre/despre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produse', component: ProduseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'despre', component: DespreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
