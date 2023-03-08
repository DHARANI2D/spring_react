import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import '../App.css'
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center" style={{marginTop:"30px"}}> View Task Status </h3>
                    <div className = "card-body">
                        <table style={{marginLeft:"30px"}}>
                            <tr>
                            <td>First Name </td>
                            <td> { this.state.employee.firstName }</td>
                            </tr>
                            <tr>
                            <td>Task</td>
                            <td> { this.state.employee.lastName }</td>
                            </tr>
                            <tr>
                            <td>Status </td>
                            <td> Not Completed</td>
                            </tr>
                            <tr>
                            <td>Email Id </td>
                            <td> { this.state.employee.emailId }</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
