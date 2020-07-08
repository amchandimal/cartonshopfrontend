import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../_services/rest.service';
import { ProductDto } from '../_models/ProductDto';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  products:ProductDto[] = [];

  constructor(private restService:RestService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.restService.getAllProducts().subscribe(prod=>{
        this.products = prod;
    });
    
  }

  onSubmit(f:NgForm){
    let prod = f.value.prod;
    let cartons = f.value.cartons;
    let units = f.value.units;

    if(prod==""){
      alert("Please select a Product");
    }

    if(cartons<0){
      alert("Number of Cartons Cannot be Less than 0");
    }

    if(units<0){
      alert("Number of Units Cannot be Less than 0");
    }

  }
}
