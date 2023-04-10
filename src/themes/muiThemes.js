import { createTheme } from "@mui/material";

const myTheme = createTheme({
    breakpoints: {
        values: {
            desktop: 1200,
            laptop: 1024,
            tablet: 640,
            mobile: 0,
        },
    },
});
  