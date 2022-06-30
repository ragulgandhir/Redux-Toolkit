import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'
import "../../App.css";

function CakeView(){
  const [value, setValue] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className='headerCake'>Number of cakes - {numOfCakes}</h2>
      <button className='btnStyleCakeOrdered' onClick={() => dispatch(ordered(value))}>Order Cake</button>
      <img className='imgStyleCake' src='https://www.color-name.com/wp-content/uploads/three-layer-white-cake-with-golden-ribbon.png' alt="" />
      <input
        type='number'
        className='inputtext'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button className='btnStyleCakeOrdered' onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  )
}

export default CakeView;
