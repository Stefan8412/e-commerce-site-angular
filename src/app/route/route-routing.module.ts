import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from '../welcome/welcome.component';
import { ProductComponent}from "../product/product.component";

const routes: Routes = [{
  path: '',
  component: WelcomeComponent
},
{
  path:"product/:id",
  component: ProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
