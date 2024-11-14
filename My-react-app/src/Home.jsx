import "./Header.jsx"
import Greeting from './Greeting.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import App from "./App.jsx"
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar />
      <App />
      <Footer />
    </div>
  );
};
export default Home;
