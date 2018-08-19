import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminAddProductComponent } from "./admin-addproduct/admin-add-product.component";
import { AdminTableComponent } from "./admin-table/admin-table.component";
import { ProductComponent } from "../products/product/product.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminHomeComponent,
        AdminAddProductComponent,
        AdminTableComponent
    ]
})
export class AdminModule {}