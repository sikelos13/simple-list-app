import OrdersList from "../../../components/orders_management/OrdersList";
import { shallow } from 'enzyme';
import { TableCell } from "../../../components/common/TableCellLoader/TableCell";

const ordersList = [
    {"id": "235623dnrt56jfnd",
        "status": "on-the-way",
        "eta": "2020-05-23T11:30:52Z",
        "parcel_id": "PR123456789",
        "sender": "Lyko",
        "verification_required": false,
        "location_id": "IN0012",
        "location_name": "Odenplan 7-Eleven",
        "location_coordinate_latitude": "59.3439911",
        "location_coordinate_longitude": "18.0503597",
        "location_status_ok": false,
        "user_phone": "+4607******123",
        "user_name": "Apple Smith",
        "notes": "",
        "last_updated": "2020-04-23T09:58:52Z"}
];

const OrdersListProps = {
    ordersList: ordersList,
    handleDetails: () => {
        console.log('selected')
    }
}

describe("Orders list container renders", () => {
    it('renders with props when passed in', () => {

        const result = shallow(<OrdersList {...OrdersListProps} />).contains(<TableCell />);
        expect(result).toMatchSnapshot();
    });

    it('finds the right div for mounting the orders list', () => {

        const container = shallow(<OrdersList {...OrdersListProps} />);

        expect(container.find('div#table-row')).toBeTruthy();
    });
});