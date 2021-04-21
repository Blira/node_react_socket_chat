import WriteBox from "../WriteBox";
import MessageBox from '../MessageBox'
import { Container } from './style'



export default function Chat() {

    return (
            <Container>
                <MessageBox />
                <WriteBox />
            </Container>
    )
}