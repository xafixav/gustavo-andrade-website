import TypeAnimation from 'react-type-animation';

const AnimatedDev = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['Desenvolvedor FrontEnd', 10000, 'Desenvolvedor BackEnd', 10000, 'Desenvolvedor FullStack', 10000]}
      wrapper="h4"
      repeat={Infinity}
    />
  );
};

export default AnimatedDev;