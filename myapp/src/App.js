import logo from './logo.svg';
import './App.css';
import Nomes from './Nomes';

function App(){
  const imagemCarro = 'https://shorturl.at/cdhB8'
  return (
    <div>
    <h1>cabra bom</h1>
    <img src={imagemCarro} alt="imagem"/>
    <Nomes nome="João"/>
    </div>
  )
}

export default App;
