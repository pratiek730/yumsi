import "./message.styles.css";
import { Button, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { ReactComponent as User } from "../../assets/icons/circle-user-regular.svg";
import { ReactComponent as Mail } from "../../assets/icons/envelope-regular.svg";
import { ReactComponent as Phone } from "../../assets/icons/mobile-screen-button-solid.svg";
import InputFeild from "../input-field/input-field.component";
import { useState } from "react";

const defaultFormFeilds = {
  name: "",
  email: "",
  number: "",
  text: ""
};

function Message() {
  const [messageData, setMessageData] = useState(defaultFormFeilds);

  async function handleChange(event) {
    const { name, value } = event.target;
    await setMessageData({
      ...messageData,
      [name]: value,
    });
  }

  function resetFeilds() {
    setMessageData(defaultFormFeilds);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch("https://api.apilayer.com/mem_db/get/react-assignment", {
      method: "POST", // or 'PUT'
      headers: {
        apikey: "1hPWgDeQjPQTriKYlahWy1F594Hn16tj",
      },
    })
      .then((response) => {
        response = response.json();
        const queue_number = response.data.value || 1;
        alert(`Success, You are ${response.data} in the queue`);
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
        alert("Error Processing Your Request");
      });

      resetFeilds()
  }

  return (
    <div className="message-container">
      <h1>Send Us A Message</h1>
      <div className="content">
        You can contact us with anything related to our products. We will get in
        touch with you as soon as possible.
      </div>
      <Form className="message-form-container">
        <label className="form-label">
          Your Name
        </label>
        <InputFeild Icon={User} name="name" type="name" required onChange={handleChange} value={messageData.name}/>
        <label  className="form-label">
          Email
        </label>
        <InputFeild Icon={Mail} name="email" type="email" required onChange={handleChange}  value={messageData.email}/>
        <label className="form-label">
          Phone Number
        </label>
        <InputFeild Icon={Phone} name="number" type="text" required onChange={handleChange} value={messageData.number}/>

        <FormGroup>
          <Label >Text Area</Label>
          <Input name="text" type="textarea" required onChange={handleChange} value={messageData.text}/>
        </FormGroup>

        <Button color="primary" className="submit-button" onClick={handleSubmit}>
          Contact Us
        </Button>
      </Form>
    </div>
  );
}

export default Message;
