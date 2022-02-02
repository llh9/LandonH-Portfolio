import React from 'react';
import coverImage from '../../assets/cover/profile picture 1.jpg';
function About() {
  // const style = {
  //   backgroundcolor: 'black'
  // }
  return (
    <section className="my-5" 
    // style={{style}}
    >
      <div className="my-2">
        <div className="profile-img my-5" >
        <img src={coverImage} width = "70" height = "70" alt="Profile" className="" style={{ fontSize: "96px" }}></img>
        </div>
        <p>
        Junior Software Developer with a mission to advance the usability and performance of websites and applications used by businesses of any Industry. Has a background in Electrical and Electronics Engineering. Earned a certificate in Full Stack Web Development from The Ohio State University Coding Bootcamp and gained proficient experience with various new technologies, providing the most modern approach to developing websites and apps that can be used by all companies seeking technological advancement or modernization. 
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
