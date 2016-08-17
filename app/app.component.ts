import {Component} from "angular2/core";
import {CoursesComponent} from "./courses.component";
import {AuthorComponent} from "./author.component";
import {StarComponent} from "./star.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular2</h1>
        
        <br/>
        
        <!--&lt;!&ndash; one-way binding &ndash;&gt;-->
        <!--<input type="text" [value]="title1" />-->
        <!--Preview: {{ title1 }}-->

        <!--<br/>-->
        <!--<br/>-->
        <!--&lt;!&ndash; two-way binding &ndash;&gt;-->
        <!--<input type="text" [value]="title2" (input)="title2 = $event.target.value"/>-->
        <!--<input type="text" [(ngModel)]="title2"/>-->
        <!--&lt;!&ndash; just a different syntax: <input type="text" bindon-ngModel="title2"/> &ndash;&gt;-->
        <!--Preview: {{ title2 }}-->
    <!---->
        <!--<br/>-->
        <!--<br/>-->
        <!--<input type="button" (click)="title2 = ''" value="Clear" />-->
        <!---->
        <!--<br/>-->
        <!--<br/>-->
        <!--<br/>-->
        <!---->
        <!---->
        <!--<button class="btn btn-primary" -->
            <!--[class.active]="isActive"-->
            <!--[style.backgroundColor]="isActive ? 'blue' : 'grey'">-->
            <!--Submit-->
        <!--</button>-->
        <!---->
        <!--<br/>-->
        <!--<br/>-->
        <!---->
        <!--<div (click)="onDivClick()">-->
            <!--<button (click)="onClick($event)">Submit</button>-->
        <!--</div>-->
        <!--&lt;!&ndash; This is just a different syntax for the same functionality:x <button on-click="onClick()">Submit</button>&ndash;&gt;-->
        <!---->
        <!--<br/>-->
        <!--<br/>-->
        
        <i class="glyphicon glyphicon-star"></i>
        
        <star [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></star>
        
        <!--<courses></courses>-->
        <!--<authors></authors>-->
    `,
    directives: [CoursesComponent, AuthorComponent, StarComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }
    // title1 = "Angular App - 1";
    // title2 = "Angular App - 2";
    //
    // isActive = false;
    //
    // onClick($event) {
    //     $event.stopPropagation(); // Stops bubbling - standard DOM event
    //     console.log("Clicked", $event);
    // }
    //
    // onDivClick() {
    //     console.log("Handled by Div");
    // }
}