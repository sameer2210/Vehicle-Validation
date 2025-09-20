import axios from 'axios';
import { useEffect, useState } from 'react';
import BASE_URL from '../components/BASE_URL';

const Display = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const api = `${BASE_URL}/vehicle/datadisplay`;
      const response = await axios.get(api);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Vehicle Records</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={item.vehicleNumber}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Record #{index + 1}</h2>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Vehicle Number:</span> {item.vehicleNumber}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Vehicle Type:</span> {item.vehicleType}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">RC Number:</span> {item.rcnumber}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Vehicle Owner Name:</span> {item.vehicleOwnerName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Vehicle Owner Contact:</span>{' '}
                  {item.vehicleOwnerContact}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Address:</span> {item.address}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Flat Owner Name:</span> {item.flatOwnerName}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Flat Owner Contact:</span> {item.flatOwnerContact}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Valid Date:</span> {item.validDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
