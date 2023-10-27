import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './products/components/wrapper/wrapper.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path:'dashboard',component:WrapperComponent},
  {path:'landing-page',component:LandingPageComponent}
  ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
