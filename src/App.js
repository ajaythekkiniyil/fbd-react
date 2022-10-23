import './app.css'
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Page />} />
        <Route path=":slug" element={
          <>
            <Header />
            <Details />
            <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
