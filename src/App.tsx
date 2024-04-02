import { useNavigate } from 'react-router';
import './App.css';
import { OOT_ROUTES } from './presentation/isekai-oot-os/routes';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      {/* TODO - integrer */}
      {/**
       *  PIERRE VERTE -> heal 1d4 - cast heal 1d8
       *      SORTIE =>   niveau 2 + 150 (450px)
       * 
       *  PIERRE ROUGE -> sort de boule de feu - con +2
       *      SORTIE =>   les chauves souris de compte pas, mais servent à justifier le niveau 2 du dessus si aucun villageois n'est tué 
       *                  sortie basique niveau 3 (450px)
       *                  sortie complete niveau 3 + 875px soit 925 du niveau 4 (1325px)
       * 
       *  PIERRE BLEUE -> sort de gel - respire sous l'eau
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
