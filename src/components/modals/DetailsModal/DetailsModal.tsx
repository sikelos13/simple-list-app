import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import { Order } from '../../../api/types/Order';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { FormLabel } from '@material-ui/core';
import { getOrderStatus } from "../../../utils/getOrderStatus";
import { getHasEtaTime } from "../../../utils/getHasEtaTime";
import { DateFormat } from "../../../utils/DateFormat";
import Link from '@material-ui/core/Link';

interface DetailsModalProps {
    handleCloseModal: () => void;
    open: boolean;
    order: Order;
}

const DetailsModal: React.FC<DetailsModalProps> = (({ order, open, handleCloseModal }: DetailsModalProps) => (
    <Dialog onClose={handleCloseModal} open={open}>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Parcel Number: {order.parcel_id}
        </DialogTitle>
        <DialogContent>
            <Box>
                <FormControlLabel
                    control={<Switch color="primary" checked={order.verification_required} readOnly />}
                    label="Verification required"
                />
                <FormControlLabel
                    control={<Switch color="primary" checked={order.location_status_ok} readOnly />}
                    label="Location status"
                />
                <Box display="flex" alignItems="center">
                    <FormLabel>Status:</FormLabel>
                    <Box p={1}>{getOrderStatus(order.status)}</Box>
                </Box>
                {getHasEtaTime(order.status) &&
                    <Box display="flex" alignItems="center">
                        <FormLabel>ETA:</FormLabel>
                        <Box p={1}>{DateFormat.normalize(order.eta)}</Box>
                    </Box>
                }
                <Box display="flex" alignItems="center">
                    <FormLabel>Sender:</FormLabel>
                    <Box p={1}>{order.sender}</Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <FormLabel>User phone:</FormLabel>
                    <Box p={1}>{order.user_phone}</Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <FormLabel>User name:</FormLabel>
                    <Box p={1}>{order.user_name}</Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <FormLabel>Last updated:</FormLabel>
                    <Box p={1}>{DateFormat.normalize(order.last_updated)}</Box>
                </Box>
                {order.notes !== "" &&
                    <Box display="flex" alignItems="center">
                        <FormLabel>Notes:</FormLabel>
                        <Box p={1}>{order.notes}</Box>
                    </Box>
                }
                <Box display="flex" alignItems="center">
                    <FormLabel>Location ID:</FormLabel>
                    <Box p={1}>{order.location_id}</Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <FormLabel>Location name:</FormLabel>
                    <Box p={1}>{order.location_name}</Box>
                </Box>
                <Link
                    target="_blank"
                    href={`https://www.google.com/maps/search/?api=1&query=${order.location_coordinate_latitude},${order.location_coordinate_longitude}`}
                >
                    Show location on map
                </Link>
            </Box>
        </DialogContent>
        <DialogActions>
            <Button autoFocus onClick={handleCloseModal} color="primary">
                Close
          </Button>
        </DialogActions>
    </Dialog>
));

export default DetailsModal;