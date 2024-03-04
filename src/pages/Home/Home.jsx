import classes from "./home.module.css";
import Titre from "../../components/Titre/Titre";
// import BlurSection from "../../components/BlurSection/BlurSection";
import { useForm } from "@mantine/form";
import {
  Progress,
  TextInput,
  Box,
  Group,
  Button,
  Textarea,
  Checkbox,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import emailJs from "@emailjs/browser";
import { Link } from "react-scroll";

const Home = () => {
  emailJs.init(import.meta.env.VITE_MAILJS_API_KEY);

  const form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const sendEmail = (values) => {
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
      })
      .catch(() => {
        showNotification({
          title: "Erreur",
          message: "Une erreur est survenue",
          color: "red",
          autoClose: 5000,
        });
      });
  };

  return (
    <div className={classes.root}>
      <div id="home" className={classes.firstSection}>
        <div className={classes.backgroundFirstSection}>
          <img src="/src/assets/alexia.png" />
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
            En reconvertion professionnel je suis en formation de développeuse
            Web/Web mobile au sein de Metz Numeric School. Après avoir réalisé
            des études dans l’art, le design et travaillé presque 3 ans dans la
            joaillerie en tant que sertisseuse, j’ai décidé de me réorienter. La
            réflexion et la logique manquant grandement dans mon domaine, c’est
            avec l’envie et le besoin d’apprendre que je me suis naturellement
            tournée vers le développement car j’ai toujours eu un fort attrait
            pour le monde du numerique.En reconvertion professionnel je suis en
            formation de développeuse Web/Web mobile au sein de Metz Numeric
            School. Après avoir réalisé des études dans l’art, le design et
            travaillé presque 3 ans dans l
          </p>
        </div>
        <img
          className={classes.pictApropos}
          src="/src/assets/alexiaPetite.png"
        ></img>
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
            <img src="../../src/assets/cv.png"></img>
            <a
              className={classes.alignCenter}
              href="fichier.html"
              download="../../src/assets/cv.png"
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
                  <Button>Acceder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundCalculator}></div>
              <div>
                <p className={classes.txtCard}>Calculette Js</p>
              </div>

              <div className={classes.alignCenter}>
                <a
                  href="https://calculette-js.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button>Acceder au projet</Button>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.backgroundColor}>
              <div className={classes.backgroundToDo}></div>
              <div>
                <p className={classes.txtCard}>Todo List JS</p>
              </div>
              <div className={classes.alignCenter}>
                <Button>Acceder au projet</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.blockProjets}>
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
                <a href="https://calculette-js.web.app/">
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
        </div>
        <div></div>
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
                      <Link href="/conf" target="_blank" inherit>
                        <p className={classes.link}>
                          Politique de confidentialité de ce site
                        </p>
                      </Link>
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
              <a href="https://github.com/alexialang">
                <img src="../../src/assets/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/alexia-lang/">
                <img src="../../src/assets/linkedin.png" />
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
