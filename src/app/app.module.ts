import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './products/components/wrapper/wrapper.component';
import { LeftMenuComponent } from './products/components/left-menu/left-menu.component';
import { TopMenuComponent } from './products/components/top-menu/top-menu.component';
import { ProductHeaderComponent } from './products/components/product-header/product-header.component';
import { DataTableComponent } from './products/components/data-table/data-table.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    LeftMenuComponent,
    TopMenuComponent,
    ProductHeaderComponent,
    DataTableComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class AppModule { }
