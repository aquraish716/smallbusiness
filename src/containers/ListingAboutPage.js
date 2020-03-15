import { connect } from 'react-redux'
import ListingAboutPage from '../components/ListingAboutPage'

const mapStateToProps = (state) => {
    return {
        listings:state.listings,
        user: state.user
    }
}

export default connect(mapStateToProps)(ListingAboutPage)