import React from 'react';
import {Layout, Text, List} from '@ui-kitten/components'
import customStyles from '../../styles'

function HorizontalListView({data,renderListItem,...props}) {
    return (
      <Layout style={[customStyles.flex,customStyles.mt16]}>
        <List 
          horizontal
          data = {data}
          renderItem={renderListItem}
          style = {customStyles.bgW}
        />
      </Layout>
    );
}

export default HorizontalListView;