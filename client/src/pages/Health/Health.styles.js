// import color from "@material-ui/core/colors/red";

export default theme => ({
    //.button class
    button: {
        // has a margin
        margin: theme.spacing.unit,
        height: '50px',
        marginTop: '15px',
        marginBottom: '5px',
    },
    //.input class
    input: {
        // is hidden
        backgroundColor: 'orchid',
    },
    subinput: {
        // is hidden
        backgroundColor: 'white',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        // background:'white'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    h4: {
        color: 'white',
    },

    root: {
        flexGrow: 1,
        background: 'rgba(0, 0, 0, 0.1)',
        flexWrap: 'wrap',
        padding: '26px',
        opacity: 'min',
        height: 'auto',
    },
    paper: {
        height: 300,
        background: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        justify: 'bottom',
        text: 'white',
        color: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
    },
    card: {
        height: 300,
        background: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#D3D3D3',
    },
});
