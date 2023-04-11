import { useContext, useState } from "react";
import '../styles/MessagesPage.css';
import { AvatarContext } from "./Login";

export const MessagesPage = ({ name }) => {
    const { avatar } = useContext(AvatarContext);

    const [messages, setMessages] = useState([]);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        const message = e.target.elements.message.value;
        setMessages([...messages, message]);
        e.target.elements.message.value = "";
    };

    const renderedMessages = messages.map((message, index) => (
        <div className="message" key={index}>
            <img src={avatar} alt="user avatar" />  
            {message}
        </div>
    ));

    return (
        <div>
            <h1>Welcome, {name}</h1>
            <form onSubmit={handleMessageSubmit}>
                <label>
                Type a message:
                <input type="text" name="message" id="messageInput" />
                </label>
                <button id="messageButton" type="submit">Send</button>
            </form>
            <div className="messages">{renderedMessages}</div>
        </div>
        );
    };
