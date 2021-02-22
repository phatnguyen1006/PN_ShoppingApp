import React from 'react';
import {
    useParams,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import './product.css';

const Product = ({data}) => {
    
    const url = useRouteMatch();
    const { productId } = useParams();
    const history = useHistory();
    // console.log(url);
    // console.log(product);

    const handleHistory = () => {
        history.replace("/products")
    }

    // Find data by index
    const product = data.find((p) => p.id === Number(productId) );
    let productData;

    if (product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <div>
                    <p>{product.description}</p>
                    <hr />
                    <h5>{product.status}</h5>
                </div>
            </div>
        )
    }
    else productData = <h2>Sorry. Product doesn't exist</h2>

    return (
    <>
        <div style={{display: "flex"}}>
            <div style={{
                margin: "auto",
                width: "50%"
            }}>
                {productData}
                <button className="okBack-btn" onClick={handleHistory}>OK and Back</button>
            </div>
        </div>
            {product ? (<img style={{ boxShadow: "10px 5px grey",marginBottom: "2em" ,marginRight: "20%" }} width="30%" height="auto" src={product.img} />) : <p>No Img</p>}
    </>
    )
}

export default Product;