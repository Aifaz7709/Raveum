import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container small border-top">
        <div className="row py-5 d-flex justify-content-between">
          <div className="col-12 col-lg-6 col-xl-3 border-end p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-layers-half" viewBox="0 0 16 16">
              <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"/>
            </svg>

            <address className="text-secondary mt-3">
              <strong>wealthfront</strong><br/>
              1355 Market St, Suite 900<br/>
              San Francisco, CA 94103<br/>
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>

          <FooterLinks />
        </div>

        <div className="container text-center py-3 small">
          © {new Date().getFullYear()} wealthfront — Crafted to house investing
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = () => (
  <>
    <div className="col-12 col-lg-6 col-xl-3 border-end p-4">
      <h3 className="h6 mb-3">Investing</h3>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">About</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Careers</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Blog</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">About</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Careers</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Blog</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">About</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Careers</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Blog</a></li>
     
      </ul>
    </div>

    <div className="col-12 col-lg-6 col-xl-3 border-end p-4">
      <h3 className="h6 mb-3">Save</h3>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Escrow</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Payouts</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Integrations</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Escrow</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Payouts</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Integrations</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Escrow</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Payouts</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Integrations</a></li>
      </ul>
    </div>

    <div className="col-12 col-lg-6 col-xl-3 p-4">
      <h3 className="h6 mb-3">About</h3>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Docs</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Support</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Docs</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Support</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Docs</a></li>
        <li className="nav-item"><a className="nav-link link-secondary ps-0" href="#">Support</a></li>
      </ul>
    </div>
  </>
);

export default Footer;
