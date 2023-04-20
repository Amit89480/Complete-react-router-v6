import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => gotoContact()}> Go to Contact Page</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          go Back
        </button>
      </section>
    </>
  );
};

export default About;
