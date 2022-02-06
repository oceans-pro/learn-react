import {Component} from 'react';
import PropTypes from 'prop-types'
export default class App extends Component {
    constructor() {
        super();

        this.state = {
            name: 'react'
        };
    }
    render() {
        return (
            <div>
                <ChildClassComponent name="class" age={2}></ChildClassComponent>
                <ChildFunctionComponent name="function" age={1} list={[1, 2, 3]}></ChildFunctionComponent>
            </div>
        )
        return 'Hello world!'
    }
};



class ChildClassComponent extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }

    render() {
        const {name} = this.props;
        return (
            <div>
                <h2>我是子组件</h2>
                <div>{ name }</div>
            </div>
        );
    }
}


function ChildFunctionComponent(props) {
    return (
        <div>
           <h2>{ props.name }, {props.age}</h2>
           <div>
               {
                   props.list.map(i => <div key={i}>{ i }</div>)
               }
           </div>
        </div>
    )
}

ChildFunctionComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    list: PropTypes.array,
}

ChildFunctionComponent.defaultProps = {
    name: 'default',
    age: 0,
    list: [],
}