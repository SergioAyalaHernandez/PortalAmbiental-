import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayaoutComponent} from "./components/layaout/layaout.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [

  {
    path:'',
    component: LayaoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
