import React from "react";
import './Chanel.scss';
import {Notification, Search} from '../../Lib/Icons'
import {NavLink, Routes, Route} from 'react-router-dom';
import ChanelHome from '../../Components/ChanelHome/ChanelHome'

function Chanel({user}) {
    const [users, setUsers] = React.useState([]);
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => setUsers(data?.data))
    }, [])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))
    }, [])

    const thirdPartPhotos = photos.slice(42, 62);
    const singlePhoto = photos.slice(0, 1);

    // Time
    let date = new Date();
    let m = date.getMinutes();
    let s = date.getSeconds()

    return <div className="chanel">
        <img className="chanel-bg" src="https://picsum.photos/800/280" alt="" width={1000} height={280} />
        
        <div className="chanel-info">
            {user && user.map(row => <div className="chanel-info__left" key={row.id}>
                <img className="chanel-info__left-img" src={row.avatar} alt={row.first_name + "'s avatar"} width={80} height={80} />

                <span className="chanel-info__left-area">
                    <span className="chanel-info__left-username">
                        {row.first_name} {row.last_name}
                    </span>

                    <span className="chanel-info__left-followers">
                        998K subscribed
                    </span>
                </span>
            </div>)}
            
            <div className="chanel-info__right">
                <span className="chanel-info__rigth-not">
                    <Notification />
                </span>

                <span className="chanel-info__right-subs">
                    Subscribe 998K
                </span>
            </div>
        </div>

        <div className="chanel-main">
            <div className="chanel-main__left">
                <ul className="chanel-main__left-list">
                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={""}>
                            Home
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"videos"}>
                            Videos
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"playlists"}>
                            Playlists
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"channels"}>
                            Channels
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"discussion"}>
                            Discussion
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"about"}>
                            About
                        </NavLink>
                    </li>

                    <li className="chanel-main__left-item">
                        <NavLink className={({isActive}) => "chanel-main__left-link " + (isActive ? "chanel-main__left-link--active" : '')} to={"search"}>
                            <Search />
                        </NavLink>
                    </li>
                </ul>

                <Routes>
                    <Route path="" element={<ChanelHome singlePhoto={singlePhoto} />} />
                    <Route path="videos" element={<h2>Videos</h2>} />
                    <Route path="playlists" element={<h2>Playlists</h2>} />
                    <Route path="channels" element={<h2>Channels</h2>} />
                    <Route path="discussion" element={<h2>Discussion</h2>} />
                    <Route path="about" element={<h2>About</h2>} />
                    <Route path="search" element={<h2>Search another</h2>} />
                </Routes>
            </div>

            <div className="chanel-main__right">
                <span className="chanel-main__rigth-rec">
                    Recommended channel
                </span>

                <ul className="chanel-main__right-list">
                    {users.length > 0 && users.map(row => <li className="chanel-main__right-list__item" key={row.id}>
                        <img className="chanel-main__right-list__img" src={row.avatar} alt={row.first_name + "'avatar"}  width={50} height={50}/>

                        <h3 className="chanel-main__right-list__name">
                            {row.first_name} {row.last_name}
                        </h3>
                    </li>)}
                </ul>
            </div>
        </div>

        <div className="food-drink margaret">
            <div className="food-drink__top">
                <h2 className="food-drink__heading margaret-heading">
                    Margaret Phelps videos
                </h2>
            </div>    

            <ul className="videos-list">
                {thirdPartPhotos.length > 0 && thirdPartPhotos.map(row => <li className="videos-list__item" key={row.id}>
                    <NavLink className="videos-list__main-link" to={"/video/" + row.id}>
                        <div className="videos-list__item-video-area">
                            <img className="videos-list__item-video-img" src={row.thumbnailUrl} alt="" width={250} height={150} />

                            <span className="videos-list__item-video-time">
                                {m}:{s}
                            </span>
                        </div>

                        <h2 className="videos-list__item-heading">
                            {row.title.split(' ').splice(0, 3).join(' ')}
                        </h2>

                        <div className="videos-list__item-area">
                            <ul className="videos-list__item-list">
                                <li className="videos-list__item-views">
                                    1m views
                                </li>

                                <li className="videos-list__item-views">
                                    1 day ago
                                </li>
                            </ul>

                            {user && user.map(row => <NavLink className="videos-list__item-name" key={row.id} to={"/chanel"}>
                                {row.first_name} {row.last_name}
                            </NavLink>)}
                        </div>
                    </NavLink>
                </li>)}
            </ul>
        </div>
    </div>
}

export default Chanel;