import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FetchbeerService } from '../fetchbeer.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {

  Beers: any = [];

  constructor(
    public fetchBeerService: FetchbeerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.fetchBeerList();
  }

  handleBeerBuy(id: number) {
    const beerId = id;
    this.router.navigate(['/shop/', beerId]);
  }

  fetchBeerList(){
    return this.fetchBeerService.getBeerList().subscribe((res: {}) => {
      this.Beers = res;
    })
  }

}
