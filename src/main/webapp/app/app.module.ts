import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AwafedSharedModule } from 'app/shared/shared.module';
import { AwafedCoreModule } from 'app/core/core.module';
import { AwafedAppRoutingModule } from './app-routing.module';
import { AwafedHomeModule } from './home/home.module';
import { AwafedEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AwafedSharedModule,
    AwafedCoreModule,
    AwafedHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AwafedEntityModule,
    AwafedAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AwafedAppModule {}
