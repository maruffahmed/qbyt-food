import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Platform, StatusBar } from 'react-native'
import {Link} from 'react-router-native'
import {Layout, Text, List} from '@ui-kitten/components'
import LgCard from '../components/LgCard'
import SmCard from '../components/SmCard';
import customStyles from '../styles' 
import DeliveryAddress from '../components/home/DeliveryAddress';
import SearchBar from '../components/SearchBar';
import HorizontalListView from '../components/home/HorizontalListView';
import MdCard from '../components/MdCard';
import ListCardView from '../components/ListCardView';
import {popular, allRes, fastDelivery, categorys} from './Data'



const Home = () => {

  return (
    <SafeAreaView style={[styles.safeArea,customStyles.flex,customStyles.bgW]}>
      <ScrollView>

        <DeliveryAddress/>

        <SearchBar/>

        <Layout style={[customStyles.px24,customStyles.flex,customStyles.mt32]}>

          <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,customStyles.alignItemsCenter]}>

            <Text category= "h1" style={[customStyles.font24,customStyles.fontBold]}>Popular Near You</Text>

            <Link to="/" style={customStyles.colorPrimary}>
              <Text>View more</Text>
            </Link>

          </Layout>

          <HorizontalListView 
            data={popular} 
            renderListItem = {LgCard}
          />
        </Layout>

        <Layout style={[customStyles.px24,customStyles.flex,customStyles.mt32]}>

          <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,customStyles.alignItemsCenter]}>

            <Text category= "h1" style={[customStyles.font24,customStyles.fontBold]}>Explore Category</Text>
            
            <Link to="/allcat" style={customStyles.colorPrimary}>
              <Text>View more</Text>
            </Link>

          </Layout>

          <HorizontalListView 
            data={categorys} 
            renderListItem = {SmCard}
          />
        </Layout>


        <Layout style={[customStyles.px24,customStyles.flex,customStyles.mt32]}>

          <Layout style={[customStyles.flex,customStyles.flexRow,customStyles.justifyContentBetween,customStyles.alignItemsCenter]}>

            <Text category= "h1" style={[customStyles.font24,customStyles.fontBold]}>Fast Delivery</Text>
            
            <Link to="/about" style={customStyles.colorPrimary}>
              <Text>View more</Text>
            </Link>

          </Layout>

          <HorizontalListView 
            data={fastDelivery} 
            renderListItem = {MdCard}
          />
        </Layout>

        
        <Layout style={[customStyles.px24,customStyles.mt32]}>
          <Text style={[customStyles.textColorPrimary,customStyles.font24,customStyles.fontBold]} category='h1'>All Restaurant</Text>
          <Layout style={[customStyles.flex,customStyles.mt16]}>
            <List
              data = {allRes}
              renderItem={ListCardView}
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
  }
});

export default Home