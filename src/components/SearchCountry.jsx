import React, { useState, useEffect } from 'react';
import SkeletonLoader from './SkeletonLoader';
import data from './Data.json';
import Modal from './Modal'; 
import { Search, Globe } from 'lucide-react';  // Importing icons from Lucide

const SearchCountry = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      if (query) {
        const lowerQuery = query.toLowerCase();
        const filtered = data.filter(item =>
          item.country.toLowerCase().includes(lowerQuery) ||
          item.capital.toLowerCase().includes(lowerQuery)
        ).slice(0, 5); 
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
      setLoading(false);
    };

    fetchSuggestions();
  }, [query]);

  const handleResultClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 mt-5">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a country or capital..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-12 border border-indigo-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out bg-white"
        />
        <Search className="absolute top-4 left-4 text-gray-400" size={24} /> {/* Search Icon */}
      </div>

      {loading ? (
        <SkeletonLoader count={5} className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2" />
      ) : (
        suggestions.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-4 border-b last:border-b-0 hover:bg-indigo-100 cursor-pointer transition duration-200 ease-in-out flex items-center"
                onClick={() => handleResultClick(item)}
              >
                <Globe className="text-indigo-400 mr-3" size={20} /> {/* Globe Icon */}
                <div>
                  <div className="font-semibold text-gray-800">{item.country}</div>
                  <div className="text-sm text-gray-600">{item.capital}</div>
                </div>
              </li>
            ))}
          </ul>
        )
      )}
      {selectedCountry && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          countryDetails={selectedCountry}
        />
      )}
    </div>
  );
};

export default SearchCountry;





















































//////////////////////////////////////////////////////////////////////////////////////////////////////////
























// import React, { useState, useEffect } from 'react';
// import SkeletonLoader from './SkeletonLoader';
// import data from './Data.json';
// import Modal from './Modal'; 

// const SearchCountry = () => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchSuggestions = async () => {
//       setLoading(true);
//       await new Promise(resolve => setTimeout(resolve, 500));
//       if (query) {
//         const lowerQuery = query.toLowerCase();
//         const filtered = data.filter(item =>
//           item.country.toLowerCase().includes(lowerQuery) ||
//           item.capital.toLowerCase().includes(lowerQuery)
//         ).slice(0, 5); 
//         setSuggestions(filtered);
//       } else {
//         setSuggestions([]);
//       }
//       setLoading(false);
//     };

//     fetchSuggestions();
//   }, [query]);

//   const handleResultClick = (country) => {
//     setSelectedCountry(country);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCountry(null);
//   };

//   return (
//     <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 mt-5">
//       <input
//         type="text"
//         placeholder="Search for a country or capital..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//       />
//       {loading ? (
//         <SkeletonLoader count={5} className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2" />
//       ) : (
//         suggestions.length > 0 && (
//           <ul className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
//             {suggestions.map((item, index) => (
//               <li
//                 key={index}
//                 className="p-4 border-b last:border-b-0 hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out"
//                 onClick={() => handleResultClick(item)}
//               >
//                 <div className="font-semibold text-gray-800">{item.country}</div>
//                 <div className="text-sm text-gray-600">{item.capital}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}
//       {selectedCountry && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           countryDetails={selectedCountry}
//         />
//       )}
//     </div>
//   );
// };

// export default SearchCountry;
