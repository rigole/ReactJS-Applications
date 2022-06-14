import React from "react"

function NoteArea() {
    return (
        <div>
            <form >
                <input type="text" placeholder="Title" name="title"/>
                <textarea name="content" placeholder="Write a note here"></textarea>
                <button>+</button>
            </form>
        </div>
    )
}

export default NoteArea
