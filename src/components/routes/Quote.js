import React from "react"
import {useState, useEffect} from 'react'
import createQuote from '../../services/constants'
import {NavLink} from 'react-router-dom'



function Quote () {
    const [quote, setQuote] = useState("")


    async function handleClick () {
        const token = await createQuote()
        setQuote(token.data.quote)
    }

    useEffect(() => {
        handleClick();
    }, [])



    return (
        <div>
            <h1 className="quote-heading"> Inspirational Quote </h1>
            <p className="quote">{quote}</p>
            <NavLink to ="/todos" className='back-link'>Back to List</NavLink> 
            

        </div>
    )
}

export default Quote;
