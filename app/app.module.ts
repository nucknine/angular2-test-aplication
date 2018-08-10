import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { MyTable } from './my-table/my-table.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyTable],
  bootstrap: [AppComponent]
})
export class AppModule {}