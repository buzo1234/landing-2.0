import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import Review from './Review';

const PastReviews = () => {
  const [revs, setRevs] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(collection(db, 'reviews'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setRevs(snapshot.docs);
      }
    );
  }, [db]);
  return (
    <div className='mx-3'>
      {revs !== []
        ? revs.map((rev, index) => (
            <>
              <Review key={rev.id} id={rev.id} review={rev.data().desc} />
              <div className='bg-gray-200 h-[0.5px] flex w-screen'></div>
            </>
          ))
        : ''}
    </div>
  );
};

export default PastReviews;
