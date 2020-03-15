import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { Link } from 'react-router-dom'

const Listings = (props) => {

    return (
        <Container className="listing-container" style={{width:"75%"}}>
                <h2 style={{textAlign:"center", fontSize:"50px"}}>Austin Small Businesses</h2>                
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    { document.cookie === "loggedIn=true" ? (<TableCell>Delete</TableCell>):(null)}
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.listings.map((business, idx) => (
                    <TableRow key={business.id}>
                        <TableCell ><Link to={`/listings/${business.id}`}>{business["businessName"]} </Link></TableCell>
                        <TableCell >{business["businessDescription"]}</TableCell>
                        <TableCell>{business["businessHours"]}</TableCell>
                        <TableCell>{business["businessAddress"]}</TableCell>
                        {document.cookie === "loggedIn=true" ? (
                                    <TableCell>
                                    <DeleteIcon
                                        onClick={() => props.removeListings(idx)}
                                        style={{color:"red"}} />
                                </TableCell>    
                                    ):(null)}
                        </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings