// import React from "react";
// import { useAuth } from "./auth-Context";
// import HomeOne from "./screen/HomeOne";
// import { Routes, Route, Link } from "react-router-dom";
// import About from "./screen/RouteAboutUs/About";
// import Rules from "./screen/RouteRuls/Rules";
// import Support from "./screen/RouteSupport/Support";
// import Cooperation from "./screen/RouteCooperation/Cooperation";
// import CardProduct from './component/CardProduct';
// import App from './App';


// const Authentication = () => {
//   const { loggedIn } = useAuth();
//   const { LogOut } = useAuth();

//   return (
//     <div>
//       <p>hi</p>
//       <button onClick={LogOut}>panel user</button>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/About">درباره ما</Link>
//           </li>
//           <li>
//           <Link to="/Rules">قوانین</Link>
//           </li>
//           <li>
//           <Link to="/Support">پشتیبانی</Link>
//           </li>
//           <li>
//           <Link to="/Cooperation">همکاری</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Rules" element={<Rules />} />
//         <Route path="/Support" element={<Support />} />
//         <Route path="/Cooperation" element={<Cooperation />} />
//       </Routes>
//     </div>
//   );
// };

// const UnAuthentication = () => {
//   const { loggedIn } = useAuth();
//   const { LogIn } = useAuth();
//   return (
//     <div>
//          <div>
//     <CardProduct/>
//     </div>
//       <p>go sign up</p>
//       <button onClick={LogIn}>signUp</button>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Rules" element={<Rules />} />
//         <Route path="/Support" element={<Support />} />
//         <Route path="/Cooperation" element={<Cooperation />} />
//       </Routes> 
//     </div>
//   );
// };

// export { Authentication, UnAuthentication };
