import React from 'react';
import Header from './components/Header';
import SearchCountry from './components/SearchCountry';
import './App.css'; // Ensure Tailwind CSS is included

function App() {
  return (
    <div className="App bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-400 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex mt-5 md:mt-10">
        <SearchCountry />
      </main>
    </div>
  );
}

export default App;













///////////////////////////////////////////////////////






// import React from 'react';
// import Header from './components/Header';
// import SearchCountry from './components/SearchCountry';
// import './App.css'; // Ensure Tailwind CSS is included

// function App() {
//   return (
//     <div className="App bg-gray-100 min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow flex  mt-5 md:mt-10">
//         <SearchCountry />
//       </main>
//     </div>
//   );
// }

// export default App;
