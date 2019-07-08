import React, { Component } from 'react';


class CartItem extends Component {
    render() {
        return (
            <div>
                <tr>
                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                    <td>Product Name </td>
                    <td><input class="form-control" type="text" value="1" /></td>
                    <td class="text-right">124,90 &#x20b9;</td>
                    <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>
                </tr>
            </div>
        );
    }
}

export default CartItem;