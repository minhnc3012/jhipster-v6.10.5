import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutContenComponent } from './content.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [LayoutContenComponent],
    declarations: [LayoutContenComponent]
})
export class LayoutContentModule {}
