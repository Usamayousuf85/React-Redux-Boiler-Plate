import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Set_data } from '../Store/Action'
import '../App.css'

class Home extends Component {
    render() {
        console.log('users', this.props)
        // let user = {name : "umair",email: 'umair@yahoo.com'}
        return (
            <div className='main'>
                {this.props.users.map((v, i) => {
                    return <h1 key={i}>{v.name}<br />{v.email}</h1>
                })}
                <button onClick={() => this.props.Set_data()}>Set data</button>
                {/* <button onClick={()=> this.props.Set_data(user)}>Set data</button> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    Set_data: () => dispatch(Set_data())
    // Set_data : (data) => dispatch (Set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)