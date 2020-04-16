import * as React from "react";
import IGlobalNavItem from "./model/IGlobalNavItem";
export interface IGlobalNavProps {
    webUrl?: string;
}
export interface IGlobalNavState {
    globalNavItems: IGlobalNavItem[];
}
export default class Header extends React.Component<IGlobalNavProps, IGlobalNavState> {
    private globalNavProvider;
    constructor(props: IGlobalNavProps);
    componentWillMount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
//# sourceMappingURL=GlobalNav.d.ts.map