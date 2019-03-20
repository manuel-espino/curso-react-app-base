import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import RepositoryList from './RepositoryList';

configure({ adapter: new Adapter() });

describe('RepositoryList', () => {

        it('Should render a loading message', () => {
            const repositoryList = shallow(
                <RepositoryList data={ [] } total={ 0 } loading={ true }
                queried={ false } search={'test'} />
            );

            console.log(repositoryList.debug());

            expect(repositoryList.find('HintMessage').length).toEqual(1);

        })
});