import React from 'react'
import {Image, StyleSheet} from 'react-native'
import { Layout, Text, Card, Icon } from '@ui-kitten/components'
import Vars from '../../variables'
import customStyles from '../../styles' 
import {Link} from 'react-router-native'

// Icons
const AddIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.textPrimary}
        name='plus-outline'
    />
);


// Medium card component
const foodListCard = ({item}) => {
    return(
        <Card 
            style={[MdCardStyle.mediumCardSize,customStyles.p0,customStyles.borderR,customStyles.mt16]}
        >
            <Layout style={MdCardStyle.cardBody,customStyles.flex,customStyles.flexRow}>

                <Layout style={[MdCardStyle.cardBodyImage]}>
                    <Link to="/singleFood">
                        <Image source={item.thumb} style={[customStyles.w100,{borderRadius : 10}]}/>
                    </Link>
                </Layout>

                <Layout style={{paddingLeft : 16}}>
                    <Layout>
                        <Link to="/singleFood">
                            <Text category="h1" style={[customStyles.font16,customStyles.fontBold,customStyles.textColorPrimary]}>{item.name}</Text>
                        </Link>
                        <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary,customStyles.mt8]}>{item.items}</Text>
                    </Layout>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.mt24]}>

                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween, customStyles.alignItemsCenter]}>
                            <Text category='h6' style={[customStyles.font12,customStyles.colorPrimary]}>{item.price}</Text>

                            <Layout style={[MdCardStyle.addBtn, customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                                <AddIcon />
                            </Layout>

                        </Layout>

                    </Layout>
                </Layout>

                
            </Layout>

        </Card>
    )
}

const MdCardStyle = StyleSheet.create({
    mediumCardSize : {
        width : '100%'
    },
    cardHeader : {
        height : 112
    },
    cardBody : {
        height : 96
    },
    cardBodyImage : {
        width : 112
    },
    addBtn : {
        width : 40,
        height : 40,
        backgroundColor : Vars.primary,
        borderRadius : 50
    }
})

export default foodListCard;