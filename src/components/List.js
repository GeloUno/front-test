import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../api';
import usePageBottom from './../hooks/usePageBottom';
import { addApp } from '../reducers/app';
const List = () => {
  const [page, setPage] = useState(1);

  const list = useSelector((state) => state.app.list);

  const dispatch = useDispatch();
  const reachedBottom = usePageBottom();
  useEffect(() => {
    if (reachedBottom) {
      setPage((prev) => prev + 1);
    }

    return () => {};
  }, [reachedBottom]);

  console.log('reachedBottom', reachedBottom);
  useEffect(() => {
    fetchPhotos({ perPage: 30, page }).then((data) => {
      dispatch(addApp(data.images));
    });

    return () => {};
  }, [page]);

  return (
    <div style={{ minHeight: '90vh', width: '100%' }}>
      {list.lenght !== 0 &&
        list.map((item) => {
          return <div key={item.id}>{item.user.name}</div>;
        })}
    </div>
  );
};

export default List;
