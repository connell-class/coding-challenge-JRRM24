import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GroceryDetailsComponent} from "C:/Users/jorda/Documents/angularstuff/coding_challenge/grocery-app/src/app/grocery-details/grocery-details.component"

const routes: Routes = [ {path: 'detail/:id', component: GroceryDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
