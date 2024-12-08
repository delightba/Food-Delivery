import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar.jsx';
import Footer from './shared/Footer.jsx';
import './index.css';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16"> {/* Adjust pt-16 to match your Navbar's height */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
