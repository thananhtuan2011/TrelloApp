import { pink } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
// A custom theme for this app
const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} -  ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
    trello:{
        header:APP_BAR_HEIGHT,
        board_bar:BOARD_BAR_HEIGHT,
        body_content:BOARD_CONTENT_HEIGHT
    },
    colorSchemes: {
      light: {
        // palette: {
        //   primary: {
        //     main: pink[600],
        //   },
        // },
      },
      dark: {
        // palette: {
        //   primary: {
        //     main: pink[400],
        //   },
        // },
      },
    },
  });

export default theme;