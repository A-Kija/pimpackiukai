import { useEffect, useState } from 'react';

function Top({alio}) {



    useEffect(() => {
        console.log('Top did mount');
        return () => {
            console.log('Top is DEAD');
        }
    }, []);
  
    return (
    <div className="container top">
        <div className="row">
            <div className="col-sm">
                <h1>Zoo Museum {alio}</h1>
            </div>
        </div>
    </div>
  );
}

export default Top;