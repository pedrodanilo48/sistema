import logo from './logo.svg';
import './App.css';
import Nomes from './components/Nomes';
import List from './components/List';

function App(){
  const imagemCarro = 'https://shorturl.at/cdhB8'
  return (
    <>
      <h1>cabra bom</h1>
      <img src={imagemCarro} alt="imagem" />
      <Nomes nome="João" foto="https://noticiasconcursos.com.br/wp-content/uploads/2021/06/noticiasconcursos.com.br-como-ser-uma-pessoa-mais-decidida.jpeg" />
    <List />
    </>
  )
}

export default App;
