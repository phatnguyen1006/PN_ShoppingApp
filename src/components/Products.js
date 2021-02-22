import React from 'react';
import {
    useRouteMatch,
    Link,
    Route
} from 'react-router-dom';
import Product from '../product/Product';
import '../product/product.css';


const Products = () => {
    const productData = [
        {
            id: 1,
            name: "NIKE Liteforce Blue Sneakers",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uir7dek0krwrtgxahdlm/air-vapormax-flyknit-3-shoe-FZBdxt.jpg",
            status: "Available"
        },
        {
            id: 2,
            name: "Stylised Converse",
            description:
                "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
            img: "https://bizweb.dktcdn.net/100/039/880/products/img-4454.jpg?v=1571164306253",
            status: "Out of Stock"
        },
        {
            id: 3,
            name: "ADIDAS Adispree Running Shoes",
            description:
                "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
            img:"https://vcdn-giaitri.vnecdn.net/2019/11/21/5b9622f269c85-IMG-2041-6930-1574326534.jpg",
            status: "Available"
        },
        {
            id: 4,
            name: "ADIDAS Mid Sneakers",
            description:
                "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
            img: "https://www.thesneakerone.com/13928-large_default/adidas-crazy-8-adv-pk.jpg",
            status: "Out of Stock"
        }
    ];

    // Catch the current URL
    const { url } = useRouteMatch();
    

    const linkList = productData.map((product) => (
        <li key={product.id}>
        {">"} <Link style={{color: "cyan"}} to={`${url}/${product.id}`}>{product.name}</Link>
        </li>
    ))

    return (
        <div>
            <div className="products-container">
                <div className="products-content">
                    <ul style={{ listStyleType: "none", color: "blue"}}>
                        {linkList}
                    </ul>
                </div>
            </div>
            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
        </div>
    );
    
}

export default Products;