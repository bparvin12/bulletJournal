import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';


import LoginInput from './Inputs/LoginInput';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);   
    }
    async onSubmit(formData) {
        console.log('submit action successful')
        console.log('formData: ', formData)
        // call action to backend here?
        await this.props.signUp(formData)
    }

render() {
    const { handleSubmit } = this.props;
    return (
        <div>
            <form onSubmit={handleSubmit(this.onSubmit)}>

            <fieldset>
                <Field
                    name="email"
                    type="text"
                    id="email"
                    component='input' />
            </fieldset> 

            <fieldset>
                 <Field
                    name="password"
                    type="password"
                    id="password"
                    component='input' />   
            </fieldset>

            <button type="submit">Sign Up
                {/* <span class="MuiButton-label-429">Sign Up</span>
                <span class="MuiTouchRipple-root-312"></span> */}
                
            </button>

            </form>

        </div>

    );
}

}

export default compose(
    connect(null, actions),
    reduxForm({ form: 'signup' })
    )(SignUp) ;