import React from 'react';
import List from '../component/list';
import Pagination from '../component/paginition';

export default function IndexView(props) {
  // console.log(props);
  return <div>
    <List></List>
    <Pagination></Pagination>
  </div>;
}