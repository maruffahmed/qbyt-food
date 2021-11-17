import React from 'react';
import {Link} from 'react-router-native'
import { StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar, Image } from 'react-native'
import {Layout, Text, Icon, List} from '@ui-kitten/components'
import customStyles from '../styles'
import Vars from '../variables'
import HorizontalListView from '../components/home/HorizontalListView'
import {singleResProducts,singleResItemsMenu} from './Data'
import PopulerCard from '../components/PopulerCard'
import MenuCard from '../components/MenuCard'
import foodListcard from '../components/singleResPage/foodListCard'

const BackIcon = () => (
    <Icon
        style={[customStyles.iconStyle,customStyles.fontBold]}
        fill= {Vars.textPrimary}
        name='arrow-back'
    />
);

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



const SingleRes = () => {

  return (
    <SafeAreaView style={[styles.safeArea,customStyles.flex,{backgroundColor : '#F3F3F3'}]}>
        <ScrollView>
            
          <Layout style={[customStyles.flex]}>

            <Layout style={[styles.singleHero,{position : 'relative'}]}>
              <Image source={require('../assets/images/singleHero.png')} style={[customStyles.h100,customStyles.w100]} />

              <Link to='/' style={{position : 'absolute',top : 16,left : 16}}>
                  <Layout style={[styles.backBtn,customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                      <BackIcon/>
                  </Layout>
              </Link>

              <Layout style={[styles.singleHeroTitle]}>

                <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.px16,customStyles.pt16,{maxHeight : 40}]}>
                  <Text style={[customStyles.colorPrimary,styles.active,customStyles.font12]}>
                    Delivery
                  </Text>

                  <Text category = "p1" style={[customStyles.font12,customStyles.textColorPrimary,{marginLeft : 40}]}>
                    Menu
                  </Text>

                </Layout>

                <Layout style={[customStyles.px16,customStyles.mt16]}>
                  <Text category="h1" style={[customStyles.textColorPrimary,customStyles.font24,customStyles.fontBold]}>
                    Pizza Burg - Pizza Zone
                  </Text>

                  <Text category="p1" style={[customStyles.font12,customStyles.textColorSecondary]}>
                    Fast Food, Burger
                  </Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,customStyles.px16,{marginTop : 10,marginBottom : 10}]}>

                    <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.alignItemsCenter]}>
                        <StarIcon/>
                        <Text category='h6' style={[customStyles.ml8,customStyles.font12,customStyles.textColorPrimary]}> <Text style={{fontWeight : 'bold'}}>4.7</Text> (250)</Text>
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

            </Layout>

            <Layout style={[customStyles.px16,{marginTop : 92}]}>
              <Text category="h1" style={[customStyles.font16, customStyles.fontBold]}>
                Popular Deal
              </Text>

              <HorizontalListView 
                data={singleResProducts} 
                renderListItem = {PopulerCard}
              />

            </Layout>

            <Layout style={[customStyles.px16,{marginTop : 48}]}>
                <HorizontalListView 
                  data={singleResItemsMenu} 
                  renderListItem = {MenuCard}
                />
            </Layout>

            
            <Layout style={[customStyles.px16,customStyles.mt32]}>
                <List
                  data = {singleResProducts}
                  renderItem={foodListcard}
                  style = {customStyles.bgW}
                />
            </Layout>
              

          </Layout>

        </ScrollView>
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
    bottom : -60,
    left : '10%',
    elevation: 8
  },
  active : {
    borderBottomWidth : 2,
    borderBottomColor : '#F6A609'
  }
});

export default SingleRes