import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { AuthGuard } from './guard/auth.guard';
import { TodoComponent } from './todo/todo.component';
const routes: Routes = [
  {
    path: 'master', canActivate:[AuthGuard],
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path:'local',
    component:LocalComponent
  },

  {
    path:'todo',
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
