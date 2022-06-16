import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
function NoteArea() {
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
                <input type="text" placeholder="Title" name="title"/>
                <textarea
                    name="content"
                    placeholder="Write a note here"
                />
                <button>
                    <AddIcon/>
                </button>
            </form>
        </div>
    )
}

export default NoteArea
