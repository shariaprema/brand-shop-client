import logo from '../../../assets/brand/logo.png'

const Footer = () => {
    return (
        <div>
 <footer className="footer md:grid grid-cols-2 lg:grid-cols-3 justify-center p-10 bg-neutral text-neutral-content max-w-screen-xl mx-auto">
  <aside>
  <img src={logo} className="w-16 h-16" alt="" />
  <a
    href="#"
    className="mr-4 block font-serif cursor-pointer  font-bold text-xl leading-rela\v]v ]]]xed text-inherit antialiased">
    Pixel Tech
    </a>

    <p>Providing reliable tech since 2006</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  
</div>
    );
};

export default Footer;