import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rounter from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./constant/i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <BrowserRouter>
          <Rounter></Rounter>
        </BrowserRouter>
      </div>
    </I18nextProvider>
  );
}

export default App;
