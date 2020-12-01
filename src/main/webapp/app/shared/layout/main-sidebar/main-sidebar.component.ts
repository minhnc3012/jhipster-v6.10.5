import {
    Component,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
    TemplateRef,
    ContentChild,
    OnDestroy
} from '@angular/core';
import { LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../helpers';
import { LayoutOptions } from '../layout.config';
import { Subscription } from 'rxjs';

@Component({
    selector: 'jhi-sidebar-user-panel',
    template: '<ng-template #templateRef><div class="user-panel mt-3 pb-3 mb-3 d-flex"><ng-content></ng-content></div></ng-template>'
})
export class MainSidebarUserPanelComponent {
    @ViewChild('templateRef', { static: true }) 
    public templateRef!: TemplateRef<any>;
}

@Component({
    selector: 'jhi-sidebar-menu-treeview',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class MainSidebarMenuTreeViewComponent {
    @ViewChild('templateRef', { static: true }) 
    public templateRef!: TemplateRef<any>;
}

@Component({
    selector: 'jhi-layout-main-sidebar',
    templateUrl: './main-sidebar.component.html',
    styleUrls: ['./main-sidebar.component.scss']
})
export class LayoutMainSidebarComponent implements OnInit, AfterViewInit, OnDestroy {

    public logo = '#';
    public appName = 'AdminLTE 3';
    public skin!: string;
    public layoutOptions!: LayoutOptions;
    private subscriptions?:Array<Subscription> = [];

    @Output() 
    mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('mainSidebar', { static: false }) 
    public mainSidebar!: ElementRef;

    @ContentChild(MainSidebarUserPanelComponent, { static: true })
    public jhiMainSidebarUserPanel!: MainSidebarUserPanelComponent;
    @ContentChild(MainSidebarMenuTreeViewComponent, { static: true })
    public jhiMainSidebarMenuTreeView!: MainSidebarMenuTreeViewComponent;

    constructor(
        private layoutStore: LayoutStore
    ) { }

   /**
    * @method ngOnInit
    */
    ngOnInit(): void {
        this.subscriptions?.push(this.layoutStore.logo.subscribe(value => {
            this.logo = value;
        }));
        this.subscriptions?.push(this.layoutStore.appName.subscribe(value => {
            this.appName = value;
        }));
        this.subscriptions?.push(this.layoutStore.layoutOptions.subscribe(layoutOptions => {
            if (layoutOptions.colorVariants && layoutOptions.colorVariants.menuSidebar) {
                this.skin = layoutOptions.colorVariants.menuSidebar;
            } else {
                this.skin = 'dark-primary';
            }
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

   /**
    * @method ngAfterViewInit
    */
    ngAfterViewInit(): void {
        this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
    }

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy(): void {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}

