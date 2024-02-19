import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteComponent } from './note-list/note/note.component';
import { FormsModule } from '@angular/forms';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoteListComponent,
    NoteComponent,
    AddNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"danotes-82fc4","appId":"1:575441426964:web:98e2dfcf7fc6a35398e501","storageBucket":"danotes-82fc4.appspot.com","apiKey":"AIzaSyAFf2aHwqifKohmBV_zurNUHXYWgv4zOUk","authDomain":"danotes-82fc4.firebaseapp.com","messagingSenderId":"575441426964"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
