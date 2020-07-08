import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductDto } from '../_models/ProductDto';
import { PricingResponse } from '../_models/PricingReponse';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {

  }

  private baseUrl: String = environment.baseUrl; 
  private getAllProductsUrl = this.baseUrl + 'api/getallproducts';
  private getPriceListforProductUrl = this.baseUrl + 'api/getbulkprices';

  getAllProducts() {
    return this.http.get<ProductDto[]>(this.getAllProductsUrl);
  }

  getPriceListforProduct(id:number) {
    const params = new HttpParams().set('productid', id.toString());
    return this.http.get<PricingResponse[]>(this.getPriceListforProductUrl,{params});
  }
}
