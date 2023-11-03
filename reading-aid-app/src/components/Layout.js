// components/Layout.js

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header>
        <Navbar />
      </header>

      <main className="mb-auto bg-gray-100 p-4">
        <div className="container mx-auto">{children}</div>
      </main>

      <footer className="bg-gray-900 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Text Analysis Tool</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
