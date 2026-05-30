const About = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-dark text-center mb-5">
        <h1>About Our Smart Home Project</h1>

        <p className="text-muted">
          A modern home automation system developed using Arduino and ReactJS.
        </p>
      </div>

      {/* About Content */}
      <div className="card shadow p-4">
        <p>
          Our Smart Home project was designed to demonstrate how technology and
          automation can improve safety, comfort, and energy efficiency inside a
          modern house.
        </p>

        <p>
          The system combines several electronic components such as motion
          sensors, gas sensors, servo motors, LEDs, buzzers, LCD displays, and
          automatic ventilation systems controlled through Arduino.
        </p>

        <p>
          Using ReactJS and Bootstrap, we created a responsive frontend website
          that presents the project features in a clean and user-friendly way.
        </p>

        <p>
          The goal of this project is to simulate real-life smart home systems
          used in modern buildings and provide a practical application of
          embedded systems and web development.
        </p>
      </div>
    </div>
  );
};

export default About;
