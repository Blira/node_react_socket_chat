import { MessagesProvider } from "./hooks/useMessages";
import { ChatPage } from "./pages/chat";

function App() {
  return (
    <MessagesProvider>
      <ChatPage />
    </MessagesProvider>
  );
}

export default App;
