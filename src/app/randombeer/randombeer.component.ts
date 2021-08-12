import { Component, OnInit } from '@angular/core';
import { FetchbeerService } from '../fetchbeer.service';
import { Beer } from '../BeerInterface';

@Component({
  selector: 'app-randombeer',
  templateUrl: './randombeer.component.html',
  styleUrls: ['./randombeer.component.css']
})
export class RandombeerComponent implements OnInit {
  randomBeer: any = [];

  constructor(
    public fetchBeerService: FetchbeerService
  ) {  }

  ngOnInit(): void {
    this.fetchRandomBeer();
  }

  fetchRandomBeer(){
    return this.fetchBeerService.getRandomBeer().subscribe(res => {
      this.randomBeer = res;
    })
  }

}
