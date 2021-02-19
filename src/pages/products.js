import React from 'react';

import Layout from '../components/Layout';

import product1 from '../assets/images/padaria.jpg';
import padariaCozinha from '../assets/images/padaria-cozinha.jpg';
import graosCafe from '../assets/images/graos.jpg';

const IndexPage = () => (
  <Layout activeLink="products">
    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Minsturando à perfeição
                </span>
                <span className="section-heading-lower">
                  Cafés &amp; Chá
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={product1}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Temos orgulho do nosso trabalho e isso fica evidente. Cada vez que nos pede uma bebida, 
                garantimos que será uma experiência que vale a pena viver. Quer seja o nosso mundialmente 
                famoso Cappuccino da Roça, um refrescante chá de ervas gelado ou algo tão simples como uma 
                xícara de café preto de origem especial, você voltará com amigos e familiares para mais. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex mr-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  DELICIOSOS DELEITES, BOAS COMIDAS
                </span>
                <span className="section-heading-lower">
                  Padaria &amp; Cozinha Brasileira
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={padariaCozinha}
            alt=""
          />
          <div className="product-item-description d-flex ml-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Nosso cardápio sazonal oferece lanches deliciosos, assados e até refeições completas, 
                perfeitas para o café da manhã ou almoço. Sempre que possível, compramos nossos ingredientes 
                em fazendas orgânicas locais, juntamente com fornecedores premium de produtos especiais. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section">
      <div className="container">
        <div className="product-item">
          <div className="product-item-title d-flex">
            <div className="bg-faded p-5 d-flex ml-auto rounded">
              <h2 className="section-heading mb-0">
                <span className="section-heading-upper">
                  Vindo do Mundo Inteiro
                </span>
                <span className="section-heading-lower">
                  Mituras Especiais
                </span>
              </h2>
            </div>
          </div>
          <img
            className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
            src={graosCafe}
            alt=""
          />
          <div className="product-item-description d-flex mr-auto">
            <div className="bg-faded p-5 rounded">
              <p className="mb-0">
                Viajar pelo mundo em busca do café da melhor qualidade é motivo de orgulho. 
                Ao nos visitar, você sempre encontrará novas misturas de varios locais do mundo. 
                Principalmente da América Central e do Sul. 
              </p>
              <br/>
              <p className="mb-0">Vendemos nossas misturas em grandes quantidades ou a granel. Visite-nos pessoalmente para obter mais detalhes. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
