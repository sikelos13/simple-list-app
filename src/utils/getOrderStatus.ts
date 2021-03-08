export const getOrderStatus = (status: string) => {
    switch (status) {
        case 'on-the-way': {
            return "On the way";
        }
        case 'order-info-received': {
            return "Order info received";
        }
        case 'delivered': {
            return "Delivered";
        }
        case 'ready-for-pickup': {
            return "Ready for pickup";
        }
        default: return "—";
    }
};