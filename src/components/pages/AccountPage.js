import React from 'react';
import '../../App.css';
import SideBar from '../SideBar';
import ProjectPane from '../ProjectPane';


class AccountPage extends React.Component{
    constructor(props) {
        super(props);
        this.handleProjChange = this.handleProjChange.bind(this);
        this.state = {
            currentProj: null

        };
    }
    handleProjChange(name) {
        this.setState({
            currentProj: name
        });
        this.render();
        }

    render(){
        return(
         <div>
            <SideBar currentProj={this.state.currentProj} action={this.handleProjChange}/>
            <AccountPage currentProj={this.state.currentProj} action={this.handleProjChange} />
        </div>
    )
    }
}

export default AccountPage;