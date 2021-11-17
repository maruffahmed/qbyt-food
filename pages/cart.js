import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import {Layout, Text, Icon, Button} from '@ui-kitten/components'
import customStyles from '../styles'
import Vars from '../variables'
import {Link} from 'react-router-native'

// Icons
const PlusIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.textPrimary}
        name='plus-outline'
    />
);
const BackIcon = () => (
    <Icon
        style={[customStyles.iconStyle,customStyles.fontBold]}
        fill= {Vars.textPrimary}
        name='arrow-back'
    />
);

const MinusIcon = () => (
    <Icon
        style={customStyles.iconStyle}
        fill= {Vars.textPrimary}
        name='plus-outline'
    />
);

export const Badge = () => {
    return (
        <Layout style={[styles.badge]}>
            <Text category='p1' style={[customStyles.fontBold]}>2</Text>
        </Layout>
    )
} 

const Cart = () => {

    return (
        <SafeAreaView style={[styles.safeArea,customStyles.flex,{backgroundColor : '#F3F3F3'}]}>

                
            <Layout style={[customStyles.flex,{backgroundColor : '#f3f3f3'}]}>

             <Link to='/singleFood' style={{position : 'absolute',top : 16,left : 16}}>
                  <Layout style={[styles.backBtn,customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                      <BackIcon/>
                  </Layout>
              </Link>

                <Layout style={[customStyles.px16,{marginTop : 92,backgroundColor : '#f3f3f3'}]}>

                    <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.justifyContentBetween, customStyles.alignItemsCenter]}>

                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter,{backgroundColor : '#f3f3f3'}]}>
                            <Text style={[customStyles.font16,customStyles.textColorPrimary]}>
                                Shrimp Pizaa
                            </Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,{justifyContent : 'flex-end',backgroundColor : '#f3f3f3'}]}>
                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8,marginRight : 8}]}>
                                <MinusIcon/>
                            </Layout>

                            <Layout style={[styles.customInputField,{marginRight : 8}]}>
                                <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>1</Text>
                            </Layout>

                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8, backgroundColor : Vars.primary}]}>
                                <PlusIcon/>
                            </Layout>

                            <Text style={[customStyles.font16, customStyles.textColorPrimary,{marginTop : 5, marginLeft : 15}]}>
                                Tk 450
                            </Text>
                        </Layout>

                    </Layout>

                    <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.justifyContentBetween, customStyles.alignItemsCenter,{marginTop : 45}]}>

                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter,{backgroundColor : '#f3f3f3'}]}>
                            <Text style={[customStyles.font16,customStyles.textColorPrimary]}>
                                Sub
                            </Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,{justifyContent : 'flex-end',backgroundColor : '#f3f3f3'}]}>
                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8,marginRight : 8}]}>
                                <MinusIcon/>
                            </Layout>

                            <Layout style={[styles.customInputField,{marginRight : 8}]}>
                                <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>2</Text>
                            </Layout>

                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8, backgroundColor : Vars.primary}]}>
                                <PlusIcon/>
                            </Layout>

                            <Text style={[customStyles.font16, customStyles.textColorPrimary,{marginTop : 5, marginLeft : 15}]}>
                                Tk 560
                            </Text>
                        </Layout>

                    </Layout>

                    <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.justifyContentBetween, customStyles.alignItemsCenter,{marginTop : 45}]}>

                        <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter,{backgroundColor : '#f3f3f3'}]}>
                            <Text style={[customStyles.font16,customStyles.textColorPrimary]}>
                                Set Menu 2
                            </Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,{justifyContent : 'flex-end',backgroundColor : '#f3f3f3'}]}>
                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8,marginRight : 8}]}>
                                <MinusIcon/>
                            </Layout>

                            <Layout style={[styles.customInputField,{marginRight : 8}]}>
                                <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>1</Text>
                            </Layout>

                            <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8, backgroundColor : Vars.primary}]}>
                                <PlusIcon/>
                            </Layout>

                            <Text style={[customStyles.font16, customStyles.textColorPrimary,{marginTop : 5, marginLeft : 15}]}>
                                Tk 230
                            </Text>
                        </Layout>

                    </Layout>


                    <Layout style={[customStyles.px16,customStyles.pt16,styles.order,{marginTop : 50, paddingBottom : 16}]}>
                        
                        <Layout style={[customStyles.flex, customStyles.flexRow,customStyles.justifyContentBetween,{backgroundColor : '#FFEFD1'}]}>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Subtotal</Text>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Tk 1240</Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,customStyles.justifyContentBetween,{backgroundColor : '#FFEFD1'}]}>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Delivery fee</Text>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Tk 0</Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,customStyles.justifyContentBetween,{backgroundColor : '#FFEFD1'}]}>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Discount</Text>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Tk 0</Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,customStyles.justifyContentBetween,{borderTopWidth : 2, borderTopColor : '#000',backgroundColor : '#FFEFD1'}]}>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Total (inc. VAT)</Text>
                                <Text style={[customStyles.textColorPrimary,customStyles.font16, customStyles.fontBold]}>Tk 1240</Text>
                        </Layout>
                    </Layout>

                    <Layout style={[customStyles.px16,customStyles.pt16,styles.order,{marginTop : 20, paddingBottom : 16}]}>
                        
                        <Layout style={{backgroundColor : '#FFEFD1'}}>
                            <Text category="p1" style={[customStyles.font16]}>Delivery Details</Text>
                            <Text category="p1" style={[customStyles.font16, customStyles.textColorSecondary,customStyles.mt8]}>202 Rd No. 9,Uttara, Dhaka</Text>
                        </Layout>

                        <Layout style={[customStyles.flex, customStyles.flexRow,customStyles.justifyContentBetween,{borderTopWidth : 2, borderTopColor : '#000',backgroundColor : '#FFEFD1', marginTop : 50}]}>
                            <Text style={[customStyles.textColorPrimary,customStyles.font16]}>Delivery Time</Text>
                                <Text style={[customStyles.textColorPrimary,customStyles.font16]}>ASAP (30 min)</Text>
                        </Layout>
                    </Layout>

                    
                </Layout>
                
                <Layout style={[customStyles.px24,customStyles.w100,{position : 'absolute', bottom : 10}]}>
                    <Button style={[{backgroundColor : Vars.primary,borderWidth : 0,width : '100%'}]}>

                    {/* <Layout style={[styles.badge]}>
                        <Text category='p1' style={[customStyles.fontBold]}>2</Text>
                    </Layout> */}

                    <Text category="p1" style={{color : '#fff', textAlign : 'center'}}>
                        Place Order
                    </Text>
                    </Button>
                </Layout>
            </Layout>

        </SafeAreaView>
        
  );
};

const styles = StyleSheet.create({
  safeArea : {
    marginTop : Platform.OS == 'android' ? StatusBar.currentHeight : null
  },
  backBtn : {
      width : 50,
      height : 50,
      borderRadius : 50
  },
  singleHero : {
    height : 240
  },
  singleHeroTitle : {
    width : '80%',
    backgroundColor : '#ffffff',
    position : 'absolute',
    bottom : -50,
    left : '10%',
    borderRadius : 10,
    elevation: 8
  },
  customInputField : {
      width : 32,
      height : 32,
      backgroundColor : '#fff',
      borderRadius : 8
  },
  badge : {
      backgroundColor : '#fff',
      width : 24,
      height : 24,
      borderRadius : 50
  },
  order : {
      minHeight : 160,
      backgroundColor : '#FFEFD1',
      borderRadius : 10
  }
});

export default Cart