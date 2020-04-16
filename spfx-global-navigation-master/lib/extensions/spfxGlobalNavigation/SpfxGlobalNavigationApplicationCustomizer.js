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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from "react";
import * as ReactDom from "react-dom";
import { override } from "@microsoft/decorators";
import { Log } from "@microsoft/sp-core-library";
import { BaseApplicationCustomizer, PlaceholderName } from "@microsoft/sp-application-base";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import * as strings from "SpfxGlobalNavigationApplicationCustomizerStrings";
var LOG_SOURCE = "SpfxGlobalNavigationApplicationCustomizer";
var SpfxGlobalNavigationApplicationCustomizer = /** @class */ (function (_super) {
    __extends(SpfxGlobalNavigationApplicationCustomizer, _super);
    function SpfxGlobalNavigationApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpfxGlobalNavigationApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        this.context.placeholderProvider.changedEvent.add(this, this.renderPlaceHolders);
        return Promise.resolve();
    };
    SpfxGlobalNavigationApplicationCustomizer.prototype.renderPlaceHolders = function () {
        if (!this.topPlaceholder) {
            this.topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
            if (!this.topPlaceholder) {
                return;
            }
            if (this.topPlaceholder.domElement) {
                var element = React.createElement(GlobalNav, {});
                ReactDom.render(element, this.topPlaceholder.domElement);
            }
        }
    };
    __decorate([
        override
    ], SpfxGlobalNavigationApplicationCustomizer.prototype, "onInit", null);
    return SpfxGlobalNavigationApplicationCustomizer;
}(BaseApplicationCustomizer));
export default SpfxGlobalNavigationApplicationCustomizer;
//# sourceMappingURL=SpfxGlobalNavigationApplicationCustomizer.js.map