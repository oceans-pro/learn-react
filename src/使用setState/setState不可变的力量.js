import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            friends: [
                {
                    name: '张三',
                    age: 10,
                },
                {
                    name: '李四',
                    age: 12,
                },
            ],
        };
    }
    /**
     * PureComponent
     */
    shouldComponentUpdate(nextProps, nextState) {
        const hasDataChange = !(nextState.friends === this.state.friends);
        return hasDataChange;
    }

    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {this.state.friends.map((item, index) => (
                        <li key={item.name + index}>
                            <span>{item.name}</span>
                            <span>{item.age}</span>
                            <button onClick={this.add}>增加</button>
                        </li>
                    ))}
                    <button
                        onClick={() => {
                            this.insertUser();
                        }}
                    >
                        添加数据
                    </button>
                </ul>
            </div>
        );
    }

    insertUser() {
        const newData = {
            name: '王五',
            age: 19,
        };
        // this.state.friends.push(newData);
        // this.setState({
        //     friends: this.state.friends,
        // });

        this.setState({
            friends: [...this.state.friends, newData],
        });

    }
}
