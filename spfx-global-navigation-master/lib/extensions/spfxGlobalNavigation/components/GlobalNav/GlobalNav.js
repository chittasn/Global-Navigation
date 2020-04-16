var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from "react";
import GlobalNavNode from "./GlobalNavNode";
import GlobalNavProvider from "./provider/GlobalNavProvider";
require("./globalNavStyles.scss");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            globalNavItems: []
        };
        return _this;
    }
    Header.prototype.componentWillMount = function () {
        this.globalNavProvider = new GlobalNavProvider();
    };
    Header.prototype.componentDidMount = function () {
        var _this = this;
        this.globalNavProvider
            .getGlobalNavigation()
            .then(function (result) {
            _this.setState({
                globalNavItems: result
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "global-nav" },
            React.createElement("ul", { className: "root" }, this.state.globalNavItems.map(function (globalNavItem, index) { return (React.createElement(GlobalNavNode, { key: index, globalNavItem: globalNavItem })); }))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=GlobalNav.js.map