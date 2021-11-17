import React from 'react';
import {Layout, Icon, Input} from '@ui-kitten/components'
import customStyles from '../styles' 

const SearchIcon = (props) => (
    <Icon {...props} name='search'/>
  );

function SearchBar() {
    return (
        <Layout style={[customStyles.px24,customStyles.flex,{marginTop : 32}]}>
          <Input
            placeholder='Search for dish or restaurant'
            accessoryLeft = {SearchIcon}
          />
        </Layout>
    );
}

export default SearchBar;