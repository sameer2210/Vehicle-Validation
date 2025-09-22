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
          className="w-50 h-auto  sm:w-60 md:w-64 lg:w-70 max-w-full"
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
        <div className="w-full max-w-[70%] mx-auto">
          <div
            onClick={() => setShow(true)}
            className="flex flex-col justify-center items-center gap-2 xs:gap-3 p-2 xs:p-3 sm:p-4 mb-3 bg-green-100 rounded-lg shadow cursor-pointer hover:bg-green-300 border border-green-300 transition-all duration-200"
          >
            <GiConfirmed className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex-shrink-0 text-green-600" />
            <h6 className="font-bold text-2xl xs:text-sm sm:text-base">Valid</h6>
            <p className="font-semibold text-xs xs:text-sm sm:text-base">Details Found</p>
          </div>
        </div>
      )}

      {/* Vehicle Not Found */}
      {res?.status === 404 && (
        <div className="w-full max-w-[70%] mx-auto">
          <div className="flex flex-col justify-center items-center gap-3 mb-2 p-3 sm:p-4 bg-red-100 text-red-800 rounded-lg shadow">
            <MdCancel className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex-shrink-0 text-red-600" />
            <div>
              <p className="font-bold text-xl xs:text-sm sm:text-base">Vehicle Not Found</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}

      {show && data && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-lg w-full max-w-[80%] xs:max-w-sm sm:max-w-md max-h-[70vh] overflow-y-auto relative">
            <div className="sticky top-0 bg-white border-b p-2 xs:p-3 sm:p-4 flex items-center justify-center">
              <span className="text-lg xs:text-xl font-bold">{data.vehicleNumber}</span>
              <button
                onClick={() => setShow(false)}
                className="absolute top-2 right-2 xs:top-3 xs:right-3 text-gray-500 hover:text-gray-700"
              >
                <MdCancel className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-2 xs:p-3 sm:p-4 space-y-2 xs:space-y-3">
              <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                <span className=" xs:text-sm text-gray-600">Owner Name</span>
                <span className="xs:text-sm sm:text-base">{data.ownerName}</span>
              </div>

              <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                <span className="  xs:text-sm text-gray-600">Owner Contact</span>
                <span className=" xs:text-sm sm:text-base">{data.ownerContact}</span>
              </div>

              <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                <span className="  xs:text-sm text-gray-600">Alternate Contact</span>
                <span className=" xs:text-sm sm:text-base">{data.alternateContact}</span>
              </div>

              <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                <span className="  xs:text-sm text-gray-600">Flat Owner</span>
                <span className=" xs:text-sm sm:text-base">{data.flatOwnerName}</span>
              </div>

              {data.flatOwnerContact && (
                <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                  <span className="  xs:text-sm text-gray-600">Flat Owner Contact</span>
                  <span className=" xs:text-sm sm:text-base">{data.flatOwnerContact}</span>
                </div>
              )}

              <div className="flex items-center justify-center space-x-8 xs:space-x-12 sm:space-x-16">
                <span className="  xs:text-sm text-gray-600">Valid Till</span>
                <span className=" xs:text-sm sm:text-base">
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
