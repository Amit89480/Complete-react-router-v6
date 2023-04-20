import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const gotohome = () => {
    navigate("/");
  };
  return (
    <>
      <section>
        <h1>Contact Page</h1>
        <button onClick={()=>gotohome()}> Go to homePage</button>
        <button onClick={()=>{navigate(-1)}}> Go Back</button>
      </section>
    </>
  );
};

export default Contact;
