// import { Link, Outlet, useNavigate } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { TodoContext } from '../context/Todocontext';
// import Infocard from './Infocard';
// import LogoutBtn from './LogoutBtn';


// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showAuthModal, setShowAuthModal] = useState(false);
//   const navigate = useNavigate();

//   const {user} = useContext(TodoContext);
//   return (
//     <>
//       <nav className="bg-white shadow-lg sticky top-0 z-50">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center h-16">
//             {/* App Logo/Name - TodoPanda with cute panda emoji */}
//             <Link 
//               to="/" 
//               className="flex items-center space-x-2 text-2xl font-bold text-purple-700 hover:text-purple-600 transition-colors"
//             >
//               <span role="img" aria-label="panda">🐼</span>
//               <span>TodoPanda</span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-4">
//               <Link 
//                 to="/todos" 
//                 className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//               >
//                 All Todos
//               </Link>
//               <Link 
//                 to="/create" 
//                 className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//               >
//                 Create Todo
//               </Link>
//               <Link 
//                 to="/about" 
//                 className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//               >
//                 About Us
//               </Link>
//             </div>

//             {/* Auth Buttons - Desktop */}
//            {user ? (
//   <div className="flex items-center space-x-4">
//     <Infocard name={user.name} />
//     <LogoutBtn />
//   </div>
// ) : (
//   <div className="hidden md:flex items-center space-x-2 ml-4">
//     <button
//       onClick={() => navigate('/login')}
//       className="px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 border border-purple-700 transition-colors shadow-md"
//     >
//       Login
//     </button>
//   </div>
// )}





















//             {/* Mobile menu button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-colors"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isMenuOpen ? (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link 
//                 to="/todos" 
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 All Todos
//               </Link>
//               <Link 
//                 to="/create" 
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Create Todo
//               </Link>
//               <Link 
//                 to="/about" 
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About Us
//               </Link>
//             </div>
//             <div className="px-2 pt-2 pb-4 space-y-2 border-t border-gray-200">
//               <button
//                 onClick={() => {
//                   navigate('/login');
//                 }}
//                 className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white transition-colors"
//               >
//                 Login
//               </button>
//               <Link 
//                 to="/logout" 
//                 className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-purple-700 hover:bg-purple-600 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Logout
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
      
//       {/* Auth Modal */}
      
      
//       {/* This renders the child routes */}
//       <Outlet />
//     </>
//   );
// }



import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/Todocontext'; 
import Infocard from './Infocard';
import LogoutBtn from './LogoutBtn';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(TodoContext);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* App Logo/Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-purple-700 hover:text-purple-600 transition-colors"
            >
              <span role="img" aria-label="panda">🐼</span>
              <span>TodoPanda</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/todos" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                All Todos
              </Link>
              <Link 
                to="/create" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                Create Todo
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                About Us
              </Link>
            </div>

            {/* Auth Buttons - Desktop */}
            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Infocard name={user.name} />
                <LogoutBtn />
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-2 ml-4">
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-md"
                >
                  Login
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {/* User info at top (mobile) */}
            {user && (
              <div className="px-4 py-3 border-b border-gray-200">
                <p className="text-sm font-medium text-gray-700">Logged in as:</p>
                <p className="text-lg font-semibold text-purple-600 truncate">{user.name}</p>
              </div>
            )}

            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/todos" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Todos
              </Link>
              <Link 
                to="/create" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Todo
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>

            <div className="px-2 pt-2 pb-4 space-y-2 border-t border-gray-200">
              {user ? (
                <button
                  onClick={() => {
                    navigate('/logout');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-white bg-purple-700 hover:bg-purple-600 transition-colors"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center px-4 py-2 rounded-md text-base font-medium text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
      
      <Outlet />
    </>
  );
}