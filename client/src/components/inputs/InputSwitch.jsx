import React from 'react';
import Switch from '@material-ui/core/Switch';

class InputSwitch extends React.Component {
    state = {
        checked: false,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
            <Switch
                checked={this.state.checked}
                onChange={this.handleChange('checked')}
                value="checkedA"
                color={this.props.color}
            />
        );
    }
}

export default InputSwitch;
