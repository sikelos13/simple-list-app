import React, { Component } from 'react';
import { fetchOrdersApi, FetchOrdersApiResponse } from '../api/orders_management/fetchOrders';
import OrdersList from '../components/orders_management/OrdersList';
import { Order } from '../api/types/Order';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import toast from 'react-hot-toast';
import SkeletonLoader from "../components/common/TableCellLoader";
import AppHeader from '../components/AppHeader';
import DetailsModal from '../components/modals/DetailsModal';
import { debounce } from '../utils/debounce';

interface OrdersManagementState {
    loading: boolean;
    ordersList: Order[];
    filteredOrdersList: Order[];
    isDetailsModalOpen: boolean;
    selectedOrder?: Order;
}

class OrdersManagement extends Component<{}, OrdersManagementState> {
    constructor(props: any) {
        super(props)

        this.state = {
            ordersList: [],
            filteredOrdersList: [],
            loading: false,
            isDetailsModalOpen: false
        }

        this.handleSearch = debounce(this.handleSearch, 500);
    }

    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders = () => {
        this.setState({ loading: true });
        fetchOrdersApi().then((response: FetchOrdersApiResponse) => {
            if (response.success) {
                this.setState({
                    ordersList: response.data.orders,
                    filteredOrdersList: response.data.orders,
                    loading: false
                })
            } else {
                toast.error(response.errorMessage);
                this.setState({
                    ordersList: [],
                    filteredOrdersList: [],
                    loading: false
                })
            }
        })
    }

    handleSearch = (event: any) => {
        const { ordersList } = this.state;
        const value = event.target.value

        if (ordersList) {
            if (value !== '') {
                const returnedFilteredOrders = ordersList.filter((order: Order) => {
                    if (order.parcel_id.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                        return order;
                    }
                });

                this.setState({
                    filteredOrdersList: returnedFilteredOrders,
                })
            } else {
                this.setState({
                    filteredOrdersList: ordersList,
                })
            }
        }
    }

    handleDetails = (order: Order) => {
        this.setState({
            selectedOrder: order,
            isDetailsModalOpen: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            selectedOrder: undefined,
            isDetailsModalOpen: false
        });
    }

    render() {
        const { filteredOrdersList, loading, selectedOrder, isDetailsModalOpen } = this.state;

        return (
            <Box
                boxShadow="0 15px 17px 0 rgb(0 0 0 / 16%), 0 15px 17px 0 rgb(0 0 0 / 12%)"
                border="1px black solid"
                borderRadius="8px"
                p={2}
                mt={2}
            >
                <AppHeader handleSearch={this.handleSearch} />
                <Box
                    mt={2}
                    pb={2}
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                >
                    <TableContainer>
                        {!loading
                            ? <Table stickyHeader aria-label="sticky table">
                                <TableHead className="TableHead_Custom">
                                    <TableRow>
                                        <TableCell className="TableCell_Parcel_No">Parcel No</TableCell>
                                        <TableCell className="TableCell_Last_Update">Last updated</TableCell>
                                        <TableCell className="TableCell_Sender">Sender</TableCell>
                                        <TableCell className="TableCell_Status">Status</TableCell>
                                        <TableCell className="TableCell_Eta">Estimated delivery</TableCell>
                                        <TableCell className="TableCell_Actions">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {filteredOrdersList && filteredOrdersList.length > 0 
                                        ? <OrdersList
                                            ordersList={filteredOrdersList}
                                            handleDetails={this.handleDetails}
                                        />
                                        : <TableRow className="TableRow_Custom">
                                            <TableCell
                                                className="TableCell_NotData"
                                                colSpan={8}>
                                                No orders available
                                            </TableCell>
                                        </TableRow>
                                    }
                                </TableBody>
                            </Table>
                            : <SkeletonLoader />
                        }
                    </TableContainer>

                    {isDetailsModalOpen && selectedOrder &&
                        <DetailsModal
                            handleCloseModal={this.handleCloseModal}
                            open={isDetailsModalOpen}
                            order={selectedOrder}
                        />
                    }
                </Box>
            </Box>
        );
    }
}

export default OrdersManagement;