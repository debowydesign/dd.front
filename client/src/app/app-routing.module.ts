import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {KontaktComponent} from "./kontakt/kontakt.component";
import {MebleComponent} from "./meble/meble.component";
import {MebleNaWymiarComponent} from "./meble-na-wymiar/meble-na-wymiar.component";
import {ONasComponent} from "./o-nas/o-nas.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'meble', component: MebleComponent},
  {path: 'meble-na-wymiar', component: MebleNaWymiarComponent},
  {path: 'o-nas', component: ONasComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
