import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-vh-4 bg-gray-100 w-100 mt-5 overflow-hidden" id="howitworks">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="py-3 border-top border-dark">How wealthfront works — 3 simple steps</h3>
            <ol className="mt-4 lh-lg">
              <li><strong>Create order:</strong> Buyer initiates a purchase and funds are placed into escrow.</li>
              <li><strong>Deliver product/service:</strong> Seller fulfills the order and provides delivery proof.</li>
              <li><strong>Release funds:</strong> Buyer confirms receipt (or after auto-confirm window) and funds are released to seller.</li>
            </ol>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <div className="shadow ratio ratio-16x9 rounded bg-cover bp-center" style={{ backgroundImage: "url('/img/webp/people15.webp')" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
