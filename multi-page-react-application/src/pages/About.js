import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page">
      <h1>About This App</h1>
      <p>
        This app is built using React functional components and React Router.
        It demonstrates navigation, dynamic routing, and reusable components.
      </p>

      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
};

export default About;
