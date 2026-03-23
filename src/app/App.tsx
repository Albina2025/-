import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router-dom";
import { Notifications } from "@mantine/notifications";
import { routes } from "./routes";

export const App = () => {
  return (
    <MantineProvider>
      <Notifications/>
        <RouterProvider router={routes} />
    </MantineProvider>
  );
};