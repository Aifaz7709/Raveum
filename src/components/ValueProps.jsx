import React from "react";

const ValueProps = () => {
  return (
    <section className="py-vh-5 w-100 overflow-hidden" id="services">
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div className="col-lg-8" data-aos="fade-down">
            <h2 className="display-6">Trusted escrow, simplified — built for buyers & sellers</h2>
          </div>
        </div>

        <div className="row d-flex align-items-start mt-4">
          <Feature
            index="01"
            title="Escrow-secured payments"
            text="Buyer funds are held securely until delivery confirmation. Sellers get payment certainty without upfront chargebacks."
            delay={200}
          />
          <Feature
            index="02"
            title="KYC & fraud mitigation"
            text="Optional identity checks and transaction monitoring reduce fraud and increase trust across trades."
            delay={400}
          />
          <Feature
            index="03"
            title="Instant settlement options"
            text="When both parties confirm, funds are released immediately. Flexible payout rails support bank transfers and wallets."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

const Feature = ({ index, title, text, delay }) => (
  <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
    <span className="h5 fw-lighter">{index}.</span>
    <h3 className="py-3 border-top border-dark">{title}</h3>
    <p>{text}</p>
    <a href="#howitworks" className="link-fancy">Learn more</a>
  </div>
);

export default ValueProps;
