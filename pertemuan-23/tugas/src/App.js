import React from "react";
import "./App.css"
import List from './component/List'
import {human} from './utils/human'

const App = () => {
    return (
        <div className="app">
            <h1>React People</h1>
            <List data={human}/>
        </div>
    );
};

export default App;

