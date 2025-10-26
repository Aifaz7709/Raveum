import React from "react";

const Gallery = () => {
  return (
    <section className="position-relative overflow-hidden w-100 bg-light" id="gallery">
      <div className="container-fluid">
        <div className="row overflow-scroll">
          <div className="col-12">
            <div className="row vw-100 px-0 py-vh-5 d-flex align-items-center scrollx">
              <div className="col-md-2" data-aos="fade-up"><img src="/img/webp/interior37.webp" className="rounded shadow img-fluid" alt="gallery" /></div>
              <div className="col-md-2" data-aos="fade-up" data-aos-delay="200"><img src="/img/webp/people1.webp" className="img-fluid rounded shadow" alt="gallery" /></div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="400"><img src="/img/webp/people2.webp" className="img-fluid rounded shadow" alt="gallery"/></div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="600"><img src="/img/webp/interior29.webp" className="img-fluid rounded shadow" alt="gallery" /></div>
              <div className="col-md-2" data-aos="fade-up" data-aos-delay="800"><img src="/img/webp/people23.webp" className="rounded shadow img-fluid" alt="gallery" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
