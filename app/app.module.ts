import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingMoule } from './app-routing.module';

import { HomeComponent} from './home/home.component';
import { ProductService } from './services/product.service';

import { ProductsModule } from './products/products.module';
import { _404Component } from './404/_404.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingMoule,
    ProductsModule,
    AdminModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent, 
    HomeComponent,
    _404Component,
    LoginComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}