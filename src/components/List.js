import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../api';

const List = () => {
  const [Page, setPage] = useState(1);

  const app = useSelector((state) => state.app);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPhotos({ perPage: 30, page: 1 }).then((data) => {
      dispatch({ type: 'addApp', payload: data });
    });

    return () => {};
  }, []);

  return <div style={{ minHeight: '90vh', width: '100%' }}></div>;
};

export default List;
