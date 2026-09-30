import {useState} from 'react'
import Note from './components/Note.jsx'

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note...')

    const addNote = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)

        const noteObject = {
            id: String(notes.length + 1),
            content: newNote,
            important: Math.random() < 0.5
        }

        setNotes(notes.concat(noteObject)) //add the new note. concat will return a new array
        setNewNote('') //clear the input field
    }


    //called whenever the user edits the input field
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    // an <li> needs a key
    // or, in this case, now the Note needs a key
    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>

            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App