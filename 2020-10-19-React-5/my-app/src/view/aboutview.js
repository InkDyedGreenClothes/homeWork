import React from 'react';
import List from '../component/list';
import Pagination from '../component/paginition';

export default function AboutView(props) {
  console.log(props);
  return <div>
    <List></List>
    <Pagination></Pagination>
  </div>;
}
