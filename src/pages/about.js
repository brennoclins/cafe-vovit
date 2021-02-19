import React from 'react';

import Layout from '../components/Layout';

import about from '../assets/images/about1.jpg';
const IndexPage = () => (
  <Layout activeLink="about">
    <section className="page-section about-heading">
      <div className="container">
        <img
          className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          src={about}
          alt=""
        />
        <div className="about-heading-content">
          <div className="row">
            <div className="col-xl-9 col-lg-10 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">
                    CAFÉ FORTE, RAÍZES FORTES
                  </span>
                  <span className="section-heading-lower">SOBRE O NOSSO CAFÉ</span>
                </h2>
                <p>
                  Fundado em 1897 pela Vovit, nosso estabelecimento tem servido um rico café 
                  proveniente de agricultores artesanais em várias regiões da América do Sul e Central. 
                  Nos dedicamos a viajar pelo mundo, encontrar o melhor café e trazer de volta para você 
                  aqui em nosso café.

                </p>
                <p className="mb-0">
                  Nós garantimos que você vai se apaixonar por nossas misturas desde o momento 
                  em que entrar até que termine seu último gole. Junte-se a nós no seu dia a dia, um passeio 
                  com os amigos ou simplesmente para desfrutar de uns momentos a sós. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
