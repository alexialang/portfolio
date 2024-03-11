import classes from "./home.module.css";
import Titre from "../../components/Titre/Titre";
// import BlurSection from "../../components/BlurSection/BlurSection";
import { useForm } from "@mantine/form";
import alexia from "../../assets/alexia.png";
import alexiaPetite from "../../assets/alexiaPetite.png";
import cv from "../../assets/cv.png";
import CV_LANG_Alexia from "../../assets/CV_LANG_Alexia.pdf";
import github_black from "../../assets/github_black.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import {
  Progress,
  TextInput,
  Box,
  Group,
  Button,
  Textarea,
  Checkbox,
  Anchor,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import emailJs from "@emailjs/browser";

const Home = () => {
  emailJs.init(import.meta.env.VITE_MAILJS_API_KEY);

  const form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const sendEmail = (values) => {
    return new Promise((resolve, reject) => {
      emailJs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            message: values.message,
            phoneNumber: values.phoneNumber,
          }
        )
        .then(() => {
          showNotification({
            title: "Email envoyé",
            message: "Votre email a bien été envoyé",
            color: "green",
            autoClose: 5000,
          });
          resolve();
        })
        .catch((error) => {
          showNotification({
            title: "Erreur",
            message: "Une erreur est survenue",
            color: "red",
            autoClose: 5000,
          });
          reject(error);
        });
    });
  };
  return (
    <div className={classes.root}>
      <div id="home" className={classes.firstSection}>
        <div className={classes.backgroundFirstSection}>
          <img src={alexia} />
          <div className={classes.h1}>
            <div className={classes.fixedContainer}>
              <Titre contenu="    <h1> LANG  Alexia Developpeuse Web Junior </h1>" />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.aPropos} id="aPropos">
        <div>
          <h2>A propos</h2>
          <p>
            En reconversion professionnelle, je me forme actuellement en tant
            que développeuse Web/Web mobile au sein de Metz Numeric School.
            Après avoir exploré le domaine de l’art et du design, ainsi que
            travaillé pendant près de trois ans dans le secteur de la joaillerie
            en tant que sertisseuse, j’ai ressenti le besoin de pivoter ma
            carrière. La créativité et le sens esthétique acquis dans mes études
            et expériences précédentes se marient désormais avec ma passion pour
            la logique et la résolution de problèmes offerte par le monde de la
            programmation. <br />
            <br />
            Ce changement n’est pas seulement une décision professionnelle, mais
            aussi une réponse à un appel intérieur profond. Animée par la
            curiosité et la soif d’apprendre, je me suis naturellement orientée
            vers le développement web, un domaine qui incarne l’avenir numérique
            et offre un potentiel d’innovation infini. <br />
            <br />
            Aujourd’hui, je suis à la recherche d’opportunités de stage et
            d’alternance pour l’année à venir. Mon objectif est de mettre en
            pratique mes compétences fraîchement acquises tout en continuant à
            élargir mes connaissances et à contribuer de manière significative à
            des projets concrets. <br />
            <br />
            Je suis convaincue que chaque défi est une opportunité
            d’apprentissage, et je suis prête à m’investir pleinement dans des
            missions qui me permettront de progresser et d’évoluer en tant que
            développeuse web junior. Je suis ouverte à toutes les opportunités
            de collaboration dans le domaine du développement web et je suis
            impatiente de contribuer à des projets innovants et stimulants.
          </p>
        </div>
        <img className={classes.pictApropos} src={alexiaPetite}></img>
      </div>
      <div id="competence" className={classes.skills}>
        <h2>Mes compétences</h2>

        <div className={classes.skillsBlock}>
          <div className={classes.progressBlock}>
            <h3>HTML</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={90}
              animated
            />{" "}
            <br />
            <h3>CSS</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={80}
              animated
            />{" "}
            <br />
            <h3>Javascript</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={40}
              animated
            />{" "}
            <br />
            <h3>React</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={45}
              animated
            />{" "}
            <br />
            <h3>PHP</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={40}
              animated
            />{" "}
            <br />
            <h3>Python</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={50}
              animated
            />{" "}
            <br />
            <h3>SQL</h3>
            <Progress
              className={classes.bar}
              color="rgb(201, 197, 175)"
              value={70}
              animated
            />{" "}
            <br />
          </div>
          <div>
            <img src={cv} alt="cv"></img>
            <a
              className={classes.alignCenter}
              href={CV_LANG_Alexia}
              download="CV_LANG_Alexia"
            >
              <div>
                <Button variant="filled">Télécharger mon cv</Button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="projet" className={classes.projets}>
        <h2>Mes projets</h2>
        <div className={classes.blockProjets}>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundGpadi}></div>
              <p className={classes.txtCard}>
                Réalisation d’un site avec Vite+React fait durant un stage de
                deux semaines{" "}
              </p>

              <div className={classes.alignCenter}>
                <a
                  href="https://test1-a8348.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button>Accéder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundCalculator}></div>
              <div>
                <p className={classes.txtCard}>Calculette HTML,CSS, JS</p>
              </div>

              <div className={classes.alignCenter}>
                <a
                  href="https://calculette-js.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button>Accéder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundToDo}></div>
              <div>
                <p className={classes.txtCard}>Todo List HTML,CSS, JS</p>
              </div>
              <div className={classes.alignCenter}>
                <a
                  href="https://todolist-lang-alexia.firebaseapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button>Accéder au projet</Button>
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className={classes.git}>
          <h3>Voir plus </h3>
          <div className={classes.boxGit}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/alexialang"
            >
              <img src={github_black} />
            </a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/alexialang"
          >
            <p> Accéder à mon github</p>
          </a>
        </div>
        {/* <div className={classes.blockProjets}>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundCloud}></div>
              <p className={classes.txtCard}>
                Réalisation d’un site avec Vite+React fait durant un stage de
                deux semaines
              </p>

              <div className={classes.alignCenter}>
                <a href="https://test1-a8348.web.app/">
                  <Button>Acceder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundSecondImage}></div>
              <div>
                <p className={classes.txtCard}>
                  Calculette Js en cours de réalisation
                </p>
              </div>

              <div className={classes.alignCenter}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/alexialang"
                >
                  <Button>Acceder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundLastImage}></div>
              <div>
                <p className={classes.txtCard}>
                  App Web meteo en cours de réalisation
                </p>
              </div>
              <div className={classes.alignCenter}>
                <Button>Acceder au projet</Button>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      {/* CONTACT */}
      <div className={classes.contact} id="contact">
        <h2 className={classes.h2contact}>Me contacter</h2>
        <div className={classes.divForm}>
          <div>
            <p className={classes.pcontact}>
              Remplissez le formulaire ci dessous pour me contacter :
            </p>
          </div>
          <div>
            <Box>
              <form
                className={classes.form}
                onSubmit={form.onSubmit(sendEmail)}
              >
                <h2>Formulaire de contact</h2>
                <TextInput
                  withAsterisk
                  label="Nom"
                  {...form.getInputProps("lastName")}
                  required
                />
                <TextInput
                  withAsterisk
                  label="Prénom"
                  {...form.getInputProps("firstName")}
                  required
                />
                <TextInput
                  withAsterisk
                  label="E-mail"
                  {...form.getInputProps("email")}
                  required
                />
                <TextInput
                  withAsterisk
                  label="Numéro de téléphone"
                  {...form.getInputProps("phoneNumber")}
                  required
                />
                <Textarea
                  label="Message"
                  autosize
                  minRows={2}
                  {...form.getInputProps("message")}
                  required
                />

                <Checkbox
                  className={classes.row}
                  defaultChecked
                  label={
                    <>
                      En cochant cette case, j’accepte la
                      <Anchor href="/conf" target="_blank" inherit>
                        <p className={classes.link}>
                          Politique de confidentialité de ce site
                        </p>
                      </Anchor>
                    </>
                  }
                />

                <Group justify="center" mt="md">
                  <Button type="submit" color="" className={classes.marginTop}>
                    Envoyer
                  </Button>
                </Group>
              </form>
            </Box>
          </div>
        </div>
      </div>
      <footer>
        <div className={classes.divFooter}>
          <h3>Mes coordonées</h3>
          <ul>
            <li>+33646613228</li> <li>alexialang2@gmail.com</li>
            <li className={classes.alignItem}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alexialang"
              >
                <img src={github} alt="github" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alexia-lang/"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export { Home };
