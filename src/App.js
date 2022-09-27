import './App.css';
import {BaseColaboradores} from './data/database';
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Collaborator from './components/Collaborator';
import Search from './components/Search';
import NewCollaboratorsList from './components/NewCollaborators';



function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [searching, setSearching] = useState("");

  // filter

  let result = [];
  if(!searching) {
    result = colaboradores;
  } else {
    result = colaboradores.filter((colaborador) =>
    colaborador.nombre
    .toLocaleLowerCase()
    .includes(searching.toLocaleLowerCase()))
  }
 
  return (
    <div className="App">
      <Search setSearching={setSearching}/>
      <Collaborator colaboradores={colaboradores} setColaboradores={setColaboradores}/>
      {/* <ul>
        {colaboradores.map(colaborador =>
        <li key={colaborador.id.toString()}
        className="bg-secondary mb-2 rounded text-light">
          {colaborador.nombre.toLowerCase()} - {colaborador.correo}</li>
        )}
      </ul> */}
      <NewCollaboratorsList colaboradores={result}/>
    </div>
  );
}

export default App;
