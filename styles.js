import {StyleSheet} from 'react-native'
import Vars from './variables'

module.exports = StyleSheet.create({
    flex : {
        flex : 1
    },
    flexRow : {
        flexDirection : 'row'
    },
    justifyContentCenter : {
        justifyContent : 'center'
    },
    justifyContentBetween : {
        justifyContent : 'space-between'
    },
    alignItemsCenter : {
        alignItems : 'center'
    },
    iconStyle : {
        width : 16,
        height : 16
    },
    textColorPrimary : {
        color : Vars.textPrimary
    },
    textColorSecondary : {
        color : Vars.textSecondary
    },
    colorPrimary : {
        color : Vars.primary
    },
    bgW : {
        backgroundColor : '#fff'
    },
    font12 : {
        fontSize : 12
    }, 
    font16 : {
        fontSize : 16
    },
    font24 : {
        fontSize : 24
    },
    fontBold : {
        fontWeight : '700'
    },
    fontSemiBold : {
        fontWeight : '600'
    },
    mt8 : {
        marginTop : 8
    },
    mt16 : {
        marginTop : 16
    },
    mb16 : {
        marginBottom : 16
    },
    mt32 : {
        marginTop : 32
    },
    mt24 : {
        marginTop : 24
    },
    mb24: {
        marginBottom : 24
    },
    mr8 : {
        marginRight : 8
    },
    mr16 : {
        marginRight : 16
    },
    ml8 : {
        marginLeft : 8
    },
    ml16 : {
        marginLeft : 16
    },
    borderR : {
        borderRadius : 10
    },
    p0 : {
        padding : 0
    },
    p24 : {
        padding : 24
    },
    px24:{
        paddingLeft : 24,
        paddingRight : 24
    },
    pt24 : {
        paddingTop : 24
    },
    pt16 : {
        paddingTop : 16
    },
    px16 : {
        paddingRight : 16,
        paddingLeft : 16
    },
    pt32 : {
        paddingTop : 32
    },
    m0 : {
        margin : 0
    },
    w100 : {
        width : '100%'
    },
    h100 : {
        height : '100%'
    }
})