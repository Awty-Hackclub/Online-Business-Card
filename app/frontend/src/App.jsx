import './App.css';
import Input from './Components/Input'
import Title from './Components/Title'
import Submit from './Components/Submit'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Title />
      <Input platform="YouTube"/>
      <Input platform="Instagram"/>
      <Input platform="Twitter"/>
      <Input platform="FaceBook"/>
      <Submit/>
      <Footer />
    </div>
  );
}

export default App;
