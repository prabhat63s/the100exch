import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InPlay from "./pages/InPlay";
import Cricket from "./pages/Cricket";
import MultiMarkets from "./pages/MultiMarkets";
import Soccer from "./pages/Soccer";
import Tennis from "./pages/Tennis";
import Kabaddi from "./pages/Kabaddi";
import AceCasino from "./pages/AceCasino";
import SpecialMarket from "./pages/SpecialMarket";
import Games from "./pages/Games";
import Slots from "./pages/Slots";
import VirtualSports from "./pages/VirtualSports";
import LiveCasino from "./pages/LiveCasino";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={ <InPlay />} />
          <Route path="/pinned" element={ <MultiMarkets />} />
          <Route path="/cricket" element={ <Cricket />} />
          <Route path="/soccer" element={ <Soccer />} />
          <Route path="/tennis" element={ <Tennis />} />
          <Route path="/kabaddi" element={ <Kabaddi />} />
          <Route path="/casino" element={ <AceCasino />} />
          <Route path="/live-casino" element={ <LiveCasino />} />
          <Route path="/virtual-sports" element={ <VirtualSports />} />
          <Route path="/slot-games" element={ <Slots />} />
          <Route path="/special-market" element={ <SpecialMarket />} />
          <Route path="/fantasy-games" element={ <Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
