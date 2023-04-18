import Boutton from '../Button/Button';
import styled from 'styled-components';

const Card = () => {
  const CustomCard = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 200px;
    padding: 16px;

    @media (max-width: 800px) {
      width: 100%;
    } ;
  `;

  return (
    <CustomCard>
      <h1>Apprendre react</h1>
      <Boutton>supprimer</Boutton>
      <Boutton variant={true}>add</Boutton>
      {/* <Boutton label="supprimer" /> */}
    </CustomCard>
  );
};

export default Card;
