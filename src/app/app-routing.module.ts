import { ContactListComponent } from './component/contact-list/contact-list.component';
import { HomeComponent } from './component/home/home.component';
import { ContactCreateComponent } from './component/contact-create/contact-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: "", pathMatch: "full",redirectTo: "home"},
{path: "home", component: HomeComponent},
{path: "contact-create", component: ContactCreateComponent},
{path: "contact-list", component: ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
