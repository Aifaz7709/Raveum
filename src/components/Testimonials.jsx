import React from "react";

const Testimonials = () => {
  return (
    <section className="container py-vh-4 w-100 overflow-hidden" id="testimonials">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-5" data-aos="fade-right">
          <h3 className="py-3 border-top border-dark">Trusted by marketplaces & sellers</h3>
        </div>

        <div className="col-md-7" data-aos="fade-left">
          <blockquote>
            <div className="fs-4 my-3 fw-light pt-4 border-bottom pb-3">
              “wealthfront reduced our disputes by 80% and makes payouts predictable. Escrow flow is simple for both buyers and sellers.”
            </div>
            <img src="/img/webp/person11.webp" width="64" height="64" className="img-fluid rounded-circle me-3" alt="John Doe" />
            <span><span className="fw-bold">John Doe,</span> Marketplace Ops</span>
          </blockquote>
        </div>
      </div>

      {/* Grid testimonials */}
      <div className="row row-cols-1 row-cols-md-2 g-5 mt-4">
        {sampleCards.map((c, i) => (
          <div className="col" key={i} data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}>
            <div className="card p-4 shadow border-0">
              <div className="card-body">
                <div className="text-dark py-2 fs-3">★ ★ ★ ★ ☆</div>
                <blockquote className="blockquote"><p>{c.text}</p></blockquote>
                <div className="d-flex justify-content-between border-top pt-3">
                  <div><span className="h6 fw-5">{c.name}</span><br/><small className="text-muted">{c.title}</small></div>
                  <img src={c.img} width="48" height="48" className="rounded-circle" alt={c.name}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const sampleCards = [
  { name: "Jenny Matrix", title: "Seller, B2B Marketplace", text: "wealthfront guarantees faster and safer payouts.", img: "/img/webp/person3.webp" },
  { name: "Rustin C.", title: "Buyer", text: "As a frequent buyer I value escrow — it protects my purchases.", img: "/img/webp/person8.webp" },
  { name: "Lizzie S.", title: "Payments Lead", text: "Integration was straightforward and support was helpful.", img: "/img/webp/person18.webp" },
];

export default Testimonials;
