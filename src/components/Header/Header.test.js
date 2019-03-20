import React from 'react';
import { shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
    
    it('Should render the header of the page.', () => {
        const header = shallow(<Header />);

        expect(header.text()).toEqual('Github Releases');
        expect(header.find('h1').length).toEqual(1);
    })
})