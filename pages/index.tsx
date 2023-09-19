import { getWord, meaningListSelector } from '@/reducers/wordSlice';
import { useAppDispatch, useAppSelector } from '@/reducers/store';
import MeaningList from '@/components/MeaningList';

export default function Home() {
  const dispatch = useAppDispatch()
  const meaningList = useAppSelector(meaningListSelector);
   
  return (
    <>
      <MeaningList/>
      <button onClick={()=>{dispatch(getWord('dull')); console.log(meaningList)}}>Testing Dispatch to API Call</button> 
    </>
  )
}


