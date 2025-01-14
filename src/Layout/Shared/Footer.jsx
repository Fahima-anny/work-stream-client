

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer mx-auto max-w-screen-xl text-base-content p-10">
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
  <form>
    <h6 className="footer-title text-blue-600 opacity-100">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-gray-500">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item w-1/2 md:w-auto" />
        <button className="hover:bg-[#000f38] duration-300 py-1 px-2 text-white bg-black join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
<footer className="footer footer-center bg-base-200 text-black p-4 border-t-2 border-t-gray-300">
  <aside>
    <p className="text-gray-600">Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;