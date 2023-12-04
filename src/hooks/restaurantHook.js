import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setRestaurant} from '../slices/restaurantSlice';

const useRestaurant = params => {
  const [restaurantData, setRestaurantData] = useState(params);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params) {
      setRestaurantData(params);
      dispatch(setRestaurant({...params}));
    }
  }, [params]);

  return {restaurantData};
};

export default useRestaurant;
