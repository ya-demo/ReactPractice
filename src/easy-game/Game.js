import React, { Component } from 'react';
import style from './Game.module.css'
const toSymbal = n => {
    switch (n) {
        case 0: return '';
        case 1: return 'O';
        case -1: return 'X';
        default: return ''
    }
}

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

class Game extends Component {

    state = {
        //0空格 , 1 = true , 2 = false
        grids: [
            0, 0, 0, 0, 0, 0, 0, 0, 0
        ],
        player: 1,
        winner: 0
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.grids !== this.state.grids) {
            this.setState({
                winner: this.getWinner()
            })
        }
    }

    getWinner = () => {
        const {grids} = this.state
        for(const line of lines)
        {
            const [i,j,k] = line;
            if(grids[i]===grids[j]&&grids[j]===grids[k])
            {
                return grids[i]
            }
        }
        return 0
    }

    handleClick = idx => {
        if(this.state.winner !== 0) return;

        const grids = [...this.state.grids]
        if (grids[idx] !== 0) return;

        grids[idx] = this.state.player
        this.setState({
            grids,
            player: -this.state.player
        })
    }
    reset = () => {
        this.setState({
            grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            player: 1
        })
    }

    render() {
        const { grids, player, winner } = this.state;
        return (
            <div>
                <div className={style.board}>
                    {grids.map((elm, idx) => (
                        <div key={idx} className={style.grid} onClick={() => this.handleClick(idx)}>
                            <span>{toSymbal(elm)}</span>
                        </div>
                    ))}
                </div>
                <div>player: {toSymbal(player)}</div>
                <div>winner: {toSymbal(winner)}</div>
                <button onClick={this.reset}>Reset</button>
                
            </div>
        );
    }
}

export default Game;