import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Filters from "./components/Filters";
import Products from "./components/Products";

function App() {
  return (
    <div className="ml-[5%] mr-[5%] flex flex-col overflow-hidden gap-5 justify-center">
    <Navbar />
    <Hero />
    <Filters />
    <Products />
    </div>
  );
}

export default App;
