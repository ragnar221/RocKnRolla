import axios from "axios"
import OrdersSlice, { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../../redux/Orders/OrdersSlice"
import { BASE_URL } from "../../utils/constants"
import { useSelector } from "react-redux"

export const getOrders = async (dispatch, currentUser) => {

dispatch(fetchOrdersStart())
//const { currentUser, hiddenMenu } = useSelector((state) => state.user);
console.log(currentUser);

try {
    const orders = await axios.get(`${BASE_URL}orders`, {
        headers: {
            'x-token': currentUser
        }
    })
    if (orders) {
        dispatch(fetchOrdersSuccess(orders.data.data))
    }
    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail("wooops! no hay usuario"))
    }

}

export const createOrder = async (order, dispatch, currentUser) => {
    try {
        const responce = await axios.post(`${BASE_URL}orders`, order, {
            headers: {
                'x-token': currentUser
            }
        });

        if (responce) {
            getOrders(dispatch, currentUser)
        }
    } catch (error) {
        dispatch(createOrderFail())
    }
}