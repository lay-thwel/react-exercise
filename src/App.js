import React from 'react'
import './assets/css/style.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Detail from './pages/Detail'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/post/:id" component={Detail}/>
        </Switch>
       <Footer />
      </Router>
    </div>
  );
}

export default App;
