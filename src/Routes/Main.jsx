import React from "react";
import "../App.scss";

function Main() {
  return (
    <div className="mainPage">
      <div>
        <h1 className="welcome-section1">Welcome to YourBookhub Online</h1>
      </div>
      <div>
        <p>
          YourBookhub Online is a unique platform that combines a vast online
          library with interactive chat features. Immerse yourself in a world of
          literature while engaging in conversations with fellow book
          enthusiasts.
        </p>
      </div>

      <section className="mission-section">
        <h2>Our Mission:</h2>
        <p>
          At YourBookhub Online, our mission is to provide a dynamic space where
          readers can explore a diverse collection of books and connect with
          others who share their passion for literature. We emphasize fostering
          a sense of community and meaningful interactions.
        </p>
      </section>

      <section className="features-section">
        <h2 className="key-features">Key Features:</h2>
        <div className="feature">
          <h3>Extensive Book Collection:</h3>
          <p>
            Discover a wide array of books spanning various genres and topics.
            From classic literature to contemporary works, we have something for
            every reader.
          </p>
        </div>
        <div className="feature">
          <h3>Interactive Chat:</h3>
          <p>
            Engage in lively discussions with fellow book lovers. Share your
            thoughts, recommendations, and favorite literary discoveries in our
            vibrant chat community.
          </p>
        </div>
        <div className="feature">
          <h3>User-Friendly Interface:</h3>
          <p>
            Our platform is designed for easy navigation, ensuring a seamless
            experience as you explore the virtual shelves of YourBookshelf
            Online.
          </p>
        </div>
      </section>

      <section className="join-section">
        <a href="https://dalm1chat.online/">
          <h2 className="key-features">Join Us:</h2>
        </a>
        <p>
          Become part of our reading community today! Sign up to access our
          virtual library and connect with fellow readers from around the world.
        </p>
      </section>

      <section className="get-started-section">
        <h2>Get Started:</h2>
        <p>
          Start your literary journey with YourBookhub Online and embark on a
          fulfilling experience that celebrates the love of reading and
          meaningful conversations.
        </p>
      </section>
    </div>
  );
}

export default Main;
