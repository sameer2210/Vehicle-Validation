import { useState } from "react";
import BASE_URL from "../components/BASE_URL";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddVehicle = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const api = `${BASE_URL}/vehicle/addvehicle`;
            const response = await axios.post(api, input);

            toast.success(response.data.message || "Vehicle added successfully!");

            setInput({
                vehiclenumber: "",
                vehicletype: "",
                vehicleownername: "",
                flatno: "",
                rcnumber: "",
                vehicleownercontact: "",
                alternatecontact: "",
                email: "",
                address: "",
                flatownername: "",
                flatownercontact: "",
                validdate: ""
            });
        } catch (error) {
            console.error(error);
            toast.error("Failed to add vehicle. Please try again.");
        }
    };

    return (
        <>
            <br />
            <h1 style={{ textAlign: "center" }}>Add Vehicle</h1>

            <form id="addvehicle" onSubmit={handleSubmit}>
                <input type="text" placeholder="Vehicle Number" name="vehiclenumber" value={input.vehiclenumber} onChange={handleInput} required /> <span id="star">*</span> <br />

                <select name="vehicletype" value={input.vehicletype} onChange={handleInput} required>
                    <option value="">Select</option>
                    <option value="Bike">Bike</option>
                    <option value="Car">Car</option>
                    <option value="Truck">Truck</option>
                    <option value="Auto Rickshaw">Auto Rickshaw</option>
                </select> <span id="star">*</span> <br />

                <input type="text" placeholder="Vehicle Owner Name" name="vehicleownername" value={input.vehicleownername} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="text" placeholder="Flat No." name="flatno" value={input.flatno} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="text" placeholder="DL / RC Number" name="rcnumber" value={input.rcnumber} onChange={handleInput} required /> &nbsp;<br />
                <input type="number" placeholder="Vehicle Owner Contact" name="vehicleownercontact" value={input.vehicleownercontact} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="number" placeholder="Alternate Contact" name="alternatecontact" value={input.alternatecontact} onChange={handleInput} /> &nbsp; <br />
                <input type="email" placeholder="Email" name="email" value={input.email} onChange={handleInput} /> &nbsp;<br />
                <input type="text" placeholder="Permanent Address" name="address" value={input.address} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="text" placeholder="Flat Owner Name" name="flatownername" value={input.flatownername} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="number" placeholder="Flat Owner Contact" name="flatownercontact" value={input.flatownercontact} onChange={handleInput} required /> <span id="star">*</span> <br />
                <input type="date" name="validdate" value={input.validdate} onChange={handleInput} required /> <span id="star">*</span><br />

                <button type="submit">Submit</button>
            </form>

            <ToastContainer />
        </>
    );
};

export default AddVehicle;
