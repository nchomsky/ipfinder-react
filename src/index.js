import React from 'react';
import ReactDOM from 'react-dom';

//This application finds your IP address and prints out your location based on your ip address
class App extends React.Component {
    //initalize the state
    state = { country: null, state: null, errorMessage: '' }

    componentDidMount() {
        //finds your ip
        fetch('https://extreme-ip-lookup.com/json/').then(res => res.json()).then(response => {
            this.setState({ country: response.country });
            this.setState({ state: response.region });
            console.log("Country: ", response.country);
            console.log("State: ", response.region);
        })
            .catch((data, status) => {
                console.log('Request failed');
                this.setState({ errorMessage: status });
            })
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