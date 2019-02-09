import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
render() {
    return (
        <div>
            <form>

            <fieldset>
                <Field
                    name="email"
                    type="text"
                    id="email"
                    component="input" />
            </fieldset> 

            <fieldset>
                 <Field
                    name="password"
                    type="password"
                    id="password"
                    component="input" />   
            </fieldset>

            <button type="submit">Sign Up</button>

            </form>

        </div>

    );
}

}

export default reduxForm({ form: 'signup' })(SignUp);