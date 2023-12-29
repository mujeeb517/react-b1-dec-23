import React from 'react';

class AutoCounter extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate() {
        this.timer = setTimeout(() => {
            console.log('incrementing...', this.state.count);
            this.setState({ count: this.state.count + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        console.log('unmounting..');
        clearTimeout(this.timer);
    }

    render() {
        return <div>
            <h1 className="text-lg font-bold">Count: {this.state.count}</h1>
        </div>
    }
}

export default AutoCounter;
