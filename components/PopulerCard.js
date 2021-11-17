import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import Vars from '../variables'
import customStyles from '../styles' 
import {Link} from 'react-router-native'

// Icons
const AddIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.textPrimary}
        name='plus-outline'
    />
);


// Card header
const Header = ({thumb}) => {
    return (
        <Layout style={[customStyles.p0,MdCardStyle.cardHeader,{overflow : 'hidden'}]}>
            <Link to="/singleFood">
                <Image source={thumb} style={[customStyles.w100,customStyles.h100]}  />
            </Link>
        </Layout>
    )
}

// Medium card component
const PopulerCard = ({item}) => {
    return(
        <Card 
            header = {() => Header(item)}
            style={[customStyles.mr16,MdCardStyle.mediumCardSize,customStyles.p0,customStyles.borderR]}
        >
            <Layout style={MdCardStyle.cardBody}>

                <Layout>
                    <Link to="/singleFood">
                        <Text category="h1" style={[customStyles.font16,customStyles.fontBold,customStyles.textColorPrimary]}>{item.name}</Text>
                    </Link>
                    <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,customStyles.mt8]}>{item.items}</Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.flexRow]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween, customStyles.alignItemsCenter]}>
                        <Text category='h6' style={[customStyles.font12,customStyles.colorPrimary]}>{item.price}</Text>

                        <Layout style={[MdCardStyle.addBtn, customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                            <AddIcon />
                        </Layout>

                    </Layout>

                </Layout>
                
            </Layout>

        </Card>
    )
}

const MdCardStyle = StyleSheet.create({
    mediumCardSize : {
        width : 176
    },
    cardHeader : {
        height : 112
    },
    cardBody : {
        height : 136
    },
    addBtn : {
        width : 40,
        height : 40,
        backgroundColor : Vars.primary,
        borderRadius : 50
    }
})

export default PopulerCard;