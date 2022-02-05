import React from "react";
import './Sitebar.scss'
import {HomeIcon, Tranding, Subscriptions, Library, History, WatchLater, Favourites, LikedVideos, Music, Games, ShowMore, Settings} from '../../Lib/Icons';
import {NavLink, useNavigate} from 'react-router-dom';
import {Context as AuthContext} from '../../Context/AuthContext'

function SiteBar() {
    const [users, setUsers] = React.useState([]);
    const {setToken} = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => setUsers(data?.data))
    }, [])

    return <div className="sitebar">
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/"}>
                        <HomeIcon />

                        <span className="nav-list__item-heading">
                            Home
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/trending"}>
                        <Tranding />

                        <span className="nav-list__item-heading">
                            Trending
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/subscriptions"}>
                        <Subscriptions />

                        <span className="nav-list__item-heading">
                            Subscriptions
                        </span>
                    </NavLink>
                </li>
            </ul>

            <ul className="nav-list">
                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/library"}>
                        <Library />

                        <span className="nav-list__item-heading">
                            Library
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/history"}>
                        <History />

                        <span className="nav-list__item-heading">
                            History
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/watchlater"}>
                        <WatchLater />

                        <span className="nav-list__item-heading">
                            Watch later
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/favourites"}>
                        <Favourites />

                        <span className="nav-list__item-heading">
                            Favourites
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/likedvideos"}>
                        <LikedVideos />

                        <span className="nav-list__item-heading">
                            Liked videos
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/music"}>
                        <Music />

                        <span className="nav-list__item-heading">
                            Music
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/games"}>
                        <Games />

                        <span className="nav-list__item-heading">
                            Games
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>

        <div className="subscriptions">
            <ul className="subscriptions-list">
                {users.length > 0 && users.map(row => <li key={row.id} className="subscriptions-list__item">
                    <NavLink className="subscriptions-list__item-link" to={"/"}>
                        <img className="subscriptions-list__item-img" src={row.avatar} alt={row.first_name + "'s avatar"} width={26} height={26} />

                        <h2 className="subscriptions-list__item-name">{row.first_name} {row.last_name}</h2>
                    </NavLink>
                </li>)} 
            </ul>
        </div>

        <ul className="nav-list nav-list-bottom">
                <li className="nav-list__item">
                    <NavLink className={({isActive}) => "nav-list__item-link " + (isActive ? "nav-list__item-link--active" : '')} to={"/settings"}>
                        <Settings />

                        <span className="nav-list__item-heading">
                            Settings
                        </span>
                    </NavLink>
                </li>

                <li className="nav-list__item">
                    <button className="log-out-btn" onClick={() => {setToken(window.localStorage.removeItem('token')); navigate("")}}>
                        Log out
                    </button>
                </li>
        </ul>
    </div>
}

export default SiteBar;