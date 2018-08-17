import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsTableComponent } from "./products-table/products-table.component";
import { ProductsHomeComponent } from "./products-home/products-home.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/products",
                pathMatch: "full"
            },
            {
                path: "products",
                component: ProductsHomeComponent,
                children: [
                    {
                        path: "",
                        component: ProductsTableComponent,
                        // настройка для отображения внутри router-outlet расположенного 
                        // в ProductsTableComponent
                        // children: [
                        //     {
                        //         path: ":id",
                        //         component: ProductDetailsComponent
                        //     },
                        //     {
                        //         path: "",
                        //         component: ProductDetailsComponent
                        //     }
                        // ]
                    },
                    // настройка для отображения внутри router-outlet расположенного 
                    // в ProductsHomeComponent
                    {
                        path: ":id",
                        component: ProductDetailsComponent
                    },
                    {
                        path: "",
                        component: ProductDetailsComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {}