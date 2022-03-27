import { NavLink } from "react-router-dom";


// page layout import 
import HomePage from './pages/HomePage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from './components/SiteHeader'
function App() {
  return (

    <div className="App">
      <SiteHeader />

      <NavLink exact path="/">
        <HomePage />
      </NavLink>
      <NavLink path="/details/:id">
        <ReviewDetails />
      </NavLink>
      <NavLink path="/category/:id">
        <Category />
      </NavLink>

    </div>

  );
}

export default App;
