import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Shell } from "./components/Shell/Shell";
import { BrowserRouter } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

export const App = () => {
  return (
    <MantineProvider
      theme={{
        primaryColor: "purple",
        secondaryColor: "darkOrange",
        colors: {
          lila: [
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
            "#c685c7",
          ],
          purple: [
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
            "#a773b0",
          ],
          darkOrange: [
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
            "#d78e01",
          ],
        },
      }}
    >
      <Notifications />
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    </MantineProvider>
  );
};
