/**
 * @author: adam.caldwell
 */
import {Component} from "angular2/core";
import {AuthorService} from "./author.services";

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors"> {{ author }} </li>
        </ul>
        `,
    providers: [AuthorService]
})

export class AuthorComponent {
    title: string = "Title of authors page";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}