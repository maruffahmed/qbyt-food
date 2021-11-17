import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import { ApplicationProvider,IconRegistry, Text } from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
// import {default as mapping} from './mapping.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Home from './pages/home'
import AllCategory from './pages/AllCat';
import SingleRes from './pages/SingleRes';
import SingleFoodItem from './pages/singleFoodItem';
import Cart from './pages/cart';


export default function App() {
  return (
    <NativeRouter>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>

        <Route exact path="/" component={Home} />
        <Route path="/allcat" component={AllCategory} />
        <Route path="/singleRes" component={SingleRes} />
        <Route path="/singleFood" component={SingleFoodItem} />
        <Route path="/cart" component={Cart} />

      </ApplicationProvider>
    </NativeRouter>
  );
}
