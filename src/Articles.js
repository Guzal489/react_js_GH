import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import articles1 from './articles1';
import articles2 from './articles2';
import articles3 from './articles3';
import './index.css';

class Articles extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h2>Статьи</h2>
                <ul className="Articles">
                <li><NavLink to="/articles1">Статья 1</NavLink></li>
                </ul>

                <ul className="Articles">
                <li><NavLink to="/articles2">Статья 2</NavLink></li>
                </ul>

                <ul className="Articles">
                <li><NavLink to="/articles3">Статья 3</NavLink></li>
                </ul>

            </div>
            </HashRouter>
        );
    }
}

export default Articles;