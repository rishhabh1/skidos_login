import React, { useEffect, useState } from 'react';
import Header from './header';
import { Link } from 'react-router-dom';

const AnnouncementDetail = () => {

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                if (response.ok) {
                    const data = await response.json();
                    setAnnouncement(data);
                } else {
                    console.error('Failed to fetch announcement');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchAnnouncement();
    }, []);

    return (
        <>
            <Header />
            <div className='posts'>

                <div className='post_left'>
                    {announcement.map((list, index) => (

                        <div key={index} className='posts_box'>
                            <span className='date'>22/03/2022, 08:48:15</span>
                            <span className='heading'><b> {list.title}</b></span>
                            <span className='category_type'><img src="/assets/images/bell-icon.png" width="21px" alt="" /> ANNOUNCEMENTS</span>
                            <p>{list.body}</p>
                            <br />
                            <span>Skidos Team</span>
                            <div className="comment_box">
                                <img src="/assets/images/smiley.png" alt="" width="21px" />
                                <div>
                                    <input type="text" placeholder='Give us some feedback' />
                                    <img src="/assets/images/msg-icon.png" alt="" width="21px" />
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <div className='post_right'>
                    <Link to="/announcements" className='login_btn'>Submit an announcement</Link>
                    <ul>
                        <li className='active'>
                            ALL POSTS
                        </li>
                        <li>
                            PROMOTIONS <img src="/assets/images/star.webp" width="21px" alt="" />
                        </li>
                        <li>
                            ANNOUNCEMENTS
                            <img src="/assets/images/bell-icon.png" width="21px" alt="" />

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AnnouncementDetail;
