import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        secondary: {
            light: '#ff9694',
            main: '#d16666',
            dark: '#9c373c',
            contrastText: '#e8eddf',
        },
        neutral: {
            light: '#fffe8c',
            main: '#f5cb5c',
            dark: '#bf9a2b',
            contrastText: '#242423',
        },
        primary: {
            main: '#2D3047',
            contrastText: '#e8eddf',
        },
        background: {
            default: '#fafafa',
        },
    },
    typography: {
        fontSize: 16,
        fontWeightRegular: 400,
    },
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingTop: 2,
                    paddingBottom: 2,
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 40,
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                secondary: {
                    color: '#d16666',
                }
            }
        }
    },
});

export default theme;