import { Component, OnInit, Output, EventEmitter, ViewChild, TemplateRef, ContentChild, Renderer2, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrightnessColor, LayoutOptions } from '../layout.config';
import { LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../helpers';
import { Subscription } from 'rxjs';

/**
 * Header Logo
 */
@Component({
    selector: 'jhi-layout-header-left',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class LayoutHeaderLeftComponent {
    @ViewChild('templateRef', { static: true })
    public templateRef!: TemplateRef<any>;
}

/**
 * Header Logo Mini
 */
@Component({
    selector: 'jhi-layout-header-right',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class LayoutHeaderRightComponent {
    @ViewChild('templateRef', { static: true })
    public templateRef!: TemplateRef<any>;
}

@Component({
    selector: 'jhi-layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class LayoutHeaderComponent implements OnInit, OnDestroy {
    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleControlSidebar: EventEmitter<any> = new EventEmitter<any>();

    @Input() useToggleMenuSidebar = true;
    @Input() useToggleControlSidebar = true;

    public layoutOptions!: LayoutOptions;
    public searchForm?: FormGroup;
    public skin!: BrightnessColor;
    private subscriptions?:Array<Subscription> = [];

    @ContentChild(LayoutHeaderLeftComponent, { static: true })
    public jhiLayoutHeaderLeft!: LayoutHeaderLeftComponent;
    @ContentChild(LayoutHeaderRightComponent, { static: true })
    public jhiLayoutHeaderRight!: LayoutHeaderRightComponent;

    constructor(
        private renderer: Renderer2,
        private layoutStore: LayoutStore) {
    }

    ngOnInit(): void {
        this.subscriptions?.push(this.layoutStore.layoutOptions.subscribe(layoutOptions => {
            if (layoutOptions.colorVariants && layoutOptions.colorVariants?.navbar) {
                this.skin = layoutOptions.colorVariants.navbar;
            } else {
                this.skin = { brightness: 'dark', color: 'primary' };
            }
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
        this.searchForm = new FormGroup({
            search: new FormControl(null)
        });
    }

    toggleMenuSidebarHandle(): void {
        if(this.layoutOptions !== undefined) {
            if (this.layoutOptions.sidebarMenuOpened) {
                this.renderer.removeClass(document.body, 'sidebar-open');
                this.renderer.addClass(document.body, 'sidebar-collapse');
                this.layoutOptions.sidebarMenuOpened = false;
            } else {
                this.renderer.removeClass(document.body, 'sidebar-collapse');
                this.renderer.addClass(document.body, 'sidebar-open');
                this.layoutOptions.sidebarMenuOpened = true;
                
            }
            this.layoutStore.setLayoutOptions(Object.assign({}, this.layoutOptions));
            this.toggleMenuSidebar.emit(this.layoutOptions.sidebarMenuOpened);
        }
    }

    toggleControlSidebarHandle(): void {
        if(this.layoutOptions !== undefined) {
            if (this.layoutOptions.sidebarControlOpened) {
                this.renderer.removeClass(document.body, 'control-sidebar-open');
                this.renderer.addClass(document.body, 'control-sidebar-collapse');
                this.layoutOptions.sidebarControlOpened = false;
            } else {
                this.renderer.removeClass(document.body, 'control-sidebar-collapse');
                this.renderer.addClass(document.body, 'control-sidebar-open');
                this.layoutOptions.sidebarControlOpened = true;
            }
            this.layoutStore.setLayoutOptions(Object.assign({}, this.layoutOptions));
            this.toggleControlSidebar.emit(this.layoutOptions?.sidebarControlOpened);
        }
    }

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy(): void {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
