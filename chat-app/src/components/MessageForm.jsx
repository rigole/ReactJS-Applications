import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";

import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {

    const [value, setValue] = useState('');
    const { chatId, creds } = props;

    return (
        <form>
           <input
                className="message-input"
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
           />

            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon"/>
                </span>
            </label>
        </form>
    )
}

export default MessageForm