import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-native'
import { StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import {Layout, Text, Icon, Button} from '@ui-kitten/components'
import customStyles from '../styles'
import Vars from '../variables'

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



const SingleFoodItem = () => {
    const [value, setValue] = React.useState('1');
    let history = useHistory();

    const handleClick = () => {
        history.push('/cart');
    }

  return (
    <SafeAreaView style={[styles.safeArea,customStyles.flex,{backgroundColor : '#F3F3F3'}]}>

            
        <Layout style={[customStyles.flex,{backgroundColor : '#f3f3f3'}]}>

            <Layout style={[styles.singleHero,{position : 'relative'}]}>


              <Image source={require('../assets/images/singleFood.png')} style={[customStyles.h100,customStyles.w100]} />

                <Link to='/singleRes' style={{position : 'absolute',top : 16,left : 16}}>
                    <Layout style={[styles.backBtn,customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                        <BackIcon/>
                    </Layout>
                </Link>
                
              <Layout style={[styles.singleHeroTitle]}>

                <Layout style={[customStyles.px16,customStyles.mt16]}>
                  <Text category="h1" style={[customStyles.textColorPrimary,customStyles.font24,customStyles.fontBold]}>
                    Cheesy Bites Trio 
                  </Text>

                  <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary]}>
                    Fast Food, Burger
                  </Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,customStyles.px16,{marginTop : 10,marginBottom : 10}]}>
                    <Text category='h6' style={[customStyles.font16,customStyles.colorPrimary]}>650 BDT</Text>
                </Layout>

              </Layout>

            </Layout>

            <Layout style={[customStyles.px16,{marginTop : 92,backgroundColor : '#f3f3f3'}]}>

                <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.justifyContentBetween, customStyles.alignItemsCenter]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter,{backgroundColor : '#f3f3f3'}]}>
                        <Text style={[customStyles.font16,customStyles.textColorPrimary]}>
                            Qty
                        </Text>
                    </Layout>

                    <Layout style={[customStyles.flex, customStyles.flexRow,{justifyContent : 'flex-end',backgroundColor : '#f3f3f3'}]}>
                        <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8,marginRight : 8}]}>
                            <MinusIcon/>
                        </Layout>

                        <Layout style={[styles.customInputField,{marginRight : 8}]}>
                            <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>{value}</Text>
                        </Layout>

                        <Layout style={[styles.customInputField,{paddingTop : 8,paddingLeft : 8, backgroundColor : Vars.primary}]}>
                            <PlusIcon/>
                        </Layout>
                    </Layout>

                </Layout>

                <Layout style={[customStyles.flex, customStyles.flexRow, customStyles.justifyContentBetween, customStyles.alignItemsCenter,{marginTop : 50}]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter,{backgroundColor : '#f3f3f3'}]}>
                        <Text style={[customStyles.font16,customStyles.textColorPrimary]}>
                            Size
                        </Text>
                    </Layout>

                    <Layout style={[customStyles.flex, customStyles.flexRow,{justifyContent : 'flex-end',backgroundColor : '#f3f3f3'}]}>

                        <Layout style={[styles.customInputField,{marginRight : 8,backgroundColor : Vars.primary}]}>
                            <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>12"</Text>
                        </Layout>

                        <Layout style={[styles.customInputField,{marginRight : 8}]}>
                            <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>14"</Text>
                        </Layout>

                        <Layout style={[styles.customInputField,{marginRight : 8}]}>
                            <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>16"</Text>
                        </Layout>

                        <Layout style={[styles.customInputField]}>
                            <Text category='p1' style={[customStyles.font16,customStyles.textColorPrimary,{textAlign : 'center',marginTop : 5}]}>20"</Text>
                        </Layout>

                    </Layout>

                </Layout>
            </Layout>
            
            <Layout style={[customStyles.px24,customStyles.w100,{position : 'absolute', bottom : 10}]}>
 
                <Button style={{backgroundColor : Vars.primary,borderWidth : 0,width : '100%'}} onPress = {handleClick}>
                    Add to Cart
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
  }
});

export default SingleFoodItem