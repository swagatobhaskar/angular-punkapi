import { Component, OnInit } from '@angular/core';
import { FetchbeerService } from '../fetchbeer.service';

@Component({
  selector: 'app-randombeer',
  templateUrl: './randombeer.component.html',
  styleUrls: ['./randombeer.component.css']
})
export class RandombeerComponent implements OnInit {
  randomBeer: any = [];
  price: number = 0;

  constructor(
    public fetchBeerService: FetchbeerService
  ) {  }

  ngOnInit(): void {
    this.fetchRandomBeer();
    this.price = Math.floor(Math.random() * 100);
  }

  fetchRandomBeer(){
    return this.fetchBeerService.getRandomBeer().subscribe(res => {
      this.randomBeer = res;
    })
  }

}
