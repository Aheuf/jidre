import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import { HyruleField } from './presentation/isekai-oot-os/HyruleFieldHub.tsx';
import { VillageKokiri } from './presentation/isekai-oot-os/acts/ForestStone/VillageKokiri.tsx';
import { OOT_ROUTES } from './presentation/isekai-oot-os/routes.ts';
import { CocoricoVillage } from './presentation/isekai-oot-os/acts/FireStone/cocoriroVillage.tsx';
import { Cimetiere } from './presentation/isekai-oot-os/acts/FireStone/cimetiere.tsx';
import { Mountain } from './presentation/isekai-oot-os/acts/FireStone/mountain.tsx';
import { Lac } from './presentation/isekai-oot-os/zonesAnnexes/lac.tsx';
import { ZoraDomain } from './presentation/isekai-oot-os/acts/WaterStone/ZorasDomain.tsx';
import { DesertOdureg } from './presentation/isekai-oot-os/zonesAnnexes/desert.tsx';
import { ChateauDEluryh } from './presentation/isekai-oot-os/acts/Conclusion/ChateauHyrule.tsx';
import { Ranch } from './presentation/isekai-oot-os/zonesAnnexes/ranch.tsx';

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  /** ocarina of time isekai routes */
  { path: OOT_ROUTES.intro, element: <VillageKokiri/> },
  { path: OOT_ROUTES.hub, element: <HyruleField/> },
  { path: OOT_ROUTES.cocorico, element: <CocoricoVillage/> },
  { path: OOT_ROUTES.cimetiere, element: <Cimetiere/> },
  { path: OOT_ROUTES.montagne, element: <Mountain/> },
  { path: OOT_ROUTES.lac, element: <Lac/> },
  { path: OOT_ROUTES.domaineZora, element: <ZoraDomain/> },
  { path: OOT_ROUTES.desert, element: <DesertOdureg/> },
  { path: OOT_ROUTES.chateau, element: <ChateauDEluryh/> },
  { path: OOT_ROUTES.ranch, element: <Ranch/> }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
