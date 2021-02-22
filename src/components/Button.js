import PropTypes from 'prop-types'

export const Button = ({color, text}) => {
    return (
        <button style={{ backgroundColor : color}} 
        className='btn'>{text}</button>
    )
}


Button.defaultProps = {
    color: 'grey',
}


Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func

}

export default Button