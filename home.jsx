import MyButton from "../components/MyButton";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center p-5 bg-primary text-white rounded mb-4">
        <h1>Smart Home System</h1>
        <p>Arduino • Sensors • Automation</p>
      </div>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Security</h5>
            <p>Motion detection and alarm system</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Lighting</h5>
            <p>Automatic light control using sensors</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card shadow p-3">
            <h5>Gas Safety</h5>
            <p>Detect leaks and activate fan system</p>
          </div>
        </div>
      </div>

      <MyButton text="Learn More" onClick={() => alert("Smart Home Project")} />
    </div>
  );
};

export default Home;
