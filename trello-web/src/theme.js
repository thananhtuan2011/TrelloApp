import { pink } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
// A custom theme for this app


const theme = extendTheme({
    trello:{
        header:'70px'
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: pink[600],
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: pink[400],
          },
        },
      },
    },
  });

export default theme;