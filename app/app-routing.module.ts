import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { _404Component } from "./404/_404.component";
import { AdminHomeComponent } from "./admin/admin-home/admin-home.component";
import { AuthGuard } from "./services/auth-guard.service";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        {
            path: "home", 
            component: HomeComponent,
            // children: [
            //     {
            //         path: "login",             
            //         component: LoginComponent
            //     }
            // ]
        },
        {
            path: "admin", 
            canActivate: [AuthGuard],
            component: AdminHomeComponent
        },        
        // {
        //     path: '**', 
        //     component: _404Component
        // }
    ])],
    exports: [RouterModule]
})
export class AppRoutingMoule {}