import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'
import "../../App.css";

 function IcecreamView() {
  const [value, setValue] = useState(1)
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className='headerIceCream'>Number of ice creams - {numOfIcecreams}</h2>
      <button className='btnStyleIcecreamOrdered' onClick={() => dispatch(ordered(value))}>Order Ice cream</button>
      <img className='imgStyleCake' src='https://www.color-name.com/wp-content/uploads/ice-cream-sundae-with-waffle-cone.png' alt="" />
      <input
        type='number'
        className='inputtext'
        value={value}
        onChange={e => setValue(parseInt(e.target.value))}
      />
      <button className='btnStyleIcecreamOrdered' onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  )
}

export default IcecreamView;