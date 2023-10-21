import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center " style={{ width: '100%', height: '300px' }}>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="detail-div text-center" style={{ width: "650px" }}>
          <i className="fa-solid fa-upload "></i>{"  "}
          <h3>Media Player</h3>
          <p>
            Experience entertainment like never before with our cutting-edge media player. Unlock a world of immersive audio and video playback, seamless streaming, and intuitive controls. Elevate your media experience with us today.
          </p>
        </div>
        <div className="links d-flex flex-column mt-4  ">
          <h3>Links</h3>
          <Link to={"/"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >Landing</Link>
          <Link to={"/home"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >Home</Link>
          <Link to={"/WatchHistory"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >Watch History</Link>
        </div>
        <div className="guides d-flex flex-column mt-4 ">
          <h3>Guides</h3>
          <Link to={"https://react-bootstrap.netlify.app/"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >React</Link>
          <Link to={"https://www.cloudflare.com/learning/network-layer/what-is-a-router/"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >Bootstrap</Link>
          <Link to={"https://en.wikipedia.org/wiki/India"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} >Routing</Link>
        </div>
          <div className="contact-us mt-4">
            <h4>Contact us</h4>
            <div className="sub d-flex ">
              <input type="text" className='form-control text-center' placeholder='Enter your Email' />
             
              <button className='btn btn-primary ms-3'>Subscribe</button>
            </div>
        <div className="icons d-flex justify-content-evenly mt-4  ">
        <Link to={"https://react-bootstrap.netlify.app/"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-facebook fs-3 "></i></Link>
          <Link to={"https://www.cloudflare.com/learning/network-layer/what-is-a-router/"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-linkedin fs-3 "></i></Link>
          <Link to={"https://en.wikipedia.org/wiki/India"} className="fs-6" style={{ textDecoration: 'none', color: 'white' }} ><i className="fa-brands fa-youtube fs-3 "></i></Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        © player, Inc.
      </div>
    </div>
  );
}

export default Footer;
