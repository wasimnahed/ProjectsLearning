import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { AuthGuard } from './guard/auth.guard';
import { PopupComponent } from './popup/popup.component';
import { StorageComponent } from './storage/storage.component';
import { SessionComponent } from './session/session.component';
const routes: Routes = [
  {
    path: 'master', canActivate: [AuthGuard],
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'local',
    component: LocalComponent
  },

  {
    path: 'popup',
    component: PopupComponent
  },

  {
    path: 'storage',
    component: StorageComponent

  },
  {
    path: 'session',
    component: SessionComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
