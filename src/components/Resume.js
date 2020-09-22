import React, { Component } from 'react';
import ResumeCards from './ResumeCards.js';

class Resume extends Component {
  render() {
    return (
      <div class="resumeContainer">
        <div class="leftCard">
          <h1>Open Source Software Engineer</h1>
          <p>
            As an open source software developer, I've built developer tools and
            web applications primarily using React, Node, and both SQL and NoSQL
            databases. I love getting to use my creativity to build an intuitive
            front end, and the rush I feel after successfully setting up a back
            end. I was inspired to pursue software engineering after using many
            interesting applications in my previous roles, and building front
            end landing pages using content management systems. My favorite
            aspect of software engineering has been working with other engineers
            and the collaborative nature of the open source community.
          </p>
        </div>
        <div class="rightCard">
          <h1>Strider Bikes</h1>
          <p>
            My role at Strider Bikes included both domestic and international
            responsibilities. Within the United States, I handled public
            relations, responding to journalist inquiries, writing press
            releases, and coordinating work with influencers. This work resulted
            in millions of impressions in traditional and online media.
            Internationally, I oversaw Strider's expansion into India, Germany,
            France, Spain and the Netherlands. In this role I drafted and
            implemented marketing strategy and budget for product launches. I
            also worked with local PR firms to ensure our work resonated in
            their communities.
          </p>
        </div>
        <div class="leftCard">
          <h1>National Outdoor Leadership School</h1>
          <p>
            During my time at NOLS I developed landing pages and automated
            marketing campaigns to educate prospective students about NOLS
            courses. In my role I also traveled to events throughout the US
            three months out of the year, building relationships with potential
            students and their families at gap year fairs and industry
            conferences. I trained and mentored new representatives, and worked
            with the NOLS creative team to create new content for potential
            students. I also had the opportunity to take a NOLS course, where I
            spent two weeks backcountry splitboarding and sleeping in snow
            shelters in the Teton Range.
          </p>
        </div>
        <div class="rightCard">
          <h1>Fulbright Program</h1>
          <p>
            As a Fulbright English Teaching Assistant, I taught English to
            students in the English Pedagogy program at Otgontenger University.
            I participated in public speaking and volunteer events with the
            United States Embassy in Ulaanbaatar. In my free time I attended art
            classes at Anima Art Studio, and boxing sessions at a local gym.
          </p>
        </div>
        <div class="leftCard">
          <h1>United States Senate</h1>
          <p>
            As an intern in the US Senate, I spent my time communicating with
            constituents over the phone and via email. I compiled relevant press
            clippings for the senator and policy team, and attended senate
            hearings as often as I could. I also enjoyed giving tours of the
            Capitol building in both English and German.
          </p>
        </div>
        <div class="rightCard">
          <h1>California Lutheran University</h1>
          <p>
            My collegiate experience extended across continents and academic
            interest areas. I researched social capital in the Mongolian and
            Armenian communities and spent the fall of my junior year
            researching in Kampala, Uganda. My coursework included many
            political science and anthropology classes, as well as work in
            graphic design, statistics, and environmental science. I also had a
            number of jobs on campus, first as a librarian, later as the Global
            Studies Department Assistant.
          </p>
        </div>
      </div>
    );
  }
}

export default Resume;
