import React from 'react'
import { Route } from 'react-router-dom';


// COMPONENTS
import About from './components/About';
import Contact from './components/Contact'
import Landing from './components/Landing'


export default function BaseRoutes() {
    return (
        <div>
            <Route exact path = '/' component = {Landing}/>
            <Route exact path = '/about' component = {About} />
            <Route exact path = "/contact" component = {Contact} />
        </div>
    )
}