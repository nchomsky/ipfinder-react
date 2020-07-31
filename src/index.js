import React from 'react';
import ReactDOM from 'react-dom';
import LocationDisplay from './LocationDisplay';
import Spinner from './Spinner';

//This application finds your IP address and prints out your location based on your ip address
class App extends React.Component {
    //initalize the state
    state = { country: '', region: '', errorMessage: '' }

    componentDidMount() {
        //finds your ip
        fetch('https://extreme-ip-lookup.com/json/').then(res => res.json()).then(response => {
            this.setState({ country: response.country });
            this.setState({ region: response.region });
            // console.log("Country: ", response.country);
            // console.log("State: ", response.region);
        })
            .catch((data, status) => {
                console.log('Request failed');
                this.setState({ errorMessage: status });
            })
    }

    renderContent() {
        //conditional rendering
        if (this.state.errorMessage && !this.state.country) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.country) {
            //setting the props of LocationDisplay to the values in the state
            return <LocationDisplay country={this.state.country} state={this.state.region} />;
        }

        return <Spinner message="Loading" />;

    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));