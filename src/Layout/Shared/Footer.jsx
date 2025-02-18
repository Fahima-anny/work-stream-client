

const Footer = () => {
    return (
        <div data-aos="fade-right" className="bg-base-200">
            <footer className="footer justify-between mx-auto max-w-screen-xl text-base-content px-10 md:px-3 xl:px-0 py-10">
            <div className="md:flex flex-col justify-end">
    <div className="pb-3">
    <a className="md:text-2xl rounded-tl-xl rounded-br-xl py-1 px-1 md:px-3 border-l-4 border-l-blue-600 border-b-4 border-b-blue-600  font-serif bg-black"><span className="font-semibold text-white">Work</span><span className="text-blue-600 font-black">Stream</span></a>
    </div>
    <h3 className="font-bold">Employee Management System</h3>
<p className=" text-gray-500 max-w-lg">We are committed to transforming employee management with innovative solutions, enhancing productivity, fostering collaboration, and driving workplace success.</p>

 </div>

  <nav>
    <h6 className="footer-title text-blue-600 opacity-100">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-blue-600 opacity-100">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-blue-600 opacity-100">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center bg-base-200 text-black p-4 border-t-2 border-t-gray-300">
  <aside>
    <p className="text-gray-600">Copyright © {new Date().getFullYear()} - All right reserved by WorkStream</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;