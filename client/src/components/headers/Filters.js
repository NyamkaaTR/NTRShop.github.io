import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)

    const [search, setSearch] = state.productsAPI.search


    return (
        <div className="filter_menu">
            
            <input id='input' type="text" value={search} placeholder="Хайх зүйлээ бичнэ үү!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
        </div>
    )
}

export default Filters
