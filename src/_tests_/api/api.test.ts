import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchOrdersApi, FetchOrdersApiResponse} from '../../api/orders_management/fetchOrders';

const ordersList = [
    {
        "id": "235623dnrt56jfnd",
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
        "last_updated": "2020-04-23T09:58:52Z"
    }
];

describe('Fetch order list api', () => {
    it('returns data when fetchOrdersApi is called', done => {
        const mock = new MockAdapter(axios);
        const data = { response: ordersList };
        mock.onGet(`${process.env.REACT_APP_API_ENDPOINT}orders`).reply(200, data);

        fetchOrdersApi().then((response: FetchOrdersApiResponse) => {
            expect(response.data).toEqual(data);
            done();
        });
    });
});