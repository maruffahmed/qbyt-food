import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import Vars from '../variables'
import customStyles from '../styles' 

// Icons
const StarIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.primary}
        name='star'
    />
);

const ClockIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.primary}
        name='clock-outline'
    />
);

const NavigationIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.primary}
        name='pin-outline'
    />
);

// Card header
const Header = ({thumb}) => {
    return (
        <Layout style={[customStyles.p0,MdCardStyle.cardHeader,{overflow : 'hidden'}]}>
            <Image source={thumb} style={[customStyles.w100,customStyles.h100]}  />
        </Layout>
    )
}

// Medium card component
const MdCard = ({item}) => {
    return(
        <Card 
            header = {() => Header(item)}
            style={[customStyles.mr16,MdCardStyle.mediumCardSize,customStyles.p0,customStyles.borderR]}
        >
            <Layout style={MdCardStyle.cardBody}>

                <Layout>
                    <Text category="h1" style={[customStyles.font16,customStyles.fontBold,customStyles.textColorPrimary]}>{item.title}</Text>
                    <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,customStyles.mt8]}>{item.items}</Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.mt32]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter]}>
                        <StarIcon/>
                        <Text category='h6' style={[customStyles.ml8,customStyles.font12,customStyles.textColorPrimary]}> <Text style={{fontWeight : 'bold'}}>{item.rat}</Text> (250)</Text>
                    </Layout>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.mt8]}>
                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter]}>
                            <ClockIcon/>
                            <Text category='p1' style={[customStyles.font12,customStyles.colorPrimary,customStyles.ml8]}>38'</Text>
                        </Layout>

                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter]}>
                            <NavigationIcon/>
                            <Text category='p1' style={[customStyles.font12,customStyles.colorPrimary,customStyles.ml8]}>300m</Text>
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
    }
})

export default MdCard;