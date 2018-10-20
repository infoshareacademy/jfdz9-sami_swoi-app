// import React, { Component } from 'react';
// import RegisterForm from '../Register/RegisterForm.js';
// import { connect } from 'react-redux';
// import { userSignupRequest, isUserExists } from '/home/kursant/WebstormProjects/jfdz9-sami_swoi-app/src/client/actions/signupActions.js';
// import { addFlashMessage } from '/home/kursant/WebstormProjects/jfdz9-sami_swoi-app/src/client/actions/flashMessages.js';
// import PropTypes from 'prop-types';
//
// class RegisterPage extends Component {
//     render() {
//         const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
//         return (
//             <div className="row">
//                 <div className="col-md-6 col-md-offset-6">
//                     <RegisterForm
//                         isUserExists={isUserExists}
//                         userSignupRequest={userSignupRequest}
//                         addFlashMessage={addFlashMessage} />
//                 </div>
//             </div>
//         );
//     }
// }
//
// RegisterPage.propTypes = {
//     userSignupRequest: PropTypes.func.isRequired,
//     addFlashMessage: PropTypes.func.isRequired,
//     isUserExists: PropTypes.func.isRequired
// }
//
//
// export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(RegisterPage);