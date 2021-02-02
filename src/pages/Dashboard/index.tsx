import React from 'react';

import logoImg from '../../assets/logo_black.svg';
import productImg from '../../assets/products/01/01.jpeg';

import { Title, Products } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="E&N" />
      <Title>Nossas sugestões de presentes.</Title>

      <Products>
        <a
          href="https://www.amazon.com.br/Mop-Girat%C3%B3rio-Flash-Limp-Verde/dp/B0789SGBT3/ref=sr_1_1?adgrpid=101156293195&dchild=1&gclid=CjwKCAiAuoqABhAsEiwAdSkVVOixVS0gknp33zvgAsxTRUEJa-CTW6FYoBVS2hjSB4LFcX7eJ8acaRoCKrwQAvD_BwE&hvadid=431506370091&hvdev=c&hvlocphy=1001506&hvnetw=g&hvqmt=e&hvrand=10770876123947909791&hvtargid=kwd-347896865981&hydadcr=5628_11235155&keywords=mop+girat%C3%B3rio+inox&qid=1610810536&sr=8-1&tag=hydrbrgk-20"
          target="_blank"
          rel="noreferrer"
        >
          <img src={productImg} alt="Mop de Alumínio" />
          <div>
            <strong>Mop de Alumínio</strong>
            <p>Clique para acessar a referência</p>
          </div>
          <strong>R$128,90</strong>
        </a>
      </Products>
    </>
  );
};

export default Dashboard;
