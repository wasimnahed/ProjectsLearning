import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './dialog/dialog.component';
import { MatListModule } from '@angular/material/list';
import { TodoComponent } from './todo/todo.component';

// import {MdDialog, MdDialogRef} from '@angular/material'

// import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    // DialogOverviewExampleDialog,
    LocalComponent,
    DialogComponent,
    TodoComponent,
  ],
  entryComponents: [
// DialogOverviewExampleDialog,
],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    // MasterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    
  
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
],
  
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log('App Module loaded');
  
}

 }
