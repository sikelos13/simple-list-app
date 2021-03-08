import { shallow } from 'enzyme';
import AppHeader from "../../components/AppHeader";
import { Input } from '@material-ui/core';

const ViewHeaderProps = {
    handleSearch: () => {
        console.log('selected')
    }}

describe("Header renders", () => {
    it('renders with props when passed in', () => {

        const result = shallow(<AppHeader {...ViewHeaderProps} />).contains(<Input />);
        expect(result).toMatchSnapshot();
    });

    it("renders header", () => {
        const wrapper = shallow(<AppHeader {...ViewHeaderProps} />);
        const header = <h2>Orders Management</h2>;
        expect(wrapper.contains(header)).toEqual(true);
      });

    it('should input change', () => {

        const container = shallow(<AppHeader {...ViewHeaderProps} />);

        const addButton = container.find(Input);
        addButton.simulate('change');

        expect(addButton.prop('onChange')).toBeTruthy();
    });

});

