import * as React from "react";
import { RouteComponentProps } from "react-router";
import loadable from "@loadable/component";

const Vacancy = loadable(() => import("Modules/vacancy/vacancy"));

export interface IRoute {
  path: string;
  pathName: string;
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  exact: boolean;
}

export const routepaths = {
  ROOT: "/",
};

export const routes: IRoute[] = [
  {
    path: routepaths.ROOT,
    pathName: "vacancy",
    component: Vacancy,
    exact: true,
  },
];
