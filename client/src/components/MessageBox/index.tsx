import { Avatar } from '@material-ui/core';
import { useMessages } from '../../hooks/useMessages';
import { Container } from "./style";

export default function MessageBox() {
    const {messages} = useMessages();
    return (
        <Container>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                    <Avatar />
                    <strong>
                        Username:
                        </strong>
                    <span>{message}</span>
                </li>
                ))}
            </ul>
        </Container>
    )
}