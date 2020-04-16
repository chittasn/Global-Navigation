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
import slugify from "slugify";
var GlobalNavNode = /** @class */ (function (_super) {
    __extends(GlobalNavNode, _super);
    function GlobalNavNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GlobalNavNode.prototype.render = function () {
        var titleClassName = slugify(this.props.globalNavItem.title, { lower: true });
        var caretClassName = this.props.globalNavItem.level > 0 ? "ms-Icon--CaretSolidRight" : "ms-Icon--CaretSolidDown";
        return (React.createElement("li", { key: this.props.globalNavItem.id, className: this.props.globalNavItem.subNavItems ? "td-dropdown " + titleClassName : "" + titleClassName, "data-level": this.props.globalNavItem.level },
            React.createElement("a", { href: this.props.globalNavItem.url || "#", target: this.props.globalNavItem.openInNewWindow ? "_blank" : "_self" },
                this.props.globalNavItem.title,
                console.log(this.props.globalNavItem),
                this.props.globalNavItem.subNavItems && React.createElement("i", { className: "ms-Icon " + caretClassName })),
            this.props.globalNavItem.subNavItems && (React.createElement("ul", { className: "td-dropdown-menu", "data-level": this.props.globalNavItem.level + 1 }, this.props.globalNavItem.subNavItems.map(function (globalNavItem) { return (React.createElement(GlobalNavNode, { key: parseInt(globalNavItem.id), globalNavItem: globalNavItem })); })))));
    };
    return GlobalNavNode;
}(React.Component));
export default GlobalNavNode;
//# sourceMappingURL=GlobalNavNode.js.map