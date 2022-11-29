import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThanksComponent } from './components/thanks/thanks.component'
import { HomeComponent } from "./components/home/home.component";


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'thanks',
    component: ThanksComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
