import './App.css';
import Input from './Components/Input'
import Title from './Components/Title'

function App() {
  return (
    <div>
      <Title />
      <Input platform="YouTube"/>
      <Input platform="Instagram"/>
    </div>
  );
}

export default App;
