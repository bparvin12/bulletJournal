import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../actions';



class SignIn extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);   
    }
    async onSubmit(formData) {
        console.log(this.props);
        console.log('submit action successful')
        console.log('formData: ', formData)
        // call action to backend here?
        await this.props.signIn(formData)
        // get to Member page
        if(!this.props.errorMessage){
            this.props.history.push('/member')
        }
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

            { this.props.errorMessage ?
                <div>
                    { this.props.errorMessage }
                </div>  : null }

            <button type="submit">Sign In
                {/* <span class="MuiButton-label-429">Sign In</span>
                <span class="MuiTouchRipple-root-312"></span> */}
                
            </button>

            </form>

        </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    }

}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
    )(SignIn)