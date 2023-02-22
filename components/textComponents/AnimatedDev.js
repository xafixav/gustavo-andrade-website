import TypeAnimation from 'react-type-animation';

const AnimatedDev = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['Desenvolvedor Front-End', 10000, 'Desenvolvedor Back-End', 10000, 'Desenvolvedor Full-Stack', 10000]}
      wrapper="h4"
      repeat={Infinity}
    />
  );
};

export default AnimatedDev;