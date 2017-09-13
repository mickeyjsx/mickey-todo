import React from 'react'
import { HashRouter as Router, Route, Switch } from 'mickey'
import Layout from './components/Layout'
import All from './containers/All'
import Active from './containers/Active'
import Completed from './containers/Completed'

const Routers = () => (
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={All} />
        <Route path="/active" component={Active} />
        <Route path="/completed" component={Completed} />
      </Switch>
    </Router>
  </Layout>
)

export default Routers
