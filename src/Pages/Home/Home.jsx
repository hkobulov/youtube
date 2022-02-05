import React from "react";
import './Home.scss';
import {NavLink} from 'react-router-dom';
import FoodAvatar from '../../Lib/Images/fooddrink.png';

function Home({user}) {
    const [photos, setPhotos] = React.useState([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setPhotos(data))
    }, [])

    const firstPartPhotos = photos.slice(0, 20);
    const secondPartPhotos = photos.slice(21, 41);
    const thirdPartPhotos = photos.slice(42, 62);

    // Time
    let date = new Date();
    let m = date.getMinutes();
    let s = date.getSeconds()


    return <div className="home">
        {user && user.map(row => <NavLink className="home-user" key={row.id} to={"/chanel"}>
            <img className="home-user__img" src={row.avatar} alt={row.firs_name + "'s avatar"} width={50} height={50} />

            <h2 className="home-user__name">
                {row.first_name} {row.last_name}
            </h2>
        </NavLink>)}

        <ul className="videos-list">
            {firstPartPhotos.length > 0 && firstPartPhotos.map(row => <li className="videos-list__item" key={row.id}>
                <NavLink className="video-list__item-main-link" to={"video/" + row.id}>
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

        <div className="recommended">
            <h2 className="recommended-heading">
                Recommended
            </h2>

            <ul className="recommended-list">
                {secondPartPhotos.length > 0 && secondPartPhotos.map(row => <li className="recommended-list__item" key={row.id}>
                    <NavLink className="recommended-list__main-link" to={"video/" + row.id}>
                        <div className="recommended-list__item-video-area">
                            <img className="recommended-list__item-video-img" src={row.thumbnailUrl} alt="" width={540} height={250} />

                            <span className="recommended-list__item-video-time">
                                {m}:{s}
                            </span>
                        </div>

                        <h2 className="recommended-list__item-heading">
                            {row.title.split(' ').splice(0, 3).join(' ')}
                        </h2>

                        <div className="recommended-list__item-area">
                            <ul className="recommended-list__item-list">
                                <li className="recommended-list__item-views">
                                    1m views
                                </li>

                                <li className="recommended-list__item-views">
                                    1 day ago
                                </li>
                            </ul>

                            {user && user.map(row => <NavLink className="recommended-list__item-name" key={row.id} to={"/chanel"}>
                                {row.first_name} {row.last_name}
                            </NavLink>)}
                        </div>
                    </NavLink>
                </li>)}
            </ul>
        </div>

        <div className="food-drink">
            <div className="food-drink__top">
                <img className="food-drink__img" src={FoodAvatar} alt="food avatar" width={50} height={50} />

                <h2 className="food-drink__heading">
                    Food & Drink
                </h2>

                <span className="food-drink__info">
                    Recommended channel for you
                </span>
            </div>    

            <ul className="videos-list">
                {thirdPartPhotos.length > 0 && thirdPartPhotos.map(row => <li className="videos-list__item" key={row.id}>
                    <NavLink className="videos-list__main-link" to={"video/" + row.id}>
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

export default Home;