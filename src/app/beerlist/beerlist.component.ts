import { Component, OnInit } from '@angular/core';
import { FetchbeerService } from '../fetchbeer.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent implements OnInit {

  Beers: any = [];

  constructor(
    public fetchBeerService: FetchbeerService
    ) { }

  ngOnInit(): void {
    this.fetchBeerList();
  }

  fetchBeerList(){
    return this.fetchBeerService.getBeerList().subscribe((res: {}) => {
      this.Beers = res;
    })
  }

}
