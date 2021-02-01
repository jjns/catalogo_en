import React from 'react';

import logoImg from '../../assets/logo_black.svg';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="E&N" />
      <Title>Nossas sugestões de presentes.</Title>
    </>
  );
};

export default Dashboard;
