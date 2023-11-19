import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import axios from 'axios';
import Card from '../components/Card';
import './LandingPageStyles.css'
import pic from '../../assets/adu.jpg';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.addu.edu.ph/wp-json/wp/v2/posts');
        setPostData(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        {/* <div>
            <Navbar />
        </div> */}

        <div className="heroSection">
            <div className="overLay"><h1>Ateneo de Davao University</h1></div>
        </div>

        <div className="headerDiv">
            <h1>POSTS</h1>
        </div>
      <div className="gridContainer">
      
      {postData.map((post, index) => (
        <Link key={post.id} to={`/post/${index}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Card key={post.id} title={post.title.rendered} contents={post.excerpt.rendered} />
        </Link>
        
      ))}
      
      </div>
    </div>
  );
};

export default LandingPage;
