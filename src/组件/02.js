import React, {Component} from 'react';
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'react'
        };
    }
    render() {
        // return (
        //     [
        //         <div>Hello</div>,
        //         <p>world!</p>
        //     ]
        // )
        // return null;
        return 'Hello world!'
    }
};

