import React, { Component } from 'react';
import SideNav from './SideNav';
import NoData from './NoData'
class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage:'Profile'
        }
    }
    handleNav = (name) => {
        this.setState({activePage: name})
    }
    render() {
        console.log(this.props)
        const userData = this.props.history && this.props.history.location && this.props.history.location.state && this.props.history.location.state.detail;
        return (
            <div className="w-100 p-5">
                <div className="row justify-content-between">
                    <div className="col-sm-2"><SideNav handleNav={this.handleNav} activepage={this.state.activePage}></SideNav></div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-12 border-bottom pb-3">
                                <div className="d-flex w-100 justify-content-between " >
                                    <div className="active-page-title">{this.state.activePage}</div>
                                    <div className="d-flex mt-2">
                                        <div className="profile-container">
                                            <img src={userData.profilepicture} className="profile-image"/>
                                        </div>
                                        <div className="profile-name">{userData.name}</div>
                                    </div>
                                </div>
                            </div>
                            {this.state.activePage !== "Profile"?
                        <NoData />:
                        <div className="col-sm-12">
                            <div className="row">
                            <div className="col-sm-5 pt-3 text-center border-right">
                                <div className="img-container">
                                    <img src={userData.profilepicture} className="main-img"/>
                                </div>
                                <div className="text-center custom-font">
                                    {userData.name}
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">username :</div>
                                    <div className="w-75 text-left custom-font ">
                                     {" " +userData.username}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">e-mail :</div>
                                    <div className="w-75 text-left custom-font ">
                                     {" " +userData.email}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">website :</div>
                                    <div className="w-75 text-left custom-font ">
                                     {" " +userData.website}
                                     </div>
                                </div>
                              
                                <div className="border-bottom"></div>
                                <div className="custom-font mt-3">Company</div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">Name :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.company&&userData.company.name}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">catchpharse :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.company&&userData.company.catchPhrase}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">bs :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.company&&userData.company.bs}
                                     </div>
                                </div>
                            </div>
                            <div className="col-sm-7 pt-3 text-center" >
                                <div className="custom-font ">Address:</div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">Street :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.address&&userData.address.street}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">Suite :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.address&&userData.address.suite}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">city :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.address&&userData.address.city}
                                     </div>
                                </div>
                                <div className="w-100 d-flex">
                                    <div className="w-25 text-right custom-font text-secondary mr-2">Zipcode :</div>
                                    <div className="w-75 text-left custom-font ">
                                    {userData.address&&userData.address.zipcode}
                                     </div>
                                </div>
                                <div className="">
                                    map section
                                </div>
                            </div>
                            </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetail;