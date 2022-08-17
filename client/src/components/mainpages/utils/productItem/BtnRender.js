import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'
import {GrView} from 'react-icons/gr'
import {BsFillCartCheckFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn" >
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        <AiFillDelete size='30px'/>
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        <AiFillEdit size='30px'/>
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        <BsFillCartCheckFill size='30px' />
                    </Link>
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        <GrView size='30px' />
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
