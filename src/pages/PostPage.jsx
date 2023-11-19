
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './PostPageStyles.css'
function PostPage() {
    let {username} = useParams();
    const [postData, setPostData] = useState([]);
    let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.addu.edu.ph/wp-json/wp/v2/posts');
        setPostData(response.data[username].content.rendered); 
        console.log(response.data[username].id);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    
    
  return (
    <div>
        <div className="contentContainer">
        <div dangerouslySetInnerHTML={{__html:postData }}>
        
        </div>
        </div>
        <div>
            <button onClick={() => {navigate("/")}}>Return to home</button>
        </div>
    </div>
  )
}

export default PostPage