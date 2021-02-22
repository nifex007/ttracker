import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( { title }) => {
    const onClick = () => {
        console.log('click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1> 
            <Button color='green' text='+' onClick={onClick}/>
        </header>
    )
}


export default Header