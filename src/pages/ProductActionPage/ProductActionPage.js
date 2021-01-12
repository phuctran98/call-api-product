import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../../actions/index";

class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }
    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.actGetProductsRequest(id)
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.editProduct)
        if(nextProps && nextProps.editProduct) {
            var editProduct  = nextProps.editProduct
            this.setState({
                id: editProduct.id,
                txtName: editProduct.name,
                txtPrice: editProduct.price,
                chkbStatus: editProduct.status,
            })
        }
        // console.log(this.state)
        
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    onSave = (e) => {
        e.preventDefault()
        var { history } = this.props
        var { txtName, txtPrice, chkbStatus, id } = this.state
        var product = {
            // id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (id) {
            // callApi(`products/${id}`, "PUT", {
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.goBack()
            // })
            this.props.actUpdateProductsRequest(product,id)
            // console.log(product)
            history.goBack()
        }
        else {
            // callApi('products', 'POST', {
            //     name: txtName,
            //     price: txtPrice,
            //     status: chkbStatus
            // }).then(res => {
            //     history.push("/product-list")
            // })
            this.props.actAddProductsRequest(product)
            history.goBack()
        }

    }
    render() {
        // var {editProduct} = this.props
        var { txtName, txtPrice, chkbStatus } = this.state
        return (
            <div className="col-xs-6 col-lg-6 mt-5">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Giá:</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        ></input>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                className="mr-2"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange}
                                checked={chkbStatus}
                            />
                            Còn Hàng
                        </label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger mt-4 mr-2">
                        Quay lại
                    </Link>
                    <button type="submit" className="btn btn-primary mt-4">Thêm sản phẩm</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        editProduct: state.editProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        actAddProductsRequest: (product) => {
            dispatch(Actions.actAddProductsRequest(product))
        },
        actGetProductsRequest: (id) => {
            dispatch(Actions.actGetProductsRequest(id))
        },
        actUpdateProductsRequest : (product,id) =>{
            dispatch(Actions.actUpdateProductsRequest(product,id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)