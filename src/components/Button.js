import PropTypes from 'prop-types'

export const Button = ({color, text}) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <button onClick={onClick} style={{ backgroundColor : color}} 
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
