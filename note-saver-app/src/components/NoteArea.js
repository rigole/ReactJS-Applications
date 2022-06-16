import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
function NoteArea({ onAdd }) {
    const [expanded, setExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name] : value,
            }
        })
    }
    function handleExpanded(){
        setExpanded(true);
    }
    function submitButton(e) {
        onAdd(note);
        setNote({
            title:"",
            content:"",
        });

        e.preventDefault()
    }

    return (
        <div>
            <form >
                {expanded && (
                    <input
                        type="text"
                        value={note.title}
                        onChange={handleChange}
                        placeholder="Title"
                        name="title"
                    />
                )}
              <p>
                  <textarea
                      value={note.content}
                      onClick={handleExpanded}
                      onChange={handleChange}
                      rows={expanded ? 3 : 1}
                      name="content"
                      placeholder="Write a note here"
                  />
              </p>

                <button onClick={submitButton}>
                    <AddIcon/>
                </button>
            </form>
        </div>
    )
}

export default NoteArea
