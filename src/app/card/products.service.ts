import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable(
    {providedIn: 'root'}
)

export class ProductService{
    private BaseURL: string = "https://human-benchmark-app-default-rtdb.firebaseio.com/"
    private cardsEndPoint = "cards"
    private rowOnePoint = "row-1"
    private rowTwoPoint = "row-2"
    private rowThreePoint = "row-3"
    
    
    constructor(private http:HttpClient) { }

    getProductsRowOne(){
        return this.http.get<ProductItemModel []>(this.BaseURL + this.cardsEndPoint + "/" + this.rowOnePoint + ".json")
    }

    getProductsRowTwo(){
        return this.http.get<ProductItemModel []>(this.BaseURL + this.cardsEndPoint + "/" + this.rowTwoPoint + ".json")
    }

    getProductsRowThree(){
        return this.http.get<ProductItemModel []>(this.BaseURL + this.cardsEndPoint + "/" + this.rowThreePoint + ".json")
    }

    getOneProduct(index:number){
        return this.http.get<ProductItemModel>(this.BaseURL + this.cardsEndPoint + "/" + index + ".json")
    }
}