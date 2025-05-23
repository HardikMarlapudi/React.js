import React from 'react';
import PropTypes from 'prop-types';

function UserGreeting(props) {

    /*
    if(props.isLoggedIn) {
        return <h2>Welcome {props.username}</h2>;
    }
    return <h2>Please login to continue</h2>;
    */

    const welcomeMessage = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                            Please login to continue
                        </h2>

   return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: "Guest",
}
export default UserGreeting
