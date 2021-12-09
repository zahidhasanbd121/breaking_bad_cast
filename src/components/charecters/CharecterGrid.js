import React from 'react'
import Spinner from '../ui/Spinner'

const CharecterGrid = ({ items, isLoading}) => {
    return isLoading ? (
    <h1>Loading...</h1>
    ) : ( 
    <section className= 'cards'>
     
    </section>
    )
    
}

export default CharecterGrid


/*{items.map((item) => (
            <h1>{item.name}</h1>
     ))} */

