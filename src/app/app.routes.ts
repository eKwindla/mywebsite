import { Routes } from '@angular/router';
import {NothingComponent} from "../nothing/nothing.component";
import {AppComponent} from "./app.component";
import {NavigationComponent} from "../navigation/navigation.component";

export const routes: Routes = [
  {
    path:"home",
    title: "home",
    component: NavigationComponent,
  },
  {
    path:"**",
    title:"ups, nothing found :0",
    component: NothingComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
