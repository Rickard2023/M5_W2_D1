import logo from './logo.svg';
import './App.css';

function App() {
  const arrayData = [1, 2, 3, 4, 5];

  return (
    <ul>
      {arrayData.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default App;
