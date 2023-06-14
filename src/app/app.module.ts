import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './components/local/local.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { PopupComponent } from './components/popup/popup.component';
import { TodoComponent } from './components/todo/todo.component';
import { StorageComponent } from './components/storage/storage.component';
import { SessionComponent } from './components/session/session.component';
import { RLoginComponent } from './components/r-login/r-login.component';
import { TLoginComponent } from './components/t-login/t-login.component';




@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    PopupComponent,
    TodoComponent,
    StorageComponent,
    SessionComponent,
    RLoginComponent,
    TLoginComponent,
    
  ],
  entryComponents: [
],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,
    
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
