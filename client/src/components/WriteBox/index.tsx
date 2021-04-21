import { Button, TextField } from '@material-ui/core'
import { Container } from './style'

export default function WriteBox() {

    return (
        <Container>
            <TextField id="message-field" label="Message" multiline={true} rows={4} fullWidth={true}/>
            <Button color="primary" variant="contained" >Send Message</Button>
        </Container>
    )
}