import styles from "./home.module.css";
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
    <div className={styles.root}>
      <div id="home" className={styles.firstSection}>
        <div className={styles.backgroundFirstSection}>
          <img src="/src/assets/alexia.png" />
          <div className={styles.h1}>
            <div className={styles.fixedContainer}>
              <Titre contenu="    <h1> LANG  Alexia Developpeuse Web Junior </h1>" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aPropos} id="aPropos">
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
            pour le monde du numerique.
          </p>
        </div>
        <img
          className={styles.pictApropos}
          src="/src/assets/alexiaPetite.png"
        ></img>
      </div>
      <div id="competence" className={styles.skills}>
        <h2>Mes compétences</h2>

        <div className={styles.skillsBlock}>
          <div>
            <h3>HTML</h3>
            <Progress
              className={styles.bar}
              color="rgba(255, 175, 105, 1)"
              value={90}
              animated
            />{" "}
            <br />
            <h3>CSS</h3>
            <Progress
              className={styles.bar}
              color="rgba(255, 175, 105, 1)"
              value={80}
              animated
            />{" "}
            <br />
            <h3>Javascript</h3>
            <Progress
              className={styles.bar}
              color="rgba(255, 175, 105, 1)"
              value={20}
              animated
            />{" "}
            <br />
            <h3>React</h3>
            <Progress
              className={styles.bar}
              color="rgba(255, 175, 105, 1)"
              value={35}
              animated
            />{" "}
            <br />
            <h3>PHP</h3>
            <Progress
              className={styles.bar}
              color="rgba(255, 175, 105, 1)"
              value={10}
              animated
            />{" "}
            <br />
            <h3>SQL</h3>
            <Progress
              className={styles.bar}
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
            <a
              className={styles.alignCenter}
              href="fichier.html"
              download="../../src/assets/cv.png"
            >
              <div>
                <Button variant="filled" color="orange">
                  Télécharger mon cv
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="projet" className={styles.projets}>
        <h2>Mes projets</h2>
        <div className={styles.blockProjets}>
          <div className={styles.divBlockProjets}>
            <div className={styles.backgroundColor}>
              <div className={styles.backgroundFirstImage}></div>
              <p className={styles.txtCard}>
                Réalisation d’un site avec Vite+React fait durant un stage de
                deux semaines du 21/11/2023 au 01/12/2023{" "}
              </p>

              <div className={styles.alignCenter}>
                <Button>Acceder au projet</Button>
              </div>
            </div>
          </div>
          <div className={styles.divBlockProjets}>
            <div className={styles.backgroundColor}>
              <div className={styles.backgroundSecondImage}></div>
              <div>
                <p className={styles.txtCard}>
                  Calculette Js en cours de réalisation
                </p>
              </div>

              <div className={styles.alignCenter}>
                <Button>Acceder au projet</Button>
              </div>
            </div>
          </div>
          <div className={styles.divBlockProjets}>
            <div className={styles.backgroundColor}>
              <div className={styles.backgroundLastImage}></div>
              <div>
                <p className={styles.txtCard}>
                  App Web meteo en cours de réalisation
                </p>
              </div>
              <div className={styles.alignCenter}>
                <Button>Acceder au projet</Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divBlockProjets}></div>
      </div>
      {/* CONTACT */}
      <div className={styles.contact} id="contact">
        <h2>Me contacter</h2>
        <div className={styles.divForm}>
          <div>
            <p>Remplissez le formulaire ci dessous pour me contacter :</p>
          </div>
          <div>
            <Box>
              <form className={styles.form} onSubmit={form.onSubmit(sendEmail)}>
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
                  className={styles.marginTop}
                  defaultChecked
                  label={
                    <>
                      En cochant cette case, j’accepte la
                      <Anchor href="/conf" target="_blank" inherit>
                        Politique de confidentialité de ce site
                      </Anchor>
                    </>
                  }
                />

                <Group justify="center" mt="md">
                  <Button type="submit" color="" className={styles.marginTop}>
                    Envoyer
                  </Button>
                </Group>
              </form>
            </Box>
          </div>
        </div>
      </div>
      <footer>coucou</footer>
    </div>
  );
};

export { Home };
