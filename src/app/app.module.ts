import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LootComponent } from './components/loot/loot.component';

import { OrlyGuard } from './guards/orly/orly.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OrlyGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
