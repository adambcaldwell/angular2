/**
 * @author: adam.caldwell
 */

import {Directive, ElementRef} from "angular2/core";
@Directive({
    selector: '[swapIcon]',
    host: {
        '(click)': 'onClick()'
    }
})

export class StarDirective {
    constructor (private el: ElementRef) {

    }

    onClick() {
        this.el.nativeElement.classList.toggle('glyphicon-star');
        this.el.nativeElement.classList.toggle('glyphicon-star-empty');
    }
}