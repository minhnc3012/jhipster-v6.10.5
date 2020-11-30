import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutWrapperComponent } from './wrapper.component';

@NgModule({
    imports: [CommonModule],
    exports: [LayoutWrapperComponent],
    declarations: [LayoutWrapperComponent]
})
export class LayoutWrapperModule {}
