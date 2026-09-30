import Note from './components/Note.jsx'

const App = ({ notes }) => {

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
        </div>
    )
}

export default App