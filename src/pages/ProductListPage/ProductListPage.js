import React, { Component } from "react";
import ProductItem from "../../components/productItem/ProductItem";
import ProducList from "../../components/productList/ProducList";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
class ProductListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }
    onDelete = (id) => {
        var { products } = this.state
        callApi(`products/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) {
                var index = this.findIndex(products, id)
                console.log(index)
                if (index !== -1) {
                    products.splice(index, 1)
                    this.setState({
                        products: products
                    })
                }
            }
        })
    }
    findIndex = (products, id) => {
        var result = -1
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index
            }
        }
        );
        return result 
    }
    render() {
        var { products } = this.state
        return (
            <div className="container">
                <div>
                    <Link to="./products/add" className="btn btn-primary mt-4">Thêm sản phẩm</Link>
                </div>
                <ProducList>
                    {this.showProductItem(products)}
                </ProducList>
            </div>

        )
    }
    showProductItem(products) {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index} product={product} index={index} onDelete={this.onDelete}>

                    </ProductItem>
                )
            })
        }
        return result
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListPage)