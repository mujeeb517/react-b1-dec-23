import React from 'react';

// function or class
// null or UI
// input parameters
// state
// immutable props/read-only
// state is mutable
// state is internal
// input is external

// inheritance
// state
class Counter extends React.Component {

    constructor(props) {
        super();
        this.state = {
            count: props.value || 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update', nextProps, nextState);
        return nextState.count <= 10;
    }

    // search textbox
    // where 
    componentDidUpdate() {
        console.log('updated');
    }


    inc = () => {
        // this.state.count = this.state.count + 1;
        let count = this.state.count;
        this.setState({ count: count + 1 });
    }

    dec = () => {
        let count = this.state.count;
        if (count !== 0)
            this.setState({ count: count - 1 });
    }

    render() {
        return <div className="p-4">
            <h1 className="text-lg font-semibold m-2">Count: {this.state.count}</h1>
            <div className="flex">
                <button onClick={this.inc} className="bg-orange-600 p-2 text-white m-2 hover:bg-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>
                <button onClick={this.dec} className="bg-orange-600 p-2 text-white m-2 hover:bg-orange-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </button>
            </div>
        </div>;
    }
}

export default Counter;