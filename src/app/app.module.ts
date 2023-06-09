import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LocalComponent } from './local/local.component';
// import { MasterModule } from './dataCommunication/master/master.module';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LocalComponent,
  ],
  imports: [
    FormsModule
,
    BrowserModule,
    AppRoutingModule,
    // MasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log('App Module loaded');
  
}

 }
