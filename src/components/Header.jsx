import React from 'react';
import { MapPin } from 'lucide-react';  // Import Lucide icon

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-500 to-purple-500 p-6 shadow-md text-white text-center flex flex-col items-center">
      <MapPin className="text-white mb-2 animate__animated animate__fadeIn animate__delay-1s" size={48} /> {/* Map Pin Icon */}
      <h1 className="text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s">
      Country Search
      </h1>
      <p className="text-lg mt-2 animate__animated animate__fadeIn animate__delay-2s">
      Helps you search for countries and capitals.
      </p>
    </header>
  );
};

export default Header;



















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////













// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 shadow-md text-white text-center">
//       <h1 className="text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s">
//         Fast Finder
//       </h1>
//       <p className="text-lg mt-2 animate__animated animate__fadeIn animate__delay-2s">
//         Search for countries and capitals with ease.
//       </p>
//     </header>
//   );
// };

// export default Header;
