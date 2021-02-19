import React from 'react';

import Layout from '../components/Layout';

import intro from '../assets/images/intro4.jpg';
const IndexPage = () => (
  <Layout activeLink="home">
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src={intro}
            alt=""
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">CAFÉ FRESCO</span>
              <span className="section-heading-lower">Vale a pena beber</span>
            </h2>
            <p className="mb-3">
              Cada xícara de nosso café artesanal de qualidade começa com ingredientes 
              de origem local e escolhidos a dedo. Depois de experimentá-lo, nosso café 
              será uma adição maravilhosa à sua rotina matinal diária - nós garantimos isso!
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/#">
                Visite-nos hoje! 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section cta">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <div className="1cta-inner text-center rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">NOSSA PROMESSA</span>
                <span className="section-heading-lower">Para Você</span>
              </h2>
              <p className="mb-0">
                Quando entra na nossa loja para começar o seu dia, estamos empenhados em lhe oferecer
                um serviço simpático, um ambiente acolhedor e com excelentes produtos confeccionados 
                com ingredientes da mais alta qualidade.
              </p>

              <p className="mb-0">Se você não estiver satisfeito, por favor nos avise e faremos o possível para consertar as coisas!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
