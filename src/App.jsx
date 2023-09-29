import { useState } from "react";
import "./Style.scss";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { RiContactsFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

function App() {
  const [firstName, setFirstName] = useState("");
  const [firstNameArr, setFirstNameArr] = useState([]);

  const [lastName, setLastName] = useState("");
  const [lastNameArr, setLastNameArr] = useState([]);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberArr, setPhoneNumberArr] = useState([]);

  function getValue(e) {
    setFirstNameArr([...firstNameArr, firstName]);
    setLastNameArr([...lastNameArr, lastName]);
    setPhoneNumberArr([...phoneNumberArr, phoneNumber]);
    e.preventDefault();
  }

  return (
    <div className="container">
      <form>
        <Form.Control
          type="text"
          style={{ width: "250px" }}
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Control
          type="text"
          style={{ width: "250px" }}
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Control
          type="tel"
          style={{ width: "250px" }}
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button variant="outline-primary" onClick={getValue} type="submit">
          Add contact
        </Button>
      </form>
      <div className="contact__list">
        <div className="contact__list__title">
          <h3>
            <RiContactsFill />
            First name
          </h3>
          <h3>
            <RiContactsFill />
            Last name
          </h3>
          <h3>
            <BsFillTelephoneFill />
            Phone number
          </h3>
        </div>
        <div className="contact__value">
          {
          firstNameArr.map((e, index) => (
            <p>{index}{e}</p>
          ))}
          
          {
          lastNameArr.map((e) => (
            <span>{e}</span>
          ))}

          {
          phoneNumberArr.map((e) => (
            <span>{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
