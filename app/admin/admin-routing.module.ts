import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminAddProductComponent } from "./admin-addproduct/admin-add-product.component";
import { AdminTableComponent } from "./admin-table/admin-table.component";
import { AuthGuard } from "../services/auth-guard.service";

@NgModule({
    imports: [RouterModule.forChild([
        {
            path: "",
            redirectTo: "/admin",
            pathMatch: "full"
        },
        {
            path: "admin",
            component: AdminHomeComponent,
            canActivate: [AuthGuard],
            children: [
                {
                    path: "addProduct",
                    component: AdminAddProductComponent
                },
                {
                    path: "adminTable",
                    component: AdminTableComponent
                }
            ]
        }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule {}