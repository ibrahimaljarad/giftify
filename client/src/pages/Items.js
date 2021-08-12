import React, {useState, useEffect} from 'react'
import Card from '../components/Card';

export default function Items({userData}) {
    const [allGifts, setAllGifts] = useState (null);
    
    useEffect(() => {
        const fetchGifts = async () => {
          const data = await fetch("http://localhost:8000/get-all-gift");
          const allGifts = await data.json();
          setAllGifts(allGifts);
        };
        fetchGifts();
      }, []);

    return (
        <div>
          <h1 className="font-bold text-4xl mt-5">{userData && userData.firstName ? <span style={{color:'#FF4500'}} > Welcome {userData?.firstName} !</span> : <span> PLEASE SIGN UP TO </span> } GRAP YOUR GIFT</h1>
          {allGifts? <div className="grid grid-cols-3 m-24">
              {allGifts.map((gift) => (<Card key={gift.id} gift={gift} userData={userData} />) )}
               </div> : ""}  
        </div>
    )
}
