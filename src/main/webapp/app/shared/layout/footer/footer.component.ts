import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutOptions } from '../layout.config';
import { LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../helpers';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-layout-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class LayoutFooterComponent implements OnInit, OnDestroy {

    public layoutOptions?: LayoutOptions;
    private subscriptions?:Array<Subscription> = [];

    constructor(private layoutStore: LayoutStore) { }

    /**
     * @method ngOnInit
     */
    ngOnInit(): void {
        this.subscriptions?.push(this.layoutStore.layoutOptions.subscribe(layoutOptions => {
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

    /**
     * @method ngOnInit
     */
   ngOnDestroy(): void {
    this.subscriptions = removeSubscriptions(this.subscriptions);
}
}
