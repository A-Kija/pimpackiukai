import { useState } from 'react';
import rand from '../Functions/rand';
function Tu6() {

    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);

    const resetBalls = () => {
        setRight([]);
        const count = rand(5, 15);
        const balls = [];
        for (let i = 0; i < count; i++) {
            balls.push(i + 1);
        }
        setLeft(balls);
    }

    const move = (b, side) => {
        if ('L' === side) {
            setLeft(balls => balls.filter(ball => ball !== b));
            setRight(balls => [...balls, b].sort((a, b)=> a - b));
        }
        else {
            setRight(balls => balls.filter(ball => ball !== b));
            setLeft(balls => [...balls, b].sort((a, b)=> a - b));
        }
    }


    return (
        <>
            <div className="kvc">
                <button className="button" onClick={resetBalls}>RESET</button>
            </div>
            <div style={{
                display: 'flex'
            }}>
                <div className="kvc" style={{
                    width: '50%',
                    background: '#aabbaa'
                }}>
                    {
                        left.map(b => <div onClick={() => move(b, 'L')} key={b} className="kv kv_3 aps">{b}</div>)
                    }
                </div>
                <div className="kvc" style={{
                    width: '50%',
                    background: '#bbbbaa'
                }}>
                    {
                        right.map(b => <div onClick={() => move(b, 'R')} key={b} className="kv kv_3 aps">{b}</div>)
                    }
                </div>
            </div>
        </>
    )
}

export default Tu6;
