import axios from "react-axios"
import { createOrderFail, getOrdersFail, getOrdersStart, getOrdersSuccess } from "../../redux/Orders/OrderActions"
import { BASE_URL } from "../../utils/constants"

export const getOrders = async (dispatch, currentUser) => {

dispatch(getOrdersStart())
console.log(currentUser.token);

try {
    const orders = await axios.get(`${BASE_URL}orders`, {
        headers: {
            'x-token': currentUser.token
        }
    })
    if (orders) {
        dispatch(getOrdersSuccess(orders.data.data))
    }
    } catch (error) {
        console.log(error);
        dispatch(getOrdersFail("wooops! no hay usuario"))
    }

}

const createOrder = async (order, dispatch, currentUser) => {
    try {
        const responce = await axios.post(`${BASE_URL}orders`, order, {
            headers: {
                'x-token': currentUser.token
            }
        });

        if (responce) {
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
        dispatch(createOrderFail())
    }
}