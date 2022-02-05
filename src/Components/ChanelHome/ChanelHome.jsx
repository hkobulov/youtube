import React from 'react';
import './ChanelHome.scss';

function ChanelHome({singlePhoto}) {

    return <div className="chanel-home">
        {singlePhoto && singlePhoto.map(row => 
            <div className="chanel-home__area" key={row.id}>
                <img className='chanel-home__area-img' src={row.thumbnailUrl} alt="image" width={540} height={250} />  

                <span className="chanel-home__area-time">
                    7:36
                </span>
            </div>
            )}

            <div className="chanel-home--inner">
                <h2 className="chanel-home__heading">
                    Choosing The Best Audio Player Software For Your Computer
                </h2>

                <p className="chanel-home__desc">
                    Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                </p>

                <span className="chanel-home__option">
                    <span className="chanel-home__view">
                        1M views
                    </span>

                    <span className="chanel-home__view">
                        6 month ago
                    </span>
                </span>
            </div>
    </div>
}

export default ChanelHome;