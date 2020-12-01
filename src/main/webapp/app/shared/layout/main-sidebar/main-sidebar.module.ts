import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutMainSidebarComponent, MainSidebarUserPanelComponent, MainSidebarMenuTreeViewComponent } from './main-sidebar.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, RouterModule, NgbCollapseModule],
    exports: [LayoutMainSidebarComponent, MainSidebarUserPanelComponent, MainSidebarMenuTreeViewComponent, SidebarMenuComponent],
    declarations: [LayoutMainSidebarComponent, MainSidebarUserPanelComponent, MainSidebarMenuTreeViewComponent, SidebarMenuComponent]
})
export class LayoutMainSidebarModule {}
