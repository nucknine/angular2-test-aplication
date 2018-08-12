import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MyTableComponent } from './my-table/my-table.component';
import { ProductService } from './services/product';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyTableComponent, ProductComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}