import {
    makeStyles
} from '@material-ui/core/styles';

// get all styles and put in an object
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },

    icon: {
        marginRight: "20px"
    },

    button: {
        marginTop: "40px"
    },

    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },

    cardGrid: {
        padding: '20px 0'
    },

    cardMedia: {
        paddingTop: '56.25%' // =(9 / 16) typical aspect ratio

    },

    cardContent: {
        flexGrow: 1,
    },
}));

export default useStyles;