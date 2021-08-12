import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { RandombeerComponent } from './randombeer/randombeer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerlistComponent,
    RandombeerComponent,
    PagenotfoundComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
