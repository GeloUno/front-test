import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../api';
import usePageBottom from './../hooks/usePageBottom';
import { addApp } from '../reducers/app';
import Item from './Item';
const List = () => {
  const [page, setPage] = useState(1);
  const [lastItem, setLastItem] = useState(false);

  const list = useSelector((state) => state.app.list);

  const dispatch = useDispatch();
  const reachedBottom = usePageBottom();
  useEffect(() => {
    if (reachedBottom) {
      setPage((prev) => prev + 1);
    }

    return () => {};
  }, [reachedBottom]);

  useEffect(() => {
    fetchPhotos({ perPage: 30, page }).then((data) => {
      setLastItem(data.total);
      dispatch(addApp(data.images));
    });

    return () => {};
  }, [page]);

  return (
    <div style={{ minHeight: '90vh', width: '100%' }}>
      {list.length !== 0 && <Item list={list} />}

      {reachedBottom && lastItem - list.length > 0 && <p>Loading...</p>}
    </div>
  );
};

export default List;
