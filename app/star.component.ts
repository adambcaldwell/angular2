/**
 * @author: adam.caldwell
 */

import {Component, Input, Output, EventEmitter} from "angular2/core";
// import {StarDirective} from "./star.directive";

@Component({
    selector: 'star',
    templateUrl: 'app/star.template.html',
    inputs: ['isFavorite:is-favorite'],
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
    //directives: [StarDirective]
})

export class StarComponent {

    @Input('is-favorite') isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}