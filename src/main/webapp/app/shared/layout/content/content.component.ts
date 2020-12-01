import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { removeSubscriptions } from '../helpers';
import { LayoutStore } from '../layout.store';

@Component({
    selector: 'jhi-layout-content',
    templateUrl: './content.component.html'
})
export class LayoutContenComponent implements OnInit, OnDestroy {

    private subscriptions?:Array<Subscription> = [];
    public marginTop = "margin-top: calc(3.5rem + 1px);";
    constructor(public layoutStore: LayoutStore) { }

    ngOnInit(): void {
        this.subscriptions?.push(this.layoutStore.layoutOptions.subscribe((layoutOptions) => {
            if(layoutOptions.isNoNavbarBorder) {                
                this.marginTop = "margin-top: calc(3.5rem - 10px);";
            } else {
                this.marginTop = "margin-top: calc(3.5rem + 1px);";
            }
        }));
    }

    /*
    * @method ngOnDestroy
    */
    ngOnDestroy(): void {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
