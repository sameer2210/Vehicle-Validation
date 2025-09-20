import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../components/BASE_URL';

const AddVehicle = () => {
  const [input, setInput] = useState({
    vehiclenumber: '',
    vehicletype: '',
    vehicleownername: '',
    flatno: '',
    rcnumber: '',
    vehicleownercontact: '',
    alternatecontact: '',
    email: '',
    address: '',
    flatownername: '',
    flatownercontact: '',
    validdate: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const api = `${BASE_URL}/vehicle/addvehicle`;
      const response = await axios.post(api, input);

      toast.success(response.data.message || 'Vehicle added successfully!');

      setInput({
        vehiclenumber: '',
        vehicletype: '',
        vehicleownername: '',
        flatno: '',
        rcnumber: '',
        vehicleownercontact: '',
        alternatecontact: '',
        email: '',
        address: '',
        flatownername: '',
        flatownercontact: '',
        validdate: '',
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to add vehicle. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Add Vehicle</h1>

      <form
        id="addvehicle"
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 p-6 rounded-lg shadow-md space-y-2"
      >
        <div>
          <input
            type="text"
            placeholder="Vehicle Number"
            name="vehiclenumber"
            value={input.vehiclenumber}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <select
            name="vehicletype"
            value={input.vehicletype}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Auto Rickshaw">Auto Rickshaw</option>
          </select>
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Vehicle Owner Name"
            name="vehicleownername"
            value={input.vehicleownername}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Flat No."
            name="flatno"
            value={input.flatno}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="DL / RC Number"
            name="rcnumber"
            value={input.rcnumber}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="number"
            placeholder="Vehicle Owner Contact"
            name="vehicleownercontact"
            value={input.vehicleownercontact}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="number"
            placeholder="Alternate Contact"
            name="alternatecontact"
            value={input.alternatecontact}
            onChange={handleInput}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleInput}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Permanent Address"
            name="address"
            value={input.address}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Flat Owner Name"
            name="flatownername"
            value={input.flatownername}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="number"
            placeholder="Flat Owner Contact"
            name="flatownercontact"
            value={input.flatownercontact}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <div>
          <input
            type="date"
            name="validdate"
            value={input.validdate}
            onChange={handleInput}
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-red-500 ml-1">*</span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default AddVehicle;
