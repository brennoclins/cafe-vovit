import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout activeLink="store">
    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="cta-inner text-center rounded">
              <h2 className="section-heading mb-5">
                <span className="section-heading-upper">Nossos Horários</span>
                <br/>
                <span className="section-heading-lower">Estamos Aberto</span>
              </h2>
              
              <p className="address mb-5">
                <em>
                  <strong>Rua Das Margaridas Encantadas, 2211</strong>
                  <br />
                  Olinda, Pernambuco
                </em>
              </p>
              <p className="mb-0">
                <small>
                  <em>Ligue para nós</em>
                </small>
                <br />
                (81) 9 9999-8888
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
