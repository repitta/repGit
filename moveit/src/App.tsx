import { formatDiagnostic } from "typescript";
import { Button} from './components/Button'
import { ExperiencieBar } from "./components/experiencieBar";
import './styles/global.css';

// Isso é um componente, que é uma função javascript que retorna um HTML
function App() {
  return ( 
    <div className="container">
      <ExperiencieBar />
    </div>
  
  );
}

export default App;
