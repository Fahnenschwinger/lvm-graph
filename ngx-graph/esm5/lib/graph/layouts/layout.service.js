/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DagreLayout } from './dagre';
import { DagreClusterLayout } from './dagreCluster';
import { DagreNodesOnlyLayout } from './dagreNodesOnly';
import { D3ForceDirectedLayout } from './d3ForceDirected';
import { ColaForceDirectedLayout } from './colaForceDirected';
/** @type {?} */
var layouts = {
    dagre: DagreLayout,
    dagreCluster: DagreClusterLayout,
    dagreNodesOnly: DagreNodesOnlyLayout,
    d3ForceDirected: D3ForceDirectedLayout,
    colaForceDirected: ColaForceDirectedLayout
};
var LayoutService = /** @class */ (function () {
    function LayoutService() {
    }
    /**
     * @param {?} name
     * @return {?}
     */
    LayoutService.prototype.getLayout = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (layouts[name]) {
            return new layouts[name]();
        }
        else {
            throw new Error("Unknown layout type '" + name + "'");
        }
    };
    LayoutService.decorators = [
        { type: Injectable }
    ];
    return LayoutService;
}());
export { LayoutService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWdyYXBoLyIsInNvdXJjZXMiOlsibGliL2dyYXBoL2xheW91dHMvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFeEQsT0FBTyxHQUFHO0lBQ2QsS0FBSyxFQUFFLFdBQVc7SUFDbEIsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLGVBQWUsRUFBRSxxQkFBcUI7SUFDdEMsaUJBQWlCLEVBQUUsdUJBQXVCO0NBQzNDO0FBRUQ7SUFBQTtJQVNBLENBQUM7Ozs7O0lBUEMsaUNBQVM7Ozs7SUFBVCxVQUFVLElBQVk7UUFDcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUF3QixJQUFJLE1BQUcsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Z0JBUkYsVUFBVTs7SUFTWCxvQkFBQztDQUFBLEFBVEQsSUFTQztTQVJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGF5b3V0Lm1vZGVsJztcbmltcG9ydCB7IERhZ3JlTGF5b3V0IH0gZnJvbSAnLi9kYWdyZSc7XG5pbXBvcnQgeyBEYWdyZUNsdXN0ZXJMYXlvdXQgfSBmcm9tICcuL2RhZ3JlQ2x1c3Rlcic7XG5pbXBvcnQgeyBEYWdyZU5vZGVzT25seUxheW91dCB9IGZyb20gJy4vZGFncmVOb2Rlc09ubHknO1xuaW1wb3J0IHsgRDNGb3JjZURpcmVjdGVkTGF5b3V0IH0gZnJvbSAnLi9kM0ZvcmNlRGlyZWN0ZWQnO1xuaW1wb3J0IHsgQ29sYUZvcmNlRGlyZWN0ZWRMYXlvdXQgfSBmcm9tICcuL2NvbGFGb3JjZURpcmVjdGVkJztcblxuY29uc3QgbGF5b3V0cyA9IHtcbiAgZGFncmU6IERhZ3JlTGF5b3V0LFxuICBkYWdyZUNsdXN0ZXI6IERhZ3JlQ2x1c3RlckxheW91dCxcbiAgZGFncmVOb2Rlc09ubHk6IERhZ3JlTm9kZXNPbmx5TGF5b3V0LFxuICBkM0ZvcmNlRGlyZWN0ZWQ6IEQzRm9yY2VEaXJlY3RlZExheW91dCxcbiAgY29sYUZvcmNlRGlyZWN0ZWQ6IENvbGFGb3JjZURpcmVjdGVkTGF5b3V0XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG4gIGdldExheW91dChuYW1lOiBzdHJpbmcpOiBMYXlvdXQge1xuICAgIGlmIChsYXlvdXRzW25hbWVdKSB7XG4gICAgICByZXR1cm4gbmV3IGxheW91dHNbbmFtZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGxheW91dCB0eXBlICcke25hbWV9J2ApO1xuICAgIH1cbiAgfVxufVxuIl19