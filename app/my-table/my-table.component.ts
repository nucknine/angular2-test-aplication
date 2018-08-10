import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { Product } from "./product.component";

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html'
})
export class MyTable {
    @Input() 
    rows: number = 0;

    
    
    filter: Product[] = [];
    
    ngOnInit(){
        for (let i = 0; i < this.rows; i++) {
            this.filter.push(this.products[i]);
        }
    }

    deleteProduct(value) {
        let delItem = [value];
        for (var i = 0; i < this.filter.length; i++) {
            var obj = this.filter[i];
        
            if (delItem.indexOf(obj.id) !== -1) {
                this.filter.splice(i, 1);
                i--;
                console.log(obj.id);
            }
        }
    }

}