import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import Vars from '../variables'
import customStyles from '../styles' 
import {Link} from 'react-router-native'

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
        <Layout style={[customStyles.p0,LgCardStyle.cardHeader,{overflow : 'hidden'}]}>
            <Link to="/singleRes">
                <Image source={thumb} style={[customStyles.w100,customStyles.h100]}  />
            </Link>
        </Layout>
    )
}

// Medium card component
const LgCard = ({item}) => {
    return(
        

        <Card 
            header = {() => Header(item)}
            style={[customStyles.mr16,LgCardStyle.mediumCardSize,customStyles.p0,customStyles.borderR]}
        >
            <Layout style={LgCardStyle.cardBody}>

                <Layout>
                    <Link to="/singleRes">
                        <Text category="h1" style={[customStyles.font16,customStyles.fontBold,customStyles.textColorPrimary]}>{item.title}</Text>
                    </Link>
                    <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,customStyles.mt8]}>{item.items}</Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,{marginTop : 10}]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter]}>
                        <StarIcon/>
                        <Text category='h6' style={[customStyles.ml8,customStyles.font12,customStyles.textColorPrimary]}> <Text style={{fontWeight : 'bold'}}>{item.rat}</Text> (250)</Text>
                    </Layout>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween]}>
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

const LgCardStyle = StyleSheet.create({
    mediumCardSize : {
        width : 256
    },
    cardHeader : {
        height : 112
    },
    cardBody : {
        height : 80
    }
})

export default LgCard;