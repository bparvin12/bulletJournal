import color from "@material-ui/core/colors/red";

export default theme => ({
    //.button class
    button: {
        // has a margin
        margin: theme.spacing.unit,
        height:'50px',
        marginTop: '15px',
        marginBottom: '5px',
    },
    //.input class
    input: {
        // is hidden
        backgroundColor: 'orange',
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
});