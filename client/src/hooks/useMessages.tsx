import { createContext, useState, useContext, useEffect, useRef, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

interface MessagesProviderProps {
    children: ReactNode
}

interface NewChatMessageData {
    message: string;
}


interface MessagesContextData {
    messages: string[],
    handleNewMessage(message: string): void
}


const MessagesContext = createContext<MessagesContextData>({} as MessagesContextData);

declare type NotUndefinedRef = React.MutableRefObject<Socket<DefaultEventsMap, DefaultEventsMap>>;

export function MessagesProvider({ children }: MessagesProviderProps) {

    const [messages, setMessages] = useState<string[]>([]);
    const socketRef: NotUndefinedRef = useRef<Socket>() as NotUndefinedRef;

    useEffect(() => {
        socketRef.current = io(
            "http://localhost:3333"
        );

        const currentSocket = socketRef.current;

        currentSocket.on(
            "newChatMessage",
            ({message}: NewChatMessageData) => {
                console.log('Here! :D')
                const htmlElement = document.getElementById('message-field');
                if(htmlElement){
                    (htmlElement as HTMLInputElement).value = '';
                }
                const newMessages = [...messages, message];
                setMessages(newMessages);
            }
        );

        return () => {
            currentSocket.disconnect();
        };
    }, []);

    const handleNewMessage = (message: string) => {
        socketRef.current.emit("sendNewMessage", message)
    };

    return (
        <MessagesContext.Provider value={{ messages, handleNewMessage }}>
            {children}
        </MessagesContext.Provider>
    )
}


export function useMessages() {
    const context = useContext(MessagesContext);
    return context
}