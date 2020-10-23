import React from 'react';
import { Redirect } from 'react-router-dom';
import View404 from './view/404view';
import AboutView from './view/aboutview';
import IndexView from './view/indexview';
import JoinView from './view/joinview';
import ListView from './view/list';

const types = ["all", "good", "share", "ask"]

const nav_list = [
  {
    title: "全部",
    to: "/",
    exact: false,
    isActive(pathname) {
      return pathname === "/" || pathname === "/home" || pathname == "/all" || pathname.substring(0, 4) === "/all";
    }
  }, {
    title: "精华",
    to: "/good",
    exact: false
  }, {
    title: "分享",
    to: "/ask",
    exact: false
  }, {
    title: "问答",
    to: "/share",
    exact: false
  }
];


const route_list = [
  {
    path: ["/", "/home", "/all", "/all/:page"],
    exact: true,
    render(props) {
      const { type = "all", page = "1" } = props.match.params;
      console.log(type);

      if (types.includes(type)
        && page > 0
        && parseInt(page) + "" === page) {
        return <IndexView {...props} />
      }
      return <Redirect to="/undefined" />
    }
  },
  {
    path: "/good",
    exact: true,
    render(props) {
      const { type = "all", page = "1" } = props.match.params;
      console.log(page);
      console.log(type);
      if (types.includes(type)
        && page > 0
        && parseInt(page) + "" === page) {
        return <AboutView {...props} />
      }
      return <Redirect to="/undefined" />
    }
  }, {
    path: "/ask",
    exact: true,
    render(props) {
      const { type = "all", page = "1" } = props.match.params;
      console.log(page);
      if (types.includes(type)
        && page > 0
        && parseInt(page) + "" === page) {
        return <JoinView {...props} />
      }
      return <Redirect to="/undefined" />
    }
  },
  {
    path: ["/share", "/share/:page"],
    exact: true,
    render(props) {
      console.log(props);
      const { type = "all", page = "1" } = props.match.params;
      if (types.includes(type)
        && page > 0
        && parseInt(page) + "" === page) {
        return <ListView {...props} />
      }
      return <Redirect to="/undefined" />
    }
  },
  {
    path: "/view404",
    render(props) {
      return <View404 {...props} />
    }
  }
];

export { route_list, nav_list }