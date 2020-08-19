import React, { Component } from 'react';
const NavList =['Profile', 'Posts','Gallery', 'ToDo']
class SideNav extends Component{

    render(){
        console.log(this.props)
        return(
            <div className="sidenav-container">
                <div className="nav-list-container">{
                    NavList.map((data, index)=>{
                        return(
                            <div className={this.props.activepage === data?"active-navlist":"navlist"} key={index} onClick={()=> this.props.handleNav(data)}>{data}</div>
                        )
                    })
                }
                
                </div>
            </div>
        )
    }
}

export default SideNav;