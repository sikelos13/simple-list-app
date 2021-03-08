import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Order } from '../../api/types/Order';
import { Button } from '@material-ui/core';
import { DateFormat } from "../../utils/DateFormat";
import { getOrderStatus } from "../../utils/getOrderStatus";
import { getHasEtaTime } from "../../utils/getHasEtaTime";

interface OrdersListProps {
    ordersList: Order[]
    handleDetails: (order: Order) => void;
}

const OrdersList: React.FC<OrdersListProps> = (({ ordersList, handleDetails }: OrdersListProps) => (
    <>
        {ordersList.map((order: Order) => {
            return (
                <TableRow
                    hover
                    key={order.id}
                    className="TableRow_Custom"
                >
                    <TableCell width="15%" className="TableCell_Parcel_No">
                        {order.parcel_id}
                    </TableCell>
                    <TableCell width="15%" className="TableCell_Last_Update">
                        {DateFormat.normalize(order.last_updated)}
                    </TableCell>
                    <TableCell width="15%" className="TableCell_Sender">
                        {order.sender}
                    </TableCell>
                    <TableCell width="15%" className="TableCell_Status">
                        {getOrderStatus(order.status)}
                    </TableCell>
                    <TableCell width="15%" className="TableCell_Eta">
                        {getHasEtaTime(order.status) &&
                            DateFormat.normalize(order.eta)
                        }
                    </TableCell>
                    <TableCell width="10%" className="TableCell_Actions">
                        <Button
                            className="Button_Actions"
                            variant="contained"
                            color="primary"
                            size="small"
                            value={order.id}
                            onClick={() => handleDetails(order)}
                        >
                            Details
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })
        }
    </>
));

export default OrdersList;