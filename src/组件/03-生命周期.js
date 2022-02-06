import {Component} from 'react';
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'react',
            showSonComponent: true,
        };
        console.log('constructor');
    }

    /**
     * 1、依赖 Dom
     * 2、网络请求（官方建议）
     * 3、添加订阅（会在 componentWillUnmount 取消订阅）
     */
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                name: 'react-dom',
            });
        }, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.warn(snapshot);
        console.log('componentDidUpdate');
    }

    render() {
        const {showSonComponent} = this.state;
        return (
            <div>
                <h1>React Component</h1>
                {showSonComponent ? <SonComponent/> : null}
                
                <button onClick={()=>{this.unMountSonComponent()}}>点我卸载</button>
            </div>
        )
    }



    unMountSonComponent() {
        console.warn(this);
        this.setState({
            showSonComponent: false,
        });
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return 'snapshot';
    }
};

class SonComponent extends Component {
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>SonComponent</div>
        );
    }
}