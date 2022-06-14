import React from "react"
import AddIcon from '@mui/icons-material/Add';
function NoteArea() {
    return (
        <div>
            <form >
                <input type="text" placeholder="Title" name="title"/>
                <textarea name="content" placeholder="Write a note here"></textarea>
                <button>
                    <AddIcon/>
                </button>
            </form>
        </div>
    )
}

export default NoteArea
