const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl">
          Reading Aid
        </a>
        <div>
          <a href="#" className="px-4 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="px-4 hover:text-gray-300">
            About
          </a>
          <a href="#" className="px-4 hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
