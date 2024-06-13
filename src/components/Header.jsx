import { useState } from "react";

export function useManageHeaderState() {
  const [name, setName] = useState("John D. Marshal");
  const [title, setTitle] = useState("Software Engineer");
  const [address, setAddress] = useState("Harar 124 Jogol");
  const [tel, setTel] = useState("+2513894987");
  const [email, setEmail] = useState("johnmarshal@gmail.com");

  const handleName = (e) => setName(e.target.value);
  const handleTel = (e) => setTel(e.target.value);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const reloadHeader = () => {
    setName("John D. Marshal");
    setTitle("Software Engineer");
    setAddress("Harar 124 Jogol");
    setTel("+2513894987");
    setEmail("johnmarshal@gmail.com");
  };

  const handleHeaderReset = () => {
    setName("");
    setTel("");
    setAddress("");
    setEmail("");
    setTitle("");
  };

  return {
    name,
    title,
    address,
    tel,
    email,
    handleName,
    handleTel,
    handleTitle,
    handleAddress,
    handleEmail,
    reloadHeader,
    handleHeaderReset,
  };
}

export function SetHeader({
  handleName,
  handleAddress,
  handleEmail,
  handleTitle,
  handleTel,
  handleHeaderReset,
  reloadHeader,
}) {
  return (
    <div className="input-header common-flex">
      <div>
        <label>Name</label>
        <br />
        <input onChange={handleName} type="text" />
        <br />
      </div>

      <div>
        <label>Title</label>
        <br />
        <input onChange={handleTitle} type="text" />
        <br />
      </div>

      <div>
        <label>Address</label>
        <br />
        <input onChange={handleAddress} type="text" />
        <br />
      </div>

      <div>
        <label>Email</label>
        <br />
        <input onChange={handleEmail} type="email" />
        <br />
      </div>

      <div>
        <label>Phone</label>
        <br />
        <input onChange={handleTel} type="tel" />
        <br />
      </div>

      <div>
        <button onClick={handleHeaderReset}>Delete</button>
        <button onClick={reloadHeader}>Reload initial Data</button>
      </div>
    </div>
  );
}

export function Header({ name, title, address, email, phone }) {
  return (
    <div className="header_">
      <h2>{name}</h2>
      <h4>{title}</h4>
      <div>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
