import { ScrollUp } from "../components/ScrollUp";
import Corgi from "../assets/corgi.svg";

export const Propos = () => {
  return (
    <section id="propos">
      <ScrollUp selecteur="#accueil" content="Accueil" />
      <h3 className="text-white oxianum">Ma passion :</h3>
      <h4 className="text-white oxianum">les nouveaux defis</h4>
      <div>
        <img src={Corgi} alt="Coding Dog" />
        <p>
          C'est après plusieurs années à travailler dans le domaine de la
          restauration que j'ai entrepris une reconversion professionnelle dans
          le <span>développement informatique</span>. J'ai acquis de solides
          compétences en développement Web lors de mes études à{" "}
          <span>EPITECH Strasbourg</span> et c'est après ces deux années que
          désormais je cherche aujourd'hui à relever de nouveaux challenges.
          <br />
          <br />
          Au cours de cette période j'ai également été apprenti au sein de
          l'entreprise <span>GRAD</span>, spécialisée dans les terasses à
          clipser, afin de permettre le développement des nouvelles
          fonctionnalités sur les différents sites <span>Wordpress</span> de la
          marque.
          <br />
          <br />
          Je possède aujourd'hui de nombreuses cordes à mon arc parmis
          lesquelles on peut citer les langages tels que{" "}
          <span>PHP, Javascript, Python, Java ou encore Go</span>. J'y ai
          également appris à maîtriser nombre de frameworks (<span>Laravel, Symfony, React, Django, Spring Boot ...</span>)
          ainsi que des outils de déploiement tel que <span>Docker</span> par
          exemple.
        </p>
      </div>
    </section>
  );
};
