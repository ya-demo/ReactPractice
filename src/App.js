import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import CookieApp from './cookie/CookieApp';
import DialogApp from './dialog-demo/DialogApp';
import Game from './easy-game/Game';
import FilterApp from './filter-practice/FilterApp';
import ListApp from './todo-list/ListApp';

const App = () => {
    return (
        <Router basename="/react-practice">
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">CookieGame</Link>
                        </li>
                        <li>
                            <Link to="/game">Game</Link>
                        </li>
                        <li>
                            <Link to="/dialog">FilterPractice</Link>
                        </li>
                        <li>
                            <Link to="/filter">DialogDemo</Link>
                        </li>
                        <li>
                            <Link to="/todolist">TodoList</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/" component={CookieApp} />
                    <Route path="/game" component={Game} />
                    <Route path="/dialog" component={DialogApp} />
                    <Route path="/filter" component={FilterApp} />
                    <Route path="/todolist" component={ListApp} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;