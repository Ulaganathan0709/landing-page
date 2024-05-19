// eslint-disable-next-line
import React from 'react';
import './Features.css';

const Features = () => (
  <section id="features" className="py-5 text-center">
    <div className="container">
      <h2>Features</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card feature-card">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png" className="card-img-top feature-img" alt="MERN Full Stack Development" />
            <div className="card-body">
              <h5 className="card-title">MERN Full Stack Development</h5>
              <p className="card-text">Learn to build end-to-end web applications using MongoDB, Express, React, and Node.js.</p>
              <p className="card-text"><strong>Price: $499</strong></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card feature-card">
            <img src="https://www.itview.in/img/courses/software_testing_cover_image.png" className="card-img-top feature-img" alt="Software Testing" />
            <div className="card-body">
              <h5 className="card-title">Software Testing</h5>
              <p className="card-text">Comprehensive manual and automation testing course.</p>
              <p className="card-text"><strong>Price: $399</strong></p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card feature-card">
            <img src="https://skyje.com/wp-content/uploads/2019/11/lkanFrg.jpg" className="card-img-top feature-img" alt="Python with AI" />
            <div className="card-body">
              <h5 className="card-title">Python with AI</h5>
              <p className="card-text">Learn Python programming and AI concepts.</p>
              <p className="card-text"><strong>Price: $599</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;

