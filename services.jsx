const Services = () => {
  return (
    <div className="container py-5">
      {/* Title */}
      <div className="text-center mb-5">
        <h1>Our Smart Home Services</h1>
        <p className="text-muted">
          Discover the intelligent features and automation systems included in
          our Smart Home project.
        </p>
      </div>

      {/* Services Section */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h4>Smart Security</h4>

              <p>
                Motion sensors and alarms help protect the house by detecting
                movement and activating warning systems automatically.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h4>Automatic Lighting</h4>

              <p>
                The lighting system automatically turns lights on or off
                depending on the surrounding light intensity.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h4>Gas Detection System</h4>

              <p>
                The MQ2 gas sensor detects dangerous gas leaks and activates the
                fan and buzzer for safety and ventilation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
