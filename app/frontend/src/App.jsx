import './App.css';
import Input from './Components/Input'
import Title from './Components/Title'

function App() {
  return (
    <div>
      <Title />
      <Input platform="YouTube"/>
      <Input platform="Instagram"/>
      <Input platform="Twitter"/>
      <Input platform="FaceBook"/>
    </div>
  );
}

export default App;
