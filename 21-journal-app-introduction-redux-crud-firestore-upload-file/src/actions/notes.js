import Swal from 'sweetalert2';

import { db } from '../firebase/fireabase-config';
import { types } from '../components/types/types';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';


export const startNewNote = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

       
        dispatch( activeNote( doc.id, newNote ) );
        dispatch( addNewNote( doc.id, newNote ) );

    }
}

// active Note
export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = ( id, note) =>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {
        
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );

    }
}

export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ) );
        Swal.fire('Saved', note.title, 'success');
    }
}


export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

// upload  file
export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { active:activeNote } = getState().notes;

        // alert
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;

        console.log( fileUrl )
      

        dispatch( startSaveNote( activeNote ) )
        
         // close
        Swal.close();
    }
}


export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();

        dispatch( deleteNote(id) );

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});

