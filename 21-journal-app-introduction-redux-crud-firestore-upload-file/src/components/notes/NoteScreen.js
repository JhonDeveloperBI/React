import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    
    const dispatch = useDispatch(); 
    const activeId = useRef( note.id );

    useEffect(() => {

        if( note.id !== activeId.current){
            reset( note );
            activeId.current = note.id;
        }
      
    }, [note, reset])

    useEffect( () =>{

      console.log(formValues) 
      dispatch( activeNote(formValues.id, { ...formValues }));

    },[ formValues, dispatch ])
    
    const { body, title } = formValues;

    const handleDelete = () =>{
        dispatch( startDeleting( activeNote ));
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    autoComplete="off"
                    value={ title }
                    onChange= { handleInputChange }
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"  
                    value={ body }
                    onChange= { handleInputChange }
                ></textarea>

                {
                    ( note.url ) &&
                    (<div className="notes__image">
                        <img 
                            src={ note.url }
                            alt="imagen"
                        />
                    </div>
                    )

                }


            </div>

            <button className="btn btn-danger" onClick={ handleDelete }>
                Delete
            </button>

        </div>
    )
}
