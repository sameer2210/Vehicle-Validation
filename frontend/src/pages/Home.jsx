import axios from 'axios';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GiConfirmed } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import img from '../../public/vv.png';
import BASE_URL from '../components/BASE_URL';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [res, setRes] = useState(null);
  const [show, setShow] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    const token = localStorage.getItem('token');
    console.log('Token exists:', !!token);
    console.log('Token preview:', token ? token.substring(0, 50) + '...' : 'No token');

    const normalizedSearch = search.toUpperCase().replace(/[\s-]/g, '');

    try {
      const api = `${BASE_URL}/api/vehicles/search?query=${normalizedSearch}`;
      const response = await axios.get(api, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        withCredentials: true,
      });

      setData(response.data);
      setRes({ status: 200 });
    } catch (error) {
      console.error('Search error:', error);
      setData(null);
      setRes({ status: 404 });
    }
  };

  return (
    <div className="max-w-sm sm:max-w-md mx-auto mt-6 sm:mt-8 px-3 sm:px-4">
      {/* Logo */}
      <div className="w-full flex justify-center mb-4 sm:mb-6">
        <img
          src={img}
          alt="Vehicle Validation"
          className="w-30 h-auto xs:w-36 sm:w-40 md:w-52 lg:w-58 max-w-full"
        />
      </div>

      {/* Search Section */}
      <form onSubmit={handleSubmit} className="flex gap-1 sm:gap-2 mb-4 ">
        <input
          type="text"
          placeholder={user ? 'Enter Vehicle Number' : 'Login to search'}
          value={search}
          onChange={e => setSearch(e.target.value)}
          disabled={!user}
          className={`flex-1 p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            !user ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }`}
        />
        <button
          type="submit"
          disabled={!user || !search.trim()}
          className={`px-3 sm:px-4 rounded-r-lg flex items-center justify-center transition ${
            !user || !search.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          <FaSearch className="w-4 h-4" />
        </button>
      </form>

      {/* Vehicle Found Box */}
      {res?.status === 200 && (
        <div
          onClick={() => setShow(true)}
          className="flex items-center gap-3 p-3 sm:p-4 bg-green-100 text-green-800 rounded-lg shadow cursor-pointer hover:bg-green-200 transition-colors"
        >
          <GiConfirmed className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm sm:text-base">Vehicle Found</p>
            <p className="text-xs sm:text-sm opacity-90">Click to view details</p>
          </div>
        </div>
      )}

      {/* Vehicle Not Found */}
      {res?.status === 404 && (
        <div className="flex items-center gap-3 p-3 sm:p-4 bg-red-100 text-red-800 rounded-lg shadow">
          <MdCancel className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm sm:text-base">Vehicle Not Found</p>
            <p className="text-xs sm:text-sm opacity-90">No details available</p>
          </div>
        </div>
      )}

      {/* Modal */}
      {show && data && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg w-full max-w-sm sm:max-w-md max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-3 sm:p-4 flex items-center justify-between">
              <h2 className="font-bold text-base sm:text-lg">Vehicle Details</h2>
              <button onClick={() => setShow(false)} className="text-gray-500 hover:text-gray-700">
                <MdCancel className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-3 sm:p-4 space-y-3">
              <div className="flex justify-center items-center">
                <span className="text-xl font-bold sm:text-base ">{data.vehicleNumber}</span>
              </div>

              <div>
                <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                  Owner Name
                </span>
                <span className="text-sm sm:text-base">{data.ownerName}</span>
              </div>

              <div>
                <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                  Owner Contact
                </span>
                <span className="text-sm sm:text-base">{data.ownerContact}</span>
              </div>

              <div>
                <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                  Alternate Contact
                </span>
                <span className="text-sm sm:text-base">{data.alternateContact}</span>
              </div>

              <div>
                <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                  Flat Owner
                </span>
                <span className="text-sm sm:text-base">{data.flatOwnerName}</span>
              </div>

              {data.flatOwnerContact && (
                <div>
                  <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                    Flat Owner Contact
                  </span>
                  <span className="text-sm sm:text-base">{data.flatOwnerContact}</span>
                </div>
              )}

              <div>
                <span className="block font-semibold text-xs sm:text-sm text-gray-600">
                  Valid Till
                </span>
                <span className="text-sm sm:text-base">
                  {new Date(data.validTill).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
