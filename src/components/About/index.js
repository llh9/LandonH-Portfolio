import React from 'react';
import coverImage from '../../assets/cover/profile picture 1.jpg';
function About() {
  const style = {
    backgroundcolor: 'black'
  }
  return (
    <section className="my-5" style={{backgroundColor: 'black'}}>
      <div className="my-2">
        <div className="profile-img my-5" >
        <img src={coverImage} width = "70" height = "70" alt="Profile" className="" style={{ fontSize: "96px" }}></img>
        </div>
        <p>
        Motivatated Software Devloper and aspiring Electronics Engineer. 
        </p>
        <p>
        I've had a lifelong interest in technology, which is an interest that continues to grow. My first experience in the tech field began with Automotive technology, and has eversince lead me through a variety of industries. Each experience has added to my knowledge of technology and has given me a particular insight into how technology supports different businesses and industries. 
        </p>
        <p>
        Striving to offer the best of my abilities while doing what I love, Software Development has proven to be the most enjoyable, challenging, promising and powerful skill I've aquired and continue to develope. 
        </p>
      </div>
    </section>
  );
}

export default About;
