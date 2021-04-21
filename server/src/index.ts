import { Server } from 'socket.io';

interface SendNewMessageData {
    message: string;
}

const socket = new Server({
    cors: {
        origin: '*'
    }
});

socket.on('connection', (connectedSocket) => {
    console.log('Connected');


    connectedSocket.on('sendNewMessage', (data: SendNewMessageData) => {
        connectedSocket.emit('newChatMessage', data)
    })

    connectedSocket.on('disconnect', () => {
        console.log('Disconnected');
    })
})

new Promise((resolve, reject) => {
    resolve(socket.listen(3333))
    reject()
}).then(() => console.log('Socket connected!')).catch(() => console.log('Socket failed to connect!'))