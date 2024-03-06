import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import classes from "./shell.module.css";

export const Shell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { mobile: !opened, desktop: true },
      }}
      classNames={{ main: classes.main }}
    >
      <AppShell.Header>
        <Header toggle={toggle} opened={opened} />
      </AppShell.Header>
      <AppShell.Navbar>
        <MobileMenu onClose={() => toggle(false)} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Main />
      </AppShell.Main>
    </AppShell>
  );
};
