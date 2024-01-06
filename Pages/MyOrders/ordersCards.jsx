import { useSelector } from "react-redux/es/hooks/useSelector";
import OrdersCard from "./OrdersCard";
import { MisOrdenesWrapper, OrderCard } from "./MyOrdersStyle";
import Loader from "../../src/Components/Loader/Loader";

const OrdersCards = () => {
    const { orders, loading, error } = useSelector(state => state.orders)

    if (loading & !orders) {
        return <Loader styles={{ height: '50px', width: '50px'}} />
    }

    if(error) {
        return <h2 style={{ textAlign: 'center'}} >{error}</h2>;
    }
  return (
    <MisOrdenesWrapper>
        {
            orders?.length ? (
                orders.map((order) => {
                    return <OrderCard key={order._id} {...order} />
                })
            ): (
                <h2>todavia no has hecho ningun pedido. ¡¿que estas esperando?!</h2>
            )
        }
    </MisOrdenesWrapper>
  );
};

export default OrdersCards;