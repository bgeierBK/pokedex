import { useState, useEffect } from 'react'
import './App.css'

function HomeCard({pokemon}){

const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
}

return(
<>
<p>{pokemon.id}: {capitalizeFirstLetter(pokemon.name)}</p>
</>
)
}

export default HomeCard