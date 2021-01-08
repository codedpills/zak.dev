import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="services-content text-center">
              <p>
                <i class="bi-stack"></i>
              </p>
              <h5 className="text-uppercase">Design + Development</h5>
              <p>
                Clean, modern designs - optimized for performance, search
                engines and convert users to customers.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-content text-center">
              <p>
                <i class="bi-cart"></i>
              </p>
              <h5 className="text-uppercase">Ecommerce</h5>
              <p>
                Integration of ecommerce platforms, payment gateways, custom
                product templates, and more.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-content text-center">
              <p>
                <i class="bi-list-check"></i>
              </p>
              <h5 className="text-uppercase">Website audits</h5>
              <p>
                Looking to improve your website performance, SEO, or user
                experience? Request a free site audit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
