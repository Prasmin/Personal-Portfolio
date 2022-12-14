import React from "react";
import "./Experience.css";
import { RiShieldCheckFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Pro</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Pro</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>My SQL</h4>
                <small className="text-light">Pro</small>
              </div>
            </article>

            <article className="experience__details">
              <RiShieldCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
