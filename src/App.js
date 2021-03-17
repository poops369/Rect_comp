import "./App.css";
import ProfilPhoto from "./component/profile/ProfilPhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";
function App() {
    return (
        <div className="App">
            <div>
                <ProfilPhoto />
            </div>
            <FullName />
            <Address />
        </div>
    );
}

export default App;
