import React, {Component} from 'react';
import './style.css';

export class NavBar1 extends Component {
    render() {
        return (
            <section className="nav">
                <div className="nav-left ui-flex-center">
                    {/* 适用于1个子元素 */}
                    {this.props.children[0]}
                </div>
                <div className="nav-center ui-flex-center">
                    {this.props.children[1]}
                </div>
                <div className="nav-right ui-flex-center">
                    {this.props.children[2]}
                </div>
            </section>
        );
    }
}

export class NavBar2 extends Component {
    render() {
        return (
            <section className="nav">
                <div className="nav-left ui-flex-center">
                    {this.props.leftSlot}
                </div>
                <div className="nav-center ui-flex-center">
                    {this.props.rightSlot}
                </div>
                <div className="nav-right ui-flex-center">
                    {this.props.centerSlot}
                </div>
            </section>
        );
    }
}
