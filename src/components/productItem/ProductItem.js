import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
    onDelete = (id) =>{
        if(confirm('bạn có chắc muốn xóa')){ //eslint-disable-line
            this.props.onDelete(id)
        }
    }
    
    render() {
    const {product,index} = this.props
    var statusName = product.status ? "Còn hàng" : "Hết hàng"
    var statusClass = product.status ? 'primary' : "Warning"
        return (
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button className = {`btn btn-${statusClass}`}>
                            {statusName}
                        </button>
                        
                    </td>
                    <td>
                        <Link to={`product/${product.id}/edit`} className="btn btn-primary mr-2">Sủa</Link>
                        <button type="button" className="btn btn-danger ml-2" onClick={() => this.onDelete(product.id)}>Xóa</button>
                    </td>
                </tr>
            
        )
    }
}

export default ProductItem