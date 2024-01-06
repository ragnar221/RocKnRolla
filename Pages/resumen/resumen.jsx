import { resumenWrapperStyled,
         resumenTitleStyled, 
         ResumenInfoStyled, 
         linkStyled, 
         productsContainerStyled, 
         hrStyled, 
         productCostStyled, 
         totalCostStyled, 
         shipmentCostStyled } from './resumenStyle';
import ResumenCard from '../../src/Components/resumenCard/resumenCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../src/axios/axiosOrders';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';


const Resumen = () => {
    const [visitedOrder, setVisitedOrder] = useState(null);
    const {currentUser} = useSelector (state => state.user);
    const {orders} = useSelector (state => state.orders);
    const dispatch = useDispatch()
    const {orderId} = useParams()

      useEffect(() => {
        if(!orders) {
            getOrders(dispatch, currentUser)
        }
        setVisitedOrder(orders?.find((order) => order._id === orderId))
      } ,[currentUser, dispatch, orderId, orders])

      console.log(visitedOrder);
  return (
    <resumenWrapperStyled>
        <resumenTitleStyled>
            <h1>resumen de la order: #{visitedOrder?.id.slice(0.7)}</h1>
            <Link to="/misOrdenes" >volver a mis ordenes</Link>
        </resumenTitleStyled>
        <h2>productos</h2>
        <productsContainerStyled>
            {visitedOrder?.items.map((item) => {
                return <ResumenCard key={item._id} {...item} />
            })
            }
        </productsContainerStyled>
        <hrStyled/>
        <ResumenInfoStyled>
            <p>costos</p>
            <productCostStyled>
                <p>costo de productos</p>
                <span>{formatPrice(visitedOrder?.price)}</span>
            </productCostStyled>
            <shipmentCostStyled>
                <p>costo de envio</p>
                <span>{formatPrice(visitedOrder?.shippingCost)}</span>
            </shipmentCostStyled>
            <totalCostStyled>
                <p>costo total</p>
                <span>{formatPrice(visitedOrder?.total)}</span>
            </totalCostStyled>
        </ResumenInfoStyled>
    </resumenWrapperStyled>
  );
};

export default Resumen;