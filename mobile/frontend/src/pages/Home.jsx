import { FaSearch } from "react-icons/fa";
import BASE_URL from "../components/BASE_URL";
import { MdCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import axios from "axios";
import { useState } from "react";
import img from "../../public/vv.png";
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [search, setSearch] = useState("");
  const [Data, setData] = useState(""); 
  const [res, setRes] = useState("");

  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);

  const handleClose = () =>{
     setShow(false);
     setSearch("");
     setValid(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BASE_URL}/vehicle/search`;
      const response = await axios.post(api, { search });

      setData(response.data);
      setRes(response); 
      

      if (response.status === 201) {
            setValid(true);
            setShow(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>

        <div id="HomeImg">
            <img src={img}/>
        </div> <hr />

      <div id="search">
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          name="vehiclenumber"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <FaSearch />
        </button>
        <br />
      </div>

      <div id="valid">
  {res?.status === 201 && Data?.vehicleNumber === search && (
    <>
      <p id="validIcon"><GiConfirmed /></p>
      <p>Validated</p>
      <p>Vehicle Detail's Found</p>
    </> || <></>
  )}
</div>

<div id="invalid">
  {res.status === 200 && (
    <>
      <p id="invalidIcon"><MdCancel /></p>
      <p>Invalid</p>
      <p>Vehicle Detail's Not Found</p>
    </> || <></>
  )}
</div>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Vehicle Owner Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Data && (
            <>
              <h5>Vehicle Number: {Data.vehicleNumber}</h5>
              <h5>Vehicle Type: {Data.vehicleType}</h5>
              <h5>RC Number: {Data.rcnumber}</h5>
              <h5>Vehicle Owner Name: {Data.vehicleOwnerName}</h5>
              <h5>Vehicle Owner Contact: {Data.vehicleOwnerContact}</h5>
              <h5>Alternate Contact: {Data.alternateContact}</h5>
              <h5>Email: {Data.email}</h5>
              <h5>Address: {Data.address}</h5>
              <h5>Flat Owner Name: {Data.flateOwnerName}</h5>
              <h5>Flat Owner Contact: {Data.flatOwnerContact}</h5>
              <h5>Valid Date: {Data.validDate}</h5>
            </>
          )}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
