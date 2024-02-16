import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Routes/Main";
import Book3D from "./Component/Book3D";
import "./App.scss";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-wrap">
          <Header />

          <Routes>
            <Route path="/book" element={<Book3D />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
