import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { LlaveComponent } from './llave/llave.component';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    LlaveComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
