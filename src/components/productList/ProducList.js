import React, { Component } from "react";
class ProductList extends Component {
    render() {
        return (
            <div className="ProductList">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Mã</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList