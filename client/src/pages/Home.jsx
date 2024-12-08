import React from 'react'
import Header from '../component/Header'
import RecommededFood from "../component/RecomendedFood.jsx";
import Service from '../component/Service.jsx';
import NewFoods from '../component/NewFoods.jsx';
import ServiceTwo from '../component/ServiceTwo.jsx';
import Special from '../component/Special.jsx';

export default function Home() {
  return (
    <div>
        <Header/>
        <RecommededFood/>
        <Service/>
        <NewFoods/>
        <ServiceTwo/>
        <Special/>
    </div>
  )
}