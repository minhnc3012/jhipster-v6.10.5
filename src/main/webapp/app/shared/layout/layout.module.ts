import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutConfig } from "./layout.config";
import { layoutProvider } from "./layout.provider";
import { LayoutService } from "./layout.service";
//import { RoutingService } from "./routing.service";
import { LayoutWrapperModule } from './wrapper/wrapper.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        RouterModule
    ],
    exports: [
        LayoutWrapperModule
    ],
    providers: [
        // RoutingService
    ]
})
export class LayoutModule {
    /**
     * @method constructor
     * @param parentModule LayoutModule
     */
    constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
        if (parentModule) {
            throw new Error('LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }

    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    static forRoot(layoutConfig: LayoutConfig): ModuleWithProviders<LayoutModule> {
        return {
            ngModule: LayoutModule,
            providers: [...layoutProvider(layoutConfig), LayoutService]
        };
    }
}