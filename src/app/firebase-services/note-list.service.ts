import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface'
import { Firestore, collection, doc, collectionData, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {

  firestore: Firestore = inject(Firestore);
  trashNotes: Note[] = [];
  normalNotes: Note[] = [];
  unsubTrash;
  unsubNotes;

  constructor() {
    this.unsubTrash = this.subTrashList();
    this.unsubNotes = this.subNotesList();
  }

  subTrashList() {
    return onSnapshot(this.getTrashRef(), (list) => {
      this.trashNotes = [];
      list.forEach(element => {
        this.trashNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  subNotesList() {
    return onSnapshot(this.getNotesRef(), (list) => {
      this.normalNotes = [];
      list.forEach(element => {
        this.normalNotes.push(this.setNoteObject(element.data(), element.id));
      });
    });
  }

  ngOnDestroy() {
    this.unsubTrash();
  }

  setNoteObject(obj: any, id: string):Note {
    return {
      id: id,
      type: obj.type || "note",
      title: obj.title || " ",
      content: obj.content || " ",
      marked: obj.marked || false,
    }
  }

  getNotesRef() {
    return collection(this.firestore, 'notes');
   }

  getTrashRef() {
    return collection(this.firestore, 'trash');
  }

  getSingleDocRef(colId:string, docId:string) {
    return doc(collection(this.firestore, colId), docId);

  }
}
