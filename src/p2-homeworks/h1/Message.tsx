import React from 'react'
import messageModule from "./Message.module.css"

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {
    return (
        <div>
            <div className={messageModule["message"]}>
                <div className={messageModule["imgClass"]}><img src={props.avatar}/></div>
                <div className={messageModule["angle"]}/>
                <div className={messageModule["messageBody"]}>
                    <div className={messageModule["bodyName"]}>{props.name}</div>
                    <div className={messageModule["bodyMessage"]}>{props.message}</div>
                    <div className={messageModule["bodyTime"]}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
