import './App.css';
import Input from './Components/Input'
import Title from './Components/Title'
import CompName from './Components/CompName'
import Description from './Components/Description'
import Submit from './Components/Submit'

function App() {
  return (
    <div>
      <Title />
      <div className = "contain">
        <CompName/>
        <Input platform="YouTube"/>
        <Input platform="Instagram"/>
        <Input platform="Twitter"/>
        <Input platform="FaceBook"/>
        <Description/>
        <Submit/>
      </div>
    </div>
  );
}

export default App;
