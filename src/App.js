import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// Sports
import InPlay from "./pages/sports/InPlay";
import MultiMarkets from "./pages/sports/MultiMarkets";
import Soccer from "./pages/sports/Soccer";
import Cricket from "./pages/sports/Cricket";
import Tennis from "./pages/sports/Tennis";
import Kabaddi from "./pages/sports/Kabaddi";
// Casino
import AceCasino from "./pages/casino/AceCasino";
import Slots from "./pages/casino/Slots";
import LiveCasino from "./pages/casino/LiveCasino";
// Other page
import Games from "./pages/Games";
import SpecialMarket from "./pages/SpecialMarket";
import VirtualSports from "./pages/VirtualSports";
import MyProfileDashbord from "./pages/myAccount/MyProfileDashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Game */}
          <Route path="/sports" element={<InPlay />} />
          <Route path="/pinned" element={<MultiMarkets />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/soccer" element={<Soccer />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/kabaddi" element={<Kabaddi />} />
          {/* Casino */}
          <Route path="/casino" element={<AceCasino />} />
          <Route path="/live-casino" element={<LiveCasino />} />
          <Route path="/virtual-sports" element={<VirtualSports />} />
          {/* Other page */}
          <Route path="/slot-games" element={<Slots />} />
          <Route path="/special-market" element={<SpecialMarket />} />
          <Route path="/fantasy-games" element={<Games />} />

          {/* Account */}
          <Route path="/my-profile" element={<MyProfileDashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
