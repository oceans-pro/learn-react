import {Component} from 'react';
import {NavBar1, NavBar2} from './NavBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar1>
                    <div>left</div>
                    <div>center</div>
                    <div>right</div>
                </NavBar1>
                <NavBar2
                    leftSlot={<div>left</div>}
                    centerSlot={<div>center</div>}
                    rightSlot={<div>right</div>}
                />
            </div>
        );
    }
}
