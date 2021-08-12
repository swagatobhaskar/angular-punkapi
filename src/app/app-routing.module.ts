import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RandombeerComponent } from './randombeer/randombeer.component';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'list', component: BeerlistComponent },
  { path: 'random', component: RandombeerComponent },
  { path: 'shop/:id', component: ShopComponent },
  //{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
