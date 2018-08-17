import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ProductComponent } from "./product/product.component";
import { ProductsTableComponent } from "./products-table/products-table.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsHomeComponent } from "./products-home/products-home.component";

@NgModule({
    imports: [
        CommonModule, 
        ProductsRoutingModule,
        FormsModule   
    ],
    declarations: [
        ProductsTableComponent,
        ProductsHomeComponent,
        ProductComponent,
        ProductDetailsComponent
    ]
})
export class ProductsModule {}