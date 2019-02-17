export default theme => ({
    //.button class
    button: {
        // has a margin
        margin: theme.spacing.unit,
    },
    //.input class
    input: {
        // is hidden
        backgroundColor: 'blue',
    },
    MuiCardContent: {
        height: '300',
        background: 'linear-gradient(45deg, #262b40 30%, #171a26 90%)',
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: 'ivory',
      },
});