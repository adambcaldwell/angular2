System.register(["angular2/core", "./courses.component", "./author.component", "./star.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, author_component_1, star_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (author_component_1_1) {
                author_component_1 = author_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular2</h1>\n        \n        <br/>\n        \n        <!--&lt;!&ndash; one-way binding &ndash;&gt;-->\n        <!--<input type=\"text\" [value]=\"title1\" />-->\n        <!--Preview: {{ title1 }}-->\n\n        <!--<br/>-->\n        <!--<br/>-->\n        <!--&lt;!&ndash; two-way binding &ndash;&gt;-->\n        <!--<input type=\"text\" [value]=\"title2\" (input)=\"title2 = $event.target.value\"/>-->\n        <!--<input type=\"text\" [(ngModel)]=\"title2\"/>-->\n        <!--&lt;!&ndash; just a different syntax: <input type=\"text\" bindon-ngModel=\"title2\"/> &ndash;&gt;-->\n        <!--Preview: {{ title2 }}-->\n    <!---->\n        <!--<br/>-->\n        <!--<br/>-->\n        <!--<input type=\"button\" (click)=\"title2 = ''\" value=\"Clear\" />-->\n        <!---->\n        <!--<br/>-->\n        <!--<br/>-->\n        <!--<br/>-->\n        <!---->\n        <!---->\n        <!--<button class=\"btn btn-primary\" -->\n            <!--[class.active]=\"isActive\"-->\n            <!--[style.backgroundColor]=\"isActive ? 'blue' : 'grey'\">-->\n            <!--Submit-->\n        <!--</button>-->\n        <!---->\n        <!--<br/>-->\n        <!--<br/>-->\n        <!---->\n        <!--<div (click)=\"onDivClick()\">-->\n            <!--<button (click)=\"onClick($event)\">Submit</button>-->\n        <!--</div>-->\n        <!--&lt;!&ndash; This is just a different syntax for the same functionality:x <button on-click=\"onClick()\">Submit</button>&ndash;&gt;-->\n        <!---->\n        <!--<br/>-->\n        <!--<br/>-->\n        \n        <i class=\"glyphicon glyphicon-star\"></i>\n        \n        <star [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></star>\n        \n        <!--<courses></courses>-->\n        <!--<authors></authors>-->\n    ",
                        directives: [courses_component_1.CoursesComponent, author_component_1.AuthorComponent, star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map