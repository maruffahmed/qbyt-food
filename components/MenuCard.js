import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import Vars from '../variables'
import customStyles from '../styles' 

// Icons
const AddIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.textPrimary}
        name='plus-outline'
    />
);


// Medium card component
const MenuCard = ({item}) => {
    let bg = item.active ? Vars.primary : '#fff';
    return(
        <Card 
            style={[customStyles.mr16,styles.mediumCardSize,customStyles.p0,customStyles.borderR,customStyles.alignItemsCenter,customStyles.justifyContentCenter,{backgroundColor : bg}]}
        >
            <Text category="p1" style={[customStyles.font12,{textAlign : 'center'}]}>{item.name}</Text>

        </Card>
    )
}

const styles = StyleSheet.create({
    mediumCardSize : {
        width : 96,
        height : 35
    }
})

export default MenuCard;