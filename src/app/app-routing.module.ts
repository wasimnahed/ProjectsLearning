import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { AuthGuard } from './guard/auth.guard';
import { PopupComponent } from './popup/popup.component';
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
    path:'popup',
    component:PopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
