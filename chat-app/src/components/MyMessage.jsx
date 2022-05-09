const MyMessage = ({ message }) => {


    if(message.attachments && message.attachments.length > 0){
        return (
            <img
                src={message.attachment[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}

            />
        )
    }

    return(
        <div>
            My Message
        </div>
    )
}
export default MyMessage