import React from "react";
import './Video.scss';
import {useParams, NavLink} from 'react-router-dom';
import {Like, Dislike, Share, More} from '../../Lib/Icons';
import FoodIcon from '../../Lib/Images/fooddrink.png';
import Switch from '@mui/material/Switch';

function Video() {
    const {id} = useParams();
    const [photos, setPhotos] = React.useState([]);
    const [singlePhoto, setSinglePhoto] = React.useState([]);
    const [playlist, setPlaylist] = React.useState([])
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => {setPhotos([data]); setPlaylist(data.slice(0, 30))})
    }, [id])

    React.useEffect(function singleVideo() {
        photos.forEach(item => {
            item.forEach(item => {
                if(id == item.id){
                    setSinglePhoto([item])
                }
            })
        })
    }, [photos])

    return <div className="video">
        <div className="video-left">
            {singlePhoto && singlePhoto.map(row => <div className="video-left__top" key={row.id}>
                <img className="video-left__top-img" src={row.thumbnailUrl} alt="image" width={1000} height={450} />

                <h2 className="video-left__top-heading">
                    {row.title}
                </h2>

                <div className="video-left__top-area">
                    <span className="video-left__top-view">
                        123k views
                    </span>

                    <ul className="video-left__top-list">
                        <li className="video-left__top-list__item">
                            <button className="video-left__top-list__btn">
                                <Like />
                                
                                <span className="video-left__top-list__info">
                                    1M
                                </span>
                            </button>
                        </li>

                        <li className="video-left__top-list__item">
                            <button className="video-left__top-list__btn">
                                <Dislike />

                                <span className="video-left__top-list__info">
                                    998B
                                </span>
                            </button>
                        </li>

                        <li className="video-left__top-list__item">
                            <button className="video-left__top-list__btn">
                                <Share />

                                <span className="video-left__top-list__info">
                                    Share
                                </span>
                            </button>
                        </li>

                        <li className="video-left__top-list__item">
                            <button className="video-left__top-list__btn">
                                <More />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>)}

            <div className="video-left__bottom">
                <div className="video-left__bottom-info">
                    <img src={FoodIcon} alt="" width={80} height={80} />

                    <div className="video-left__bottom-info--inner">
                        <h2 className="video-left__bottom-info__heading">
                            Food & Drink
                        </h2>

                        <span className="video-left__bottom-info__about">
                            Published on 14 Jun 2019
                        </span>

                        <p className="video-left__bottom-info__desc">
                            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. 
                        </p>

                        <button className="video-left__bottom-info__btn">
                            Show more
                        </button>
                    </div>

                    <button className="video-left__bottom-btn">
                        Subscribe 2.3m
                    </button>
                </div>
            </div>
        </div>

        <div className="video-right">
            <div className="video-right__top">
                <h2 className="video-right__top-heading">
                    Next
                </h2>

                <div className="video-right__top--inner">
                    <span className="video-right__top--inner-info">
                        Autoplay
                    </span>

                    <Switch {...label} defaultChecked  />
                </div>

            </div>
            
                <ul className="video-right__list">
                    {playlist.length > 0 && playlist.map(row => <li className="video-right__list-item" key={row.id}>
                        <NavLink className="video-right__list-main-link" to={"/video/" + row.id}>
                            <div className="video-right__list-area">
                                <img className="video-right__list-img" src={row.thumbnailUrl} alt="" width={367} height={213} />

                                <span className="video-right__list-time">
                                    1:01
                                </span>
                            </div>

                            <h3 className="video-right__list-heading">
                                {row.title.split(' ').slice(0, 4).join(' ')}
                            </h3>

                            <span className="video-right__list-stat">
                                <span className="video-right__list-view">
                                   123k views
                                </span>

                                <span className="video-right__list-view">
                                    Kotta bollar
                                </span>
                            </span>
                        </NavLink>
                    </li>)}
                </ul>
        </div>
    </div>
}

export default Video;