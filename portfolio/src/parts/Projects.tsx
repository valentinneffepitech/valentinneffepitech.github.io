import { ScrollUp } from "../components/ScrollUp";

import PreviouslyOn from "../assets/projects/movies.png";
import MyCinema from "../assets/projects/mycinema.png";
import Irc from "../assets/projects/irc.png";
import MyApp from "../assets/projects/myapp.png";
import Grad from "../assets/projects/grad.png";
import Mybot from "../assets/projects/Mybot.png";

import ReactImg from "../assets/technos/React.png";
import NodeImg from "../assets/technos/NodeJS.png";
import SQLImg from "../assets/technos/SQL.png";
import PHPImg from "../assets/technos/Php.png";
import WebsocketImg from "../assets/technos/Websocket.png";
import MongoImg from "../assets/technos/Mongo.png";
import ExpoImg from "../assets/technos/Expo.png";
import WordpressImg from "../assets/technos/Wordpress.png";
import WoocommerceImg from "../assets/technos/Woocommerce.png";
import GeminiImg from "../assets/technos/Gemini.png";

export const Projects = () => {
  const projectList = [
    {
      title: "Previously On",
      image: PreviouslyOn,
      technologies: [ReactImg, NodeImg],
      description: "Renseignez les films ou les épisodes de séries que vous avez vu"
    },
    {
      title: "My cinema",
      image: MyCinema,
      technologies: [PHPImg, SQLImg],
      description: "Ce mini-site permet de simuler la gestion des salles et des séances d'un cinéma"
    },
    {
      title: "My irc",
      image: Irc,
      technologies: [WebsocketImg, MongoImg],
      description: "Discutez avec tout le monde, tout le temps en temps réel; le tout avec des raccourcis intégrés dans le chat"
    },
    {
      title: "Wiki-movie",
      image: MyApp,
      technologies: [ReactImg, ExpoImg],
      description: "Les informations sur tous les films et toutes les séries à portée de main dans cette application mobile"
    },
    {
      title: "grad-system.com",
      image: Grad,
      technologies: [WordpressImg, WoocommerceImg],
      description: "J'ai eu l'occasion de développer un bon nombre de fonctionnalités au sein des différents sites de la marque"
    },
    {
      title: "cat gpt",
      image: Mybot,
      technologies: [GeminiImg, NodeImg],
      description: "Vous recherchez un animal de compagnie mais n'êtes pas sûr ? Posez toutes vos questions ! (Feat. Gemini)"
    }
  ];

  return (
    <section id="projects">
      <ScrollUp selecteur="#propos" content="A propos" />
      <h3 className="text-white oxianum">Mes projets :</h3>
      <h4 className="text-white oxianum">
        Des technologies diverses et variées
      </h4>
      <div>
        {projectList.map((project, index) =>
          <div className="projectCard" key={index}>
            <h3>
              {project.title}
            </h3>
            <p>
              {project.description}
            </p>
            <img src={project.image} alt={project.title}/>
            <div className="projectCard_technos">
              {project.technologies.map(techno => <img src={techno} />)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
