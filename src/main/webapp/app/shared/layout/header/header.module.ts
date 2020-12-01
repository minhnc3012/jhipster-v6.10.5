import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutHeaderComponent, LayoutHeaderRightComponent, LayoutHeaderLeftComponent } from './header.component';


@NgModule({
    imports: [CommonModule, RouterModule ],
    exports: [LayoutHeaderComponent, LayoutHeaderLeftComponent, LayoutHeaderRightComponent],
    declarations: [LayoutHeaderComponent, LayoutHeaderLeftComponent, LayoutHeaderRightComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutHeaderModule { }
