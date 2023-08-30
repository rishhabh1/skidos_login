import React, { useEffect, useState } from 'react';
import Header from './header';

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
                <span>Announcement Listing Fetch</span>
                <div>
                    {announcement.map((list, index) => (

                        <div key={index}>
                            <span><b> Id :</b> {list.id}</span>
                            <span><b>Title :</b> {list.title}</span>
                            <p><b>Body : </b>{list.body}</p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default AnnouncementDetail;
