import { Avatar } from '@material-ui/core';
import { Container } from "./style";

export default function MessageBox() {
    return (
        <Container>
            <ul>
                <li>
                    <Avatar />
                    <strong>
                        Username:
                        </strong>
                    <span>Foo message</span>
                </li>
            </ul>
        </Container>
    )
}