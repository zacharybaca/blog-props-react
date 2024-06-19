/* eslint-disable no-unused-vars */
import data from "../blog-data.json";
import './Reset.css';
import './App.css'
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
      <div id="App">
        <Header />
        <BlogList />
        <Footer />
      </div>
    </>
  )
}

export default App
