import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-white shadow-inner rounded-t-xl p-10">
    <div className="container mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
        <Image src="/logo/logo.png" alt="Company Logo" width={100} height={100}/>
        <p className="text-gray-600">
          Transforming ideas into digital solutions with innovative technologies and creative strategies.
        </p>
      </div>
      <div className="w-full sm:w-2/3 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-gray-800 font-bold mb-3">Quick Links</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h5 className="text-gray-800 font-bold mb-3">Services</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Web Development</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Mobile Apps</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">UI/UX Design</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Consulting</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h5 className="text-gray-800 font-bold mb-3">Contact Us</h5>
          <p className="text-gray-600">123 Digital Street, Suite 456<br />City, Country</p>
          <p className="text-gray-600 mt-2">Email: info@example.com</p>
          <p className="text-gray-600">Phone: +123 456 7890</p>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} MSNS-DEV® | HH_STUDIOS™ |  All rights reserved.
    </div>
  </footer>
);
}