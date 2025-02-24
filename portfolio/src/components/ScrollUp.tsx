import Chevrons from "../assets/chevrons.png";

export const ScrollUp = ({ selecteur, content }: { selecteur: string, content:string }) => {
  return (
    <a href={selecteur}>
      <div
        className="scrollUp"
      >
        <p className="text-[1.3rem] text-center mb-2 text-white hidden lg:block oxianum">
          {content}
        </p>
        <img
          src={Chevrons}
          className="w-[100%] mx-auto lg:w-[60%] upanddown"
          alt="chevron vers le haut"
        />
      </div>
    </a>
  );
};
