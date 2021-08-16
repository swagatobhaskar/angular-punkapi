import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchbeerService } from '../fetchbeer.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  customerForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
    addressForm: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
      block: new FormControl('')
    })
  });

  showDiag: boolean = false;
  beerId!: any;
  singleBeer: any = [];

  constructor(
    private route: ActivatedRoute,
    private fetchBeerService: FetchbeerService
  ) { }

  ngOnInit(): void {
    this.beerId = this.route.snapshot.paramMap.get("id");
    this.fetchBeerById(+this.beerId);   // + operator converts string to number
  };

  fetchBeerById(id: number) {
    this.fetchBeerService.getBeerById(id).subscribe(res => {
      this.singleBeer = res
    })
  }

  onSubmit(){
    setTimeout(function showDialogue() {
      this.showDiag = true
    }, 5000);
  }

}
