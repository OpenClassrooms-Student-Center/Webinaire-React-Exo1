import React from 'react';
import './Converter.css'
export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.exchangeRate = 1.1853; // 1€ = 1.1853$
        this.state = {
            euros: 0,
            dollars: 0
        };

        this.updateEuros = this.updateEuros.bind(this);
        this.updateDollars = this.updateDollars.bind(this);
    }

    updateEuros(event) {
        this.setState({
            euros: event.target.value,
            dollars: (event.target.value*this.exchangeRate).toFixed(2)
        });
    }

    updateDollars(event) {
        this.setState({
            euros: (event.target.value/this.exchangeRate).toFixed(2),
            dollars: event.target.value
        });
    }

    render() {
        return (<form>
            <div className="part-form">
                <label htmlFor="euros">Euros : </label>
                <input type="number" value={this.state.euros} onChange={this.updateEuros} />
            </div>
            <div>⇄</div>
            <div className="part-form">
                <label htmlFor="dollars">Dollars : </label>
                <input type="number" value={this.state.dollars} onChange={this.updateDollars} />
            </div>
        </form>);
    }

}