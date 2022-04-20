import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../redux/action';

function SetCounter() {

  const countFromStore = useSelector((state) => state.count)
  console.log(countFromStore);

  const [count, setCount] = useState(countFromStore)

  const dispatch = useDispatch();

  useEffect(() => {
    setCount(countFromStore);
  }, [countFromStore])


  const handleChange = (event) => {


    setCount(event.target.value);

  }

  const handleSubmit = (event) => {

    event.preventDefault();

    console.log("count", count)
    dispatch(reset(count));


  }


  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label> Set Count </label>
        <input type="number" value={count} onChange={handleChange} />
        <input type="submit" />
      </form>
    </section>
  )
}

export default SetCounter