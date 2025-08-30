

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-600">

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Bett</h3>
            <p className="text-gray-400">
              Full-Stack Developer based in Kenya,specializing in web and
              software development.
            </p>
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Contact</h3>
            <p className="text-gray-400">
              Have a question or want to work together? Reach out!
            </p>
          </div>
        </div>

       <div
  className="border-t border-gray-600 pt-4 flex justify-center items-center"
>
  <p className="text-gray-400 text-center">
    &copy; {new Date().getFullYear()} Hillary. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
