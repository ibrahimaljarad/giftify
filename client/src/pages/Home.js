import React from 'react';
import Card from '../components/Card';
import Hero from '../components/Hero'

export default function Home() {
    return (
        <div>
           
           <Hero />
           <h1 className="font-bold text-4xl mt-5">GRAP YOUR GIFT</h1>
           <div className="grid grid-cols-3 m-24">
           <Card />
           <Card />
           <Card />
           <Card />
           </div>
        </div>
    )
}
