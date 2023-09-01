import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

const Announcements = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const announcementData = {
      title,
      description,
      category,
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(announcementData),
      });
      if (response.ok) {
        // const responseData = await response.json();
        navigate(`/posts`);
      } else {
        console.error('Failed to post announcement');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <Header />
      <div className='login_page'>
        <h2>Create Announcement</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder='Enter Title' />
          </div>
          <div>
            <label>Description:</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder='Enter Description' />
          </div>
          <div>
            <label>Category Type:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required placeholder='Enter Category Type' />
          </div>
          <button type="submit" className="login_btn">Create Announcement</button>
        </form>
      </div>
    </>
  );
};


export default Announcements;
