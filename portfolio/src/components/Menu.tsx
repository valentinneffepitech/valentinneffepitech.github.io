import { BookText, BriefcaseBusiness, CloudUpload, House, MailPlus } from "lucide-react";

export const Menu = () => {
  return (
    <nav>
      <a href="#accueil" title="Revenir en haut">
        <House size={40}/>
      </a>
      <a href="#propos" title="A propos de moi">
        <BookText size={40}/>
      </a>
      <a href="#projects" title="Quelques projets réalisés">
        <BriefcaseBusiness size={40}/>
      </a>
      <a href="#links" title="Liens utils">
        <CloudUpload size={40}/>
      </a>
      <a href="#contact" title="Laissez-moi un message">
        <MailPlus size={40}/>
      </a>
    </nav>
  );
};
