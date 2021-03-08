import OrdersManagement from "../../containers/OrdersManagement";
import { shallow, mount } from 'enzyme';
import OrdersList from "../../components/orders_management/OrdersList";

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
  "last_updated": "2020-04-23T09:58:52Z"},
];

const OrdersListProps = {
    ordersList: ordersList,
    handleDetails: () => {
        console.log('selected')
    }
}

describe("Orders management container renders", () => {
  it('renders children when passed in', () => {
    const result = shallow((
      <OrdersManagement>
        <div className="unique" />
      </OrdersManagement>
    ));

    expect(result).toBeTruthy();
  });

  it('should render list component', () => {

    const wrapper = mount(<OrdersList {...OrdersListProps} />);
    expect(wrapper.find(OrdersList).length).toEqual(1);

  });
});