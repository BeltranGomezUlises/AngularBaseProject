import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScreenService {

    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    largeBreakpoint = 800;
    screenWidth = 1000;
    screenHeight = 800;


    constructor() {
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener("resize", evt => this.onRezise(evt));
        } catch (err) {
            //we're going with default screen dimensions
        }
    }

    isLarge(): boolean {        
        return this.screenWidth >= this.largeBreakpoint;
    }

    onRezise($event): void {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }


}