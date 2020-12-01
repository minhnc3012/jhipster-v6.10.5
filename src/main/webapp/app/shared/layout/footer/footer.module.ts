import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutFooterComponent } from './footer.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [LayoutFooterComponent],
    declarations: [LayoutFooterComponent]
})
export class LayoutFooterModule {}
