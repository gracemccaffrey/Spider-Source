import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SignUpForm from '../SignUpForm';
import Navbar from '../Navbar';



class SignUp extends React.Component{
    render(){
        return(
         <div>
            <Navbar onHome={false} />
            <SignUpForm />
            <Footer />
        </div>
    )
    }
}

export default SignUp;