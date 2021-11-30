import React from "react"
import Hello from "./component/Hello"
import Header from "./component/Header"
import Footer from "./component/Footer"
import About from "./component/About"
import Projects from "./component/Projects"
import { Switch, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Hello />
      </Switch>
      <Footer />
    </>
  )
}

export default App
