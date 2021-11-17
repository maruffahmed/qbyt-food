import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import { Layout, Text, Card } from '@ui-kitten/components'
import customStyles from '../styles' 


// Card header
const Header = ({thumb}) => {
    return (
        <Layout style={[customStyles.p0,SmallCardStyles.cardHeader,{overflow : 'hidden'}]}>
            <Image source={thumb} style={[customStyles.w100,customStyles.h100]}  />
        </Layout>
    )
}

// Medium card component
const SmCard = ({item}) => {
    return(
        <Card 
            header = {() => Header(item)}
            style={[customStyles.mr16,SmallCardStyles.smallCardSize,customStyles.borderR]}
        >
            <Layout style={[SmallCardStyles.cardBody,{marginHorizontal : -24}]}>

                <Layout style={[customStyles.flex,customStyles.alignItemsCenter,customStyles.justifyContentCenter]}>
                    <Text category="h1" style={[customStyles.font16,customStyles.fontBold,customStyles.textColorPrimary]}>{item.title}</Text>
                    <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,{marginTop : 3}]}>365 Places</Text>
                </Layout>

            </Layout>
        </Card>
    )
}

const SmallCardStyles = StyleSheet.create({
    smallCardSize : {
        width : 96
    },
    cardHeader : {
        height : 72
    },
    cardBody : {
        height : 56
    }
})

export default SmCard;