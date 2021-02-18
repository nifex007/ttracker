import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { title }) => {
    return (
        <header className='header'>
            <h1>{title}</h1> 
            <Button />
        </header>
    )
}


export default Header