import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import AllRoute from './Util/AllRoute';

function App() {
  return (
    <Router>
      <AllRoute />
    </Router>
  );
}

export default App;
