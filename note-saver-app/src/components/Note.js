import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material'

function Note() {

    return (
        <div className="note">
            <h1>Title</h1>
            <p>Content</p>
            <Button>
                <DeleteOutlineIcon/>
            </Button>
        </div>
    )
}

export default Note