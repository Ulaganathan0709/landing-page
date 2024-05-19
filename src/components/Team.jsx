// eslint-disable-next-line
import React from 'react';
import './Team.css';

const Team = () => (
  <section id="team" className="py-5 bg-light">
    <div className="container text-center">
      <h2>Our Team</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="team-member">
            <img src="https://media.istockphoto.com/id/1448167415/photo/smiling-indian-businessman-in-suit-and-glasses-with-laptop-near-office-building.webp?b=1&s=170667a&w=0&k=20&c=kQ-sWPkU5XP8sG1-MIrGnTe9SkLQBjGvVsa2X8uVHfc=" className="rounded-circle team-img" alt="Team Member 1" />
            <h5>Ulaganathan</h5>
            <p>10 years experience in IT industries</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-member">
            <img src="https://www.shortform.com/blog/wp-content/uploads/2022/10/professional-business-woman-750x350.jpg" className="rounded-circle team-img" alt="Team Member 2" />
            <h5>Sivakami</h5>
            <p>8 years experience in IT</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-member">
            <img src="https://i0.wp.com/www.thebulletintime.com/wp-content/uploads/2023/09/Sophia-Leonese.jpg?resize=650%2C340&ssl=1" className="rounded-circle team-img" alt="Team Member 3" />
            <h5>Shopia Leone</h5>
            <p>11 years experience in IT</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;


