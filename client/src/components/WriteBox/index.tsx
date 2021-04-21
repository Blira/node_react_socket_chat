import { Button, TextField } from '@material-ui/core'
import { useMessages } from '../../hooks/useMessages'
import { Container } from './style'

export default function WriteBox() {

    const { handleNewMessage } = useMessages();

    return (
        <Container>
            <TextField id="message-field" label="Message" multiline={true} rows={4} fullWidth={true} />
            <Button color="primary" variant="contained" onClick={evt => {
                const htmlElement = document.getElementById('message-field');
                    if (htmlElement) {
                        handleNewMessage((htmlElement as HTMLInputElement).value);
                    }
                }}>Send Message</Button>
        </Container>
    )
}