import {useState, useEffect} from 'react'
import Note from './components/Note.jsx'
import Footer from './components/Footer.jsx'
import noteService from './services/notes'
import Notification from './components/Notification.jsx'

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    //get json database
    const hook = () => {
        noteService.getAll().then(initialNotes => setNotes(initialNotes))
    }
    console.log('render', notes.length, 'notes')

    useEffect(hook, []) // the [] is for how often the effect runs, or if its empty then it only renders once

    // setTimeout(() => {
    //     console.log('loop..')
    //     let i = 0
    //     while (i < 99999999999999) {
    //         i++
    //     }
    //     console.log('end')
    // }, 5000)


    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        const noteObject = {
            id: String(notes.length + 1),
            content: newNote,
            important: Math.random() < 0.5
        }

        // instead of adding to the array in memory, now we modify the json db
        // setNotes(notes.concat(noteObject)) //add the new note. concat will return a new array

        noteService.create(noteObject).then(returnedNote => {
            setNotes(notes.concat(returnedNote))
            setNewNote('') //clear the input field
        })
    }

    const toggleImportanceOf = (id) => {
        const noteToChange = notes.find(thisNote => thisNote.id === id)

        //MUST CREATE a COPY of a note and change it
        //create an exact copy of the old note, but flip the important value
        const changedNote = {...noteToChange, important: !noteToChange.important}

        noteService
            .update(id, changedNote).then(returnedNote => {
            setNotes(notes.map(note => note.id === id ? returnedNote : note))
            })
            .catch(error => {
                setErrorMessage(
                    `Note '${noteToChange.content}' was already removed from server`
                )
                setNotes(notes.filter(n => n.id !== id)) //if its true, then keep it
            })

    }

    //called whenever the user edits the input field
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

    // an <li> needs a key
    // or, in this case, now the Note needs a key
    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <button onClick={() => setShowAll(!showAll)}>
                show {showAll ? 'important' : 'all'}
            </button>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/> //use the "() => whatever" when i need to pass in smth to method
                )}
            </ul>

            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>

            <Footer />
        </div>
    )
}

export default App