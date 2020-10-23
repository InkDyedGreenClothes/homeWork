import React from 'react';
import { useHistory, useLocation, useParams, useRouteMatch, withRouter } from 'react-router-dom';
/*
  在非路由导航中，获取路由参数
*/
function Pagination(props) {
  let history = useHistory();
  let parmas = useParams();
  let loaction = useLocation();
  let match = useRouteMatch();
  console.log(history,parmas,loaction,match);
  return <div>
      <h1>翻页导航</h1>
  </div>;
}
export default Pagination;
// let newPagination = withRouter(Pagination);
// export default newPagination;
//export default withRouter(Pagination);
/*
  高阶路由(高阶组件): 调用该方法时，返回一个新的组件
  const newCmp = withRouter(cmp)    
  withRouter 适用于类组件和函数组件
** 注意 hooks 是 Router 5 之后才有的, hooks 只能用在 React 函数中
- useHistory 获取 history 对象
- useLocation 获取 location 对象
- useParams 获取动态路由参数
- useRouteMatch 获取 match 对象
*/
