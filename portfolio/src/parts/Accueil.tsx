import logo from '../assets/mylogo.svg';
import { ScrollDown } from '../components/ScrollDown';
import Tasse from '../assets/ambiance.svg'

export const Accueil = () => {
  return (
    <section
      id="accueil"
      className="flex flex-col items-center justify-center gap-6 md:gap-10 lg:flex-row lg:justify-between lg:gap-0"
    >
      <img src={logo} alt="Logo" className="w-[40%] md:w-[25%] lg:w-[15%]" />
      <div className="text-center flex flex-col gap-4 lg:gap-8">
        <h1 className="uppercase text-3xl">Valentin NEFF</h1>
        <h2 className="uppercase text-2xl">Developpeur Web</h2>
      </div>
      <img
        src={Tasse}
        alt="Un moment de détente avec une tasse fumante de café"
        className="hidden md:block md:w-[30%] lg:w-[20%]"
      />
      <ScrollDown selecteur="#propos" content='Par ici'/>
    </section>
  );
};
