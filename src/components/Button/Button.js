// import './Button.css';
import styled from 'styled-components';
import styles from './Button.module.css';

const CustomButton = styled.button`
  //   background-color: #1f2937;
  background-color: ${(props) => (props.variant ? '#bada55' : '#1f2937')};
  color: white;
  padding: 16px 24px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  margin: 5px;

  &:hover {
    background-color: #888;
  }
`;

const Boutton = ({ variant, children }) => {
  //   const style = {
  //     background: '#1f2937',
  //     // soucis => que certains éléments sont pris en comptes, solution library extern. styled-component
  //   };

  //styled contient tous les styles css

  // PREMIER VERSION DE STYLE CSS
  //if (variant) {
  //     style.backgroundColor = '#bada55';
  //   }

  return (
    <CustomButton style={styles.button} variant={variant}>
      {children}
    </CustomButton>
    // <button
    //   className={variant ? 'Button Button--variant' : 'Button'}
    //   //   style={style} // Defini le style directement sur le bouton précis
    // >
    //   {children}
    // </button>
  );
};

export default Boutton;
