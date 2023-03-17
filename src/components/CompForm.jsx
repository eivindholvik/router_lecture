import Input from "./Input";
import { useState } from "react";

function CompForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, price);
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="name" value={name} setValue={setName} />
      <Input
        label="description"
        type="textarea"
        value={description}
        rows="2"
        setValue={setDescription}
        placeholder="Write about why you want to come!"
      />
      <Input
        label="price"
        placeholder="What do you want to pay"
        value={price}
        setValue={setPrice}
        type="number"
      />
      <button type="submit">Submit form</button>
    </form>
  );
}

export default CompForm;
