import { Link } from 'gatsby';
import React, { Component } from 'react';
import Header from '../components/header';
export default function About(){
    return (
        <div style={{ color: `teal` }}>
            <Link to="/">Home</Link>
            <Header headerText="About Gatsby"/>
            <p>Such wow. Very React.</p>
        </div>
    )
}