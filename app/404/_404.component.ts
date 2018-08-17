import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'not-found',
    template: `<h1>{{text}}<h1>`
})
export class _404Component {
    text: string = 'Page not found';
}