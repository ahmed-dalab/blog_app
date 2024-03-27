import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages and Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import NotFound from './components/NotFound';
import BlogDetails from './components/BlogDetails';
function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
   </Router>
  )
}

export default App
