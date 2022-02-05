import React from "react";
import './AuthenticatedApp.scss';
import SiteBar from "./Components/Sitebar/Sitebar";
import {Hamburger, Youtube, VideoIcon, Menu, Notification} from './Lib/Icons';
import { Routes, Route, NavLink } from "react-router-dom";

// Pages
import Home from './Pages/Home/Home';
import Chanel from './Pages/Chanel/Chanel';
import Video from './Pages/Video/Video';

function AuthenticatedApp() {
    const [user, setUser] = React.useState([])

    React.useEffect(() => {
        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(data => setUser([data?.data]))
    }, [])

    return (
        <div className="container">
            <header className="header">
                <div className="header-left">
                    <button className="header-hamburger">
                        <Hamburger />
                    </button>

                    <NavLink className="header-main-link" to={"/"}>
                        <Youtube />
                    </NavLink>

                    <form className="header-form">
                        <input className="header-form__input" type="text" placeholder="Search" />
                    </form>
                </div>

                <div className="header-right">
                    <ul className="link-list">
                        <li className="link-list-item">
                            <VideoIcon />
                        </li>

                        <li className="link-list-item">
                            <Menu />
                        </li>

                        <li className="link-list-item">
                            <Notification />
                        </li>
                    </ul>
                
                    <NavLink to={"/chanel"}>
                        {user && user.map(row => <img className="header-user-img" key={row.id} src={row.avatar} title={row.firs_name + "'s avatar"} width={40} height={40} />)}
                    </NavLink>
                </div>
            </header>

            <main className="main">
                <SiteBar />
                
                <Routes>
                    <Route path="/" element={<Home user={user} />}/>

                    <Route path="/chanel/*" element={<Chanel user={user} />}/>

                    <Route path="/video/:id" element={<Video />}/>

                    <Route path="/trending" element={<h2>Trending</h2>}/>

                    <Route path="/subscriptions" element={<h2>Subscriptions</h2>}/>

                    <Route path="/library" element={<h2>Library</h2>}/>

                    <Route path="/history" element={<h2>History</h2>}/>

                    <Route path="/watchlater" element={<h2>Watch Later</h2>}/>

                    <Route path="/watchlater" element={<h2>Watch Later</h2>}/>

                    <Route path="/favourites" element={<h2>Favourites</h2>}/>

                    <Route path="/favourites" element={<h2>Favourites</h2>}/>

                    <Route path="/likedvideos" element={<h2>Liked Videos</h2>}/>

                    <Route path="/music" element={<h2>Music</h2>}/>

                    <Route path="/games" element={<h2>Games</h2>}/>

                    <Route path="/settings" element={<h2>Settings</h2>}/>

                    <Route path="*" element={<h1>Not found 404</h1>}/>
                </Routes>
            </main>
        </div>
    )
}

export default AuthenticatedApp;