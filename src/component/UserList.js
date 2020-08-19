import React, { Component } from 'react';
import axios from 'axios';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountList: []
        }
    }
    componentWillMount() {
        axios.get('https://panorbit.in/api/users.json')
            .then(res => {
                console.log(res)
                if (res.data && res.data.users) {
                    this.setState({ accountList: res.data.users })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleList = (data)=>{
        this.props.history.push({
            pathname: '/profile',
            state: { detail: data }
            })

    }
    render() {
        const { accountList } = this.state;
        return (
            <div className="container-flud pt-5 user-list">
                <div className="card w-50 mx-auto mt-5">
                    <div className="card-header text-center account-header">
                        Select an Account
                    </div>
                    <div className="card-body account-body">
                        {
                            accountList && accountList.length > 0 && (
                                accountList.map((data, index) => {
                                    return (
                                        <div className="border-bottom account-list" onClick={()=>this.handleList(data)} key={index}>
                                            <div className="imglist-container">
                                                <img src={data.profilepicture} className="account-img" />
                                            </div>
                                            <div className="account-name">{data.name}</div>

                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;