import React from 'react'
import spinner from '../../img/spinner.gif' ;
const Spinner = () => {
    return (
        <img src={spinner} style={{ with:'200px', margin:'auto',display:'block' }} alt='Loading' />
    )
}

export default Spinner
