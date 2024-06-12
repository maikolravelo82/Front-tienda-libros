import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { VarNavComponent } from './components/var-nav/var-nav.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PrewiewComponent } from './components/prewiew/prewiew.component';
import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PrewiewComponent
  ],
  imports: [
    CommonModule,
    HomeComponent,
    VarNavComponent,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
   HttpClient
  ],
  exports:[
    HomeComponent,
  ]
})
export class AppModule { }
