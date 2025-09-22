

import axios from 'axios';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import img from '../../public/vv.png';
import BASE_URL from '../components/BASE_URL';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSearch('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedSearch = search.toUpperCase().replace(/[\s-]/g, '');

    try {
      const api = `${BASE_URL}/vehicle/search`;
      const response = await axios.post(api, { search: normalizedSearch });
      setData(response.data);
      setRes(response);
    } catch (error) {
      console.log(error);
      setRes({ status: 200 });
      setData(null);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex justify-center mb-6 ">
        <img
          src={img}
          alt="Vehicle Validation"
          className="w-36 h-auto sm:w-48 md:w-64 max-w-full"
        />
      </div>

      {/* Search Section */}
      <div className="w-auto ">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Enter Vehicle Number or Pass"
            name="vehiclenumber"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaSearch />
          </button>
        </form>

        {/* Validation Status */}
        {res?.status === 201 && (
          <div
            onClick={() => setShow(true)}
            className="flex items-center gap-2 mt-4 p-3 bg-green-100 text-green-800 rounded shadow cursor-pointer hover:bg-green-200 transition"
          >
            <GiConfirmed size={24} />
            <div>
              <p className="font-semibold">Validated</p>
              <p>Vehicle Details Found</p>
            </div>
          </div>
        )}

        {res?.status === 200 && (
          <div className="flex items-center gap-2 mt-4 p-3 bg-red-100 text-red-800 rounded shadow">
            <MdCancel size={24} />
            <div>
              <p className="font-semibold">Invalid</p>
              <p>Vehicle Details Not Found</p>
            </div>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      {show && res?.status === 201 && data && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full m-4 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <MdCancel size={24} />
            </button>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Vehicle Owner Details</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold">Vehicle Number:</span>
                  <span>{data.vehicleNumber}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Vehicle Owner Name:</span>
                  <span>{data.vehicleOwnerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Vehicle Owner Contact:</span>
                  <span>{data.vehicleOwnerContact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Alternate Contact:</span>
                  <span>{data.alternateContact}</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold">Flat Owner Name:</span>
                  <span>{data.flateOwnerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Flat Owner Contact:</span>
                  <span>{data.flatOwnerContact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Valid Date:</span>
                  <span>{data.validDate}</span>
                </div>

                {/* <div className="flex justify-between">
                  <span className="font-semibold">Address:</span>
                  <span>{data.address}</span>
                </div> */}

                {/* <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span>{data.email}</span>
                </div> */}

                {/* <div className="flex justify-between">
                  <span className="font-semibold">Vehicle Type:</span>
                  <span>{data.vehicleType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">RC Number:</span>
                  <span>{data.rcnumber}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;