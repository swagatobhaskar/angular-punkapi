import { Component, OnInit } from '@angular/core';
import { FetchbeerService } from '../fetchbeer.service';
import { Beer } from '../BeerInterface';

@Component({
  selector: 'app-randombeer',
  templateUrl: './randombeer.component.html',
  styleUrls: ['./randombeer.component.css']
})
export class RandombeerComponent implements OnInit {
  Beer: Beer = {};

  constructor(
    public fetchBeerService: FetchbeerService;
  ) { }

  ngOnInit(): void {
    this.fetchRandomBeer();
  }

  fetchRandomBeer(){
    return this.fetchBeerService.getRandomBeer().subscribe((res: Beer) => {
      this.Beer = res;
    })
  }

}
