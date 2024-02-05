import classes from "./home.module.css";
import { Progress, Button } from "@mantine/core";
import Titre from "../../components/Titre/Titre";
import BlurSection from "../../components/BlurSection/BlurSection";

const Home = () => {
  const blurClass = BlurSection();

  return (
    <div className={classes.root}>
      <div id="blurSection" className={blurClass}>
        <div className={classes.firstSection}>
          <div className={classes.backgroundFirstSection}>
            <img src="/src/assets/alexia.png" />
            <div className={classes.h1}>
              <div className={classes.fixedContainer}>
                <Titre contenu="    <h1> LANG  Alexia Developpeuse Web Junior </h1>" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.aPropos}>
        <div>
          <h2>A propos</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, nesciunt totam? Ex officiis voluptas fuga explicabo
            velit. Sapiente commodi exercitationem distinctio praesentium,
            accusamus qui consectetur voluptatum unde omnis quo quis. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Id deleniti quos
            aliquam porro! Ad, adipisci? Sint, expedita! Soluta, ratione ullam!
            Numquam laudantium non accusamus nostrum necessitatibus
            consequuntur, reiciendis quod at! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate, ea sunt! Saepe ullam enim
            porro exercitationem delectus magni consectetur repellendus quasi
            temporibus modi error rem officiis, dignissimos numquam magnam
            atque.
          </p>
        </div>
        <img
          className={classes.pictApropos}
          src="/src/assets/alexiaPetite.png"
        ></img>
      </div>
      <div className={classes.skills}>
        <h2>Mes compétences</h2>
        <p>
          Lorem error excepturi eaque distincg elit. nesciunt culpa ullam.
          Dolore earum ratione id.
        </p>
        <div className={classes.skillsBlock}>
          <div>
            <h3>HTML</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={90}
              animated
            />{" "}
            <br />
            <h3>CSS</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={80}
              animated
            />{" "}
            <br />
            <h3>Javascript</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={10}
              animated
            />{" "}
            <br />
            <h3>React</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={30}
              animated
            />{" "}
            <br />
            <h3>PHP</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={10}
              animated
            />{" "}
            <br />
            <h3>SQL</h3>
            <Progress
              className={classes.bar}
              color="rgba(255, 175, 105, 1)"
              value={50}
              animated
            />{" "}
            <br />
            <h3>Figma</h3>
            <Progress color="rgba(255, 175, 105, 1)" value={60} animated />{" "}
            <br />
          </div>
          <div>
            <img src="../../src/assets/cv.png"></img>
            <a href="fichier.html" download="../../src/assets/cv.png">
              <Button variant="filled" color="orange">
                Télécharger mon cv
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.projets}>
        <h2>Mes projets</h2>
        <div className={classes.blockProjets}>
          <div className={classes.divBlockProjets}>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundImage}></div>
              <p>coucou</p>
            </div>
          </div>
          <div className={classes.divBlockProjets}>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundImage}></div>
              <p>coucou</p>{" "}
            </div>
          </div>
          <div className={classes.divBlockProjets}>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundImage}></div>
              <p>coucou</p>{" "}
            </div>
          </div>
        </div>
        <div className={classes.divBlockProjets}></div>
      </div>
      <footer>coucou</footer>
    </div>
  );
};

export { Home };
