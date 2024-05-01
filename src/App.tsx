import { useNavigate } from 'react-router';
import './App.css';
import { OOT_ROUTES } from './presentation/isekai-oot-os/routes';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* TODO - integrer */}
      {/**
       *      SORTIE =>   niveau 2 + 150 (450px)
       * 
       *      SORTIE =>   les chauves souris de compte pas, mais servent à justifier le niveau 2 du dessus si aucun villageois n'est tué 
       *                  sortie basique niveau 3 (450px)
       *                  sortie complete niveau 3 + 875px soit 925 du niveau 4 (1325px)
       * 
       *      SORTIE =>   +300px (+450 si quete d'escorte)
       * 
       *  bouclier de lumière dans le lac si mimique tuée + 450 px
       * 
       * */ }
      <button onClick={() => navigate(OOT_ROUTES.intro)}>isekai-oot</button>
    </div>
  )
}

export default App
