import React, {useState} from 'react';
import './style.css';
import FuncComponent, {ClassComponent} from './component';

const App = () =>{
    const [funcState, setfuncState] = useState(true)
    const Box1 = () => {setfuncState((state) => !state)};

    const [classState, setclassState] = useState(true)
    const Box2 = () => {setclassState((state) => !state)};

    return(
        <>
        <div className='box3'>
            <button className='btn' onClick={()=>{Box1()}}>To see styling in Functional component</button>
            <button className='btn' onClick={()=>{Box2()}}>To see styling in Class component</button>
        </div>
        <div className='box4'>
            {!funcState ? <FuncComponent/> : null}
            {!classState ? <ClassComponent/> : null}
        </div>
    </>
    )
}

export default App;