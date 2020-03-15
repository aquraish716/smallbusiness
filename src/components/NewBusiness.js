import React, { Component, Fragment } from 'react'
import {
    Button, 
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Paper
} from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
const api_key = 'AIzaSyBBKC1L_aWLMPVCefz0zz5bQEStQzoh5hU'
const AnyReactComponent = ({ text }) => <div>{text}</div>

class NewBusiness extends Component {
    state= {
        open: false,
        businessName: '',
        businessDescription: '',
        businessHours: '',
        businessAddress: ''
        }

AnyReactComponent = ({ text }) => <div>{text}</div>

        
toggleDialog = () => this.setState({ open: !this.state.open })

handleTextChange = (e) => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
}

handleSubmit = (e) => {
    e.preventDefault()
    const payload = { ...this.state }
    payload.id = this.props.total + 1 
    delete payload.open
    this.props.addListings(payload)
    this.setState({ open: false })
    
}

componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
        this.setState({
            businessName: '',
            businessDescription: '',
            businessHours: '',
            businessAddress: ''
        })
    }

}

render() {
    return (
        <Fragment>
            <div style={{ textAlign: 'center' }}>
                <Paper open={this.state.open} onSubmit={this.toggleDialog} elevation={3} style={{width:"1200px", height:"600px", margin:"80px"}}>
                    <h1 style={{ marginTop: "10px" }}>Add New Business</h1>
                        <form 
                            onSubmit={this.handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', width: '450px', margin: "50px" }}>
                            <TextField 
                                id="businessName" 
                                placeholder="Name" 
                                value={this.state.businessName} 
                                onChange={this.handleTextChange} 
                                defaultValue="Default Value"
                                required />
                            <TextField 
                                id="businessAddress" 
                                placeholder="Address" 
                                value={this.state.businessAddress} 
                                onChange={this.handleTextChange} 
                                defaultValue="Default Value"
                                required />
                            <TextField 
                            id="businessHours" 
                            placeholder="Hours of Business (ex. 8AM - 9PM)" 
                            value={this.state.businessHours} 
                            onChange={this.handleTextChange} 
                            required />
                            <TextField 
                                id="businessDescription" 
                                placeholder="Description" 
                                value={this.state.businessDescription} 
                                onChange={this.handleTextChange} 
                                required />
                            <br />
                            <Button variant="contained" color="primary" type="submit">SAVE</Button>
                        </form>
                            <div style={{ height: '50vh', width: '75%' }}>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: api_key}}
                            defaultCenter={this.state.center}
                            defaultZoom={this.state.zoom}
                            
                        
                            >
                            <AnyReactComponent
                                lat={this.state.Latitude}
                                lng={this.state.Longitude}
                                text={this.state.businessName}
                            />
                            </GoogleMapReact>
                            </div>
                </Paper>
            </div>
        </Fragment>
    )
}
}

export default NewBusiness