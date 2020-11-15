  
import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import AboutSection from '../AboutSection';
import ExampleSection from '../ExampleSection';
import Footer from '../Footer';
import LoginForm from '../LoginForm';
import Navbar from '../Navbar';


class Home extends React.Component{
    render(){
        return(
         <div>
            <Navbar onHome={true}/>
            <HeroSection />
            <ExampleSection />
            <AboutSection />
            <LoginForm />  
            <Footer />          
        </div>
    )
    }
}

export default Home;