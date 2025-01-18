import { Component, EventEmitter, Output } from "@angular/core";

export @Component({
    selector: 'header-component',
    templateUrl: '../../templates/nurse/header/index.html',
    styleUrl:'../../templates/nurse/header/styles.less'
})
class headerComponent {

    @Output("colapes")
    colapes: EventEmitter<boolean> = new EventEmitter<boolean>();

    isColapes = false

    onColapes() {
        this.colapes.emit(this.isColapes);
        this.isColapes = !this.isColapes

    }

    onUnColapes() {
        this.colapes.emit(false);
        this.isColapes = false
    }
} 