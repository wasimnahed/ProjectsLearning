import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
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
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ChildComponent } from './components/child/child.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from '@angular/material/card';
import { PasswordConfirmpasswordComponent } from './components/password-confirmpassword/password-confirmpassword.component';
// import { MatCardContactModule } from '@angular/material/card';


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
    ReactiveFormComponent,
    ChildComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    ContactComponent,
    ContactlistComponent,
    PasswordConfirmpasswordComponent,
  
    
  
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
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    // MatCardContactModule,
    
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
],

// schemas:[

//   NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA

// ],
  
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
  console.log('App Module loaded');
  
}

 }
