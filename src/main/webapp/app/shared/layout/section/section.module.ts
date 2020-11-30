import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutSectionComponent, LayoutSectionHeaderComponent, LayoutSectionContentComponent } from './section.component';
import { RoutingService } from '../routing.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [LayoutSectionComponent, LayoutSectionHeaderComponent, LayoutSectionContentComponent],
    declarations: [LayoutSectionComponent, LayoutSectionHeaderComponent, LayoutSectionContentComponent],
    providers: [RoutingService]
})
export class SectionModule {}
