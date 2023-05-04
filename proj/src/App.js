import "./App.css";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/MeetMillennials";
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";
import SameSexMarriageViz from "./viz/SameSexMarriageViz";
import FamilyLiving from "./FamilyLiving/FamilyLiving";

function App() {
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <div style={{ height: 120 }}></div>
        <WhoAreThey />
        {/* <br /> */}
        {/* <FamilyLiving />
        <BridgingHouseholdGap />
        <SameSexMarriageViz /> */}
      </div>
    </>
  );
}

export default App;
