import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestinitComponent } from './testinit/testinit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { MebleComponent } from './meble/meble.component';
import { ONasComponent } from './o-nas/o-nas.component';
import { MebleNaWymiarComponent } from './meble-na-wymiar/meble-na-wymiar.component';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    TestinitComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    MebleComponent,
    ONasComponent,
    MebleNaWymiarComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
