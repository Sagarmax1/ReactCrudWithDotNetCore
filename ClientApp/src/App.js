import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Employee } from './components/Employee';
import { EmployeeDetails } from './components/EmployeeDetails';
import { Registration } from './components/Registration';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/FetchData' component={FetchData} />
            <Route path='/Employee' component={Employee} />
            <Route path='/EmployeeDetails' component={EmployeeDetails} />
            <Route path='/Registration' component={Registration} />
      </Layout>
    );
  }
}
