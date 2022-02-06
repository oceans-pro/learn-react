import {Component} from 'react';
import {EventEmitter} from 'events';

const eventBus = new EventEmitter();

export default class App extends Component {
    render() {
        return (
            <div>
                <Home></Home>
                <Profile></Profile>
            </div>
        );
    }
}

class Profile extends Component {
    handleClickBtn() {
        eventBus.emit('profile-click', 'data-a', 'data-b');
    }
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <button onClick={() => this.handleClickBtn()}>
                    点击了Profile按钮
                </button>
            </div>
        );
    }
}

class Home extends Component {
    componentDidMount() {
        eventBus.addListener('profile-click', this.onProfileClick);
    }
    onProfileClick(p1, p2) {
        console.log('onProfileClick', p1, p2);
    }
    componentWillUnmount() {
        eventBus.removeListener('profile-click', this.onProfileClick);
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
