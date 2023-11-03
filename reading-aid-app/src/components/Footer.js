const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Reading Aid. All rights not reserved
          at all. Remember to edit this footer..
        </p>
      </div>
    </footer>
  );
};

export default Footer;
