import React from 'react';
import { Link } from 'react-router-dom';
import Header from "./common/Header";
import Routes from '../routes';

const App = () =>
    <div>
        <Header/>
        {Routes}
    </div>;

export default App;
