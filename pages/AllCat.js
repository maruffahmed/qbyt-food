import React from 'react';
import {Link} from 'react-router-native'
import { StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native'
import {Layout, Text, Icon} from '@ui-kitten/components'
import SmCard from '../components/SmCard'
import customStyles from '../styles'
import Vars from '../variables'

const BackIcon = () => (
    <Icon
        style={[customStyles.iconStyle,customStyles.fontBold]}
        fill= {Vars.textPrimary}
        name='arrow-back'
    />
);



const AllCategory = () => {

  return (
    <SafeAreaView style={[styles.safeArea,customStyles.flex,customStyles.bgW]}>
        <ScrollView>
            
            <Layout style={[customStyles.flex,styles.AllCatBg,customStyles.px16,customStyles.pt32]}>

                <Link to='/'>
                    <Layout style={[styles.backBtn,customStyles.justifyContentCenter,customStyles.alignItemsCenter]}>
                            <BackIcon/>
                    </Layout>
                </Link>

                <Layout style={[customStyles.mt24,customStyles.px16,styles.AllCatBg]}>
                    <Text category= "h1" style={[customStyles.font24,customStyles.fontBold]}>All Categories</Text>
                </Layout>

                <Layout style={[customStyles.flex,customStyles.mt24,customStyles.px16,styles.AllCatBg]}>
                    <Layout style={[customStyles.mb16,customStyles.flex,customStyles.flexRow,styles.catItems,styles.AllCatBg,{flexWrap : 'wrap'}]}>
                        <SmCard item={{title : "Food",thumb : require("../assets/images/cat1.png")}}/>
                        <SmCard item={{title : "Drink",thumb : require("../assets/images/cat2.png")}}/>
                        <SmCard item={{title : "Pizza",thumb : require("../assets/images/cat3.png")}}/>
                    </Layout>

                    <Layout style={[customStyles.mb16,customStyles.flex,customStyles.flexRow,styles.catItems,styles.AllCatBg,{flexWrap : 'wrap'}]}>
                        <SmCard item={{title : "Food",thumb : require("../assets/images/cat1.png")}}/>
                        <SmCard item={{title : "Drink",thumb : require("../assets/images/cat2.png")}}/>
                        <SmCard item={{title : "Pizza",thumb : require("../assets/images/cat3.png")}}/>
                    </Layout>

                    <Layout style={[customStyles.mb16,customStyles.flex,customStyles.flexRow,styles.catItems,styles.AllCatBg,{flexWrap : 'wrap'}]}>
                        <SmCard item={{title : "Food",thumb : require("../assets/images/cat1.png")}}/>
                        <SmCard item={{title : "Drink",thumb : require("../assets/images/cat2.png")}}/>
                        <SmCard item={{title : "Pizza",thumb : require("../assets/images/cat3.png")}}/>
                    </Layout>

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
  AllCatBg : {
      backgroundColor : '#FFEFD1'
  },
  backBtn : {
      width : 50,
      height : 50,
      borderRadius : 50
  },
  catItems : {
      maxHeight : 160
  }
});

export default AllCategory