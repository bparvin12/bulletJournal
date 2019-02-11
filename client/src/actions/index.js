import axios from 'axios';

export const signUp = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:3001/users/signup', data)
            console.log('res: ', res)
        } catch(err) {
            console.error('err: ', err)
        }
        // send data to back end (axios)


        // get JWToken

        // show user signed in w/ token

        // store JWToken to local storage

    }

}