import React from 'react';

const SkeletonLoader = ({ count }) => {
  return (
    <div className="animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 mb-2 mt-2 rounded-lg"></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;











/////////////////////////////




// import React from 'react';

// const SkeletonLoader = ({ count }) => {
//   return (
//     <div className="animate-pulse">
//       {Array.from({ length: count }).map((_, index) => (
//         <div key={index} className="w-full h-12 bg-gray-200 mb-2 mt-2 rounded-lg"></div>
//       ))}
//     </div>
//   );
// };

// export default SkeletonLoader;
