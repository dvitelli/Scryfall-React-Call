import { getCardByName } from './components/apiCall';
import './App.css';

function App() {
  
  const cardName = "Brainstorm"
  const card = getCardByName(cardName)
  
  return (
    <div>Card:{card}
    </div>
  );
}

export default App;
