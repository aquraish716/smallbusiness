import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeListings } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings:state.listings,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListings: (index) => dispatch(removeListings(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)