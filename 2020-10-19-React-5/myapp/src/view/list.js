import React from 'react';
import List from '../component/list';
import ListNav from '../component/list_nav';
import Pagination from '../component/paginition';
export default function ListView() {
  return <div>
    <ListNav />
    <List />
    <Pagination />
  </div>;
}
