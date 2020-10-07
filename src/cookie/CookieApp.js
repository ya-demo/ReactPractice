import React, { Component } from 'react';


const upgrades = [
    {
        name: 'Grandma',
        price: 10,
        auto: 1
    },
    {
        name: 'Farm',
        price: 100,
        auto: 8
    },
    {
        name: 'Mine',
        price: 1000,
        auto: 60
    },
]


class CookieApp extends Component {
    state = {
        cookies: 1000,
        auto: 0,
        upgrades,
    }

    componentDidMount() {
        this.time = Date.now();
        this.updateCookie();
        
    }

    componentWillUnmount()
    {
        cancelAnimationFrame(this.requestID)
    }

    updateCookie = () => {
        const { cookies, auto } = this.state;
        const time = Date.now();
        const step = (auto / 1000) * (time - this.time);
        this.time = time;

        this.setState(
            {
                cookies: cookies + step
            },
            () => this.requestID = requestAnimationFrame(this.updateCookie)
        );
    }

    addCookie = () => {
        this.setState({
            cookies: this.state.cookies + 1
        })
    }
    upgrades = (idx) => {
        const { cookies, auto, upgrades } = this.state;
        const u = upgrades[idx]
        if (cookies < u.price) return;

        this.setState({
            cookies: cookies - u.price,
            auto: auto + u.auto,
            upgrades: upgrades.map((v, i) => (
                (i !== idx) ? v : { ...v, price: (v.price * 1.15) }
            ))

        })
    }

    render() {
        const { cookies, upgrades } = this.state
        return (
            <div className="App">
                <h3>Cookies</h3>
                <h1>{parseInt(cookies, 10)}</h1>
                <hr />
                <button onClick={this.addCookie}>Click</button>
                <br />
                {upgrades.map(({ name, price }, idx) => [
                    <button key={name+1} onClick={() => this.upgrades(idx)}>{name}</button>,
                    <span key={name+2}>{parseInt(price, 10)}</span>,
                    <br key={name+3} />
                ])}
            </div>
        );
    }
}

export default CookieApp;





    // buyGrandma = () => {
    //     const { cookies, auto, priceGrandma: price } = this.state;
    //     if (cookies < 10) return;

    //     this.setState({
    //         cookies: cookies - 10,
    //         auto: auto + 1,
    //         priceGrandma: price * 1.15
    //     })
    // }
    // buyFarm = () => {
    //     const { cookies, auto, priceFarm: price } = this.state;
    //     if (cookies < 100) return;

    //     this.setState({
    //         cookies: cookies - 100,
    //         auto: auto + 8,
    //         priceFarm: price * 1.15
    //     })
    // }