import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Demo01SharedModule } from 'app/shared/shared.module';
import { Demo01CoreModule } from 'app/core/core.module';
import { Demo01AppRoutingModule } from './app-routing.module';
import { Demo01HomeModule } from './home/home.module';
import { Demo01EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { LayoutModule } from './shared/layout/layout.module';
import { layoutConfig } from './layouts/layout.config';

@NgModule({
  imports: [
    BrowserModule,
    Demo01SharedModule,
    Demo01CoreModule,
    Demo01HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Demo01EntityModule,
    Demo01AppRoutingModule,
    LayoutModule,
    LayoutModule.forRoot(layoutConfig),
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Demo01AppModule {}
