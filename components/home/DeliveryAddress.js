import React from 'react';
import {Layout, Text, Icon} from '@ui-kitten/components'
import customStyles from '../../styles' 
import Vars from '../../variables'

const NavigationIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.primary}
        name='pin-outline'
    />
  );

function DeliveryAddress() {
    return (
        <Layout style={[customStyles.px24,customStyles.pt24,customStyles.flex]}>
          <Text category='h1' style={[customStyles.fontBold,customStyles.font16]}>Delivery to</Text>
          <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.alignItemsCenter,customStyles.mt8]}>
            <NavigationIcon/>
            <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,{marginLeft : 5}]}>R: 09, Sector: 10, Uttara</Text>
          </Layout>
        </Layout>
    );
}

export default DeliveryAddress;