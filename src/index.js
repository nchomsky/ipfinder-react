import React from 'react';
import ReactDOM from 'react-dom';

//This application finds your IP address and prints out your location based on your ip address
class App extends React.Component {
    //initalize the state
    state = { country: null, state: null, errorMessage: '' }

    componentDidMount() {

    }

    renderContent() {

    }

    render() {
        return (
            <div>
                Hi There!
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));