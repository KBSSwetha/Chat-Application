import { ChatEngine} from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';
 
const projectID = '262ed0dd-eba6-4b7a-aa91-e36d51553daf';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
 
  return(
    <ChatEngine
        height = "100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> 
      }
    />
  );
}

export default App;