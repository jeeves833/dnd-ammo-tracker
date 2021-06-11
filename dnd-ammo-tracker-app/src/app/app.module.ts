import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AmmoModuleComponent } from './ammo-module/ammo-module.component';

@NgModule({
  declarations: [
    AppComponent,
    AmmoModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
