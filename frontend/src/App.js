
import {
  Routes,
  Route,
} from "react-router-dom";


// // page layout import 
import HomePage from './pages/HomePage'
import ReviewDetails from './pages/ReviewDetails'
import Category from './pages/Category'
import SiteHeader from './components/SiteHeader'
function App() {
  return (


    <div className="App">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<ReviewDetails />} />
          <Route path="/details" element={<Category />} />
        </Routes>

      </main>
    </div>

  );
}

export default App;
