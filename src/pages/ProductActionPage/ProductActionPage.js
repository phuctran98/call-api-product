import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            callApi(`products/${id}`, "GET", null).then(res => {
                var data = res.data
                this.setState({
                    id: data.id,
                    txtName: data.name,
                    txtPrice: data.price,
                    chkbStatus: data.status
                })
            })
        }

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
        var { txtName, txtPrice, chkbStatus,id} = this.state
        if(id){
            callApi(`products/${id}`,"PUT",{
                name : txtName,
                price : txtPrice,
                status : chkbStatus
            }).then(res=>{
                history.goBack()
            })
        }
        else{
            callApi('products', 'POST', {
                name: txtName,
                price: txtPrice,
                status: chkbStatus
            }).then(res => {
                history.push("/product-list")
            })
        }
        
    }
    render() {
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

export default ProductActionPage