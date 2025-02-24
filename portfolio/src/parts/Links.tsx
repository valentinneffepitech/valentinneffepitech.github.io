import { FileUser, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export const Links = () => {
  const [iconSize, seticonSize] = useState(75);

  useEffect(()=>{
    const { innerWidth: width} = window;
    if(width >= 768){
      seticonSize(100);
    }
  }, []);

  return (
    <section id="links">
      <h3>Mes réseaux</h3>
      <div>
        <a href="https://github.com/valentinneffepitech/Portfolio" title="Voir encore plus de projets" target="_blank">
          <Github size={iconSize} />
        </a>
        <a href="https://www.linkedin.com/in/valentin-neff-10878a1a2/" title="Rendez-vous sur Linkedin" target="_blank">
          <Linkedin size={iconSize} />
        </a>
        <a href="CV_Valentin_Neff.pdf" title="Télécharger mon CV" download={true}>
          <FileUser size={iconSize} />
        </a>
      </div>
    </section>
  );
};
