import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import LoadMore from './LoadMore'
import Slideshow from './Slider'
import Footer from './Footer'
import Divider from "@material-ui/core/Divider";



function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [search, setSearch] = state.productsAPI.search

    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }


    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>
    return (
        <>
        
        
        {
            isAdmin && 
            <div className="delete-all">
                <span>Бүгд</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Устгах</button>
            </div>
        }
        {
            !isAdmin && 
                <Slideshow style={{background:'white'}} />
                
        }
        {
            !isAdmin && 
                <h1 style={{textAlign: 'center'}}>Дэлгүүр</h1>    
        }
        {
            !isAdmin && 
            <div>
                <Divider sx={{ bgcolor: (theme) => theme.palette.divider }}
                  style={{
                    backgroundColor:"white",
                    border: "none",
                    height: 1,
                    margin: 0,
                  }} />
            </div>
        }
        { 
            !isAdmin && 
            <div className="row" style={{position:'relative', top:'20px'}}>
                <span>Шүүх: </span>
                <select style={{height:'40px', backgroundColor:'grey', borderRadius:'15px'}} name="category" value={category} onChange={handleCategory} >
                    <option value=''>Бүгд</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

        }
        

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>

        <LoadMore />
        {
            !isAdmin && 
            <Footer />
        }
        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
