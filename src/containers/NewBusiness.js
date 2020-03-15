import { connect } from 'react-redux'
import NewBusiness from '../components/NewBusiness'
import { addListings } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        addListings: (listing) => dispatch(addListings(listing))
    }
}

export default connect(null, mapDispatchToProps)(NewBusiness)
