import { AfterViewInit, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, TemplateRef, NgZone, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { BaseChartComponent, ColorHelper, ViewDimensions } from '@swimlane/ngx-charts';
import 'd3-transition';
import { Observable, Subscription } from 'rxjs';
import { Layout } from '../models/layout.model';
import { LayoutService } from './layouts/layout.service';
import { Edge } from '../models/edge.model';
import { Node, ClusterNode } from '../models/node.model';
import { Graph } from '../models/graph.model';
import { PanningAxis } from '../enums/panning.enum';
/**
 * Matrix
 */
export interface Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}
export declare class GraphComponent extends BaseChartComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private el;
    zone: NgZone;
    cd: ChangeDetectorRef;
    private layoutService;
    legend: boolean;
    nodes: Node[];
    clusters: ClusterNode[];
    links: Edge[];
    activeEntries: any[];
    curve: any;
    draggingEnabled: boolean;
    nodeHeight: number;
    nodeMaxHeight: number;
    nodeMinHeight: number;
    nodeWidth: number;
    nodeMinWidth: number;
    nodeMaxWidth: number;
    panningEnabled: boolean;
    panningAxis: PanningAxis;
    enableZoom: boolean;
    zoomSpeed: number;
    minZoomLevel: number;
    maxZoomLevel: number;
    autoZoom: boolean;
    panOnZoom: boolean;
    animate?: boolean;
    autoCenter: boolean;
    update$: Observable<any>;
    center$: Observable<any>;
    zoomToFit$: Observable<any>;
    panToNode$: Observable<any>;
    layout: string | Layout;
    layoutSettings: any;
    enableTrackpadSupport: boolean;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    zoomChange: EventEmitter<number>;
    clickHandler: EventEmitter<MouseEvent>;
    linkTemplate: TemplateRef<any>;
    nodeTemplate: TemplateRef<any>;
    clusterTemplate: TemplateRef<any>;
    defsTemplate: TemplateRef<any>;
    chart: ElementRef;
    nodeElements: QueryList<ElementRef>;
    linkElements: QueryList<ElementRef>;
    private isMouseMoveCalled;
    graphSubscription: Subscription;
    subscriptions: Subscription[];
    colors: ColorHelper;
    dims: ViewDimensions;
    margin: number[];
    results: any[];
    seriesDomain: any;
    transform: string;
    legendOptions: any;
    isPanning: boolean;
    isDragging: boolean;
    draggingNode: Node;
    initialized: boolean;
    graph: Graph;
    graphDims: any;
    _oldLinks: Edge[];
    oldNodes: Set<string>;
    oldClusters: Set<string>;
    transformationMatrix: Matrix;
    _touchLastX: any;
    _touchLastY: any;
    constructor(el: ElementRef, zone: NgZone, cd: ChangeDetectorRef, layoutService: LayoutService);
    groupResultsBy: (node: any) => string;
    /**
     * Get the current zoom level
     */
    /**
    * Set the current zoom level
    */
    zoomLevel: number;
    /**
     * Get the current `x` position of the graph
     */
    /**
    * Set the current `x` position of the graph
    */
    panOffsetX: number;
    /**
     * Get the current `y` position of the graph
     */
    /**
    * Set the current `y` position of the graph
    */
    panOffsetY: number;
    /**
     * Angular lifecycle event
     *
     *
     * @memberOf GraphComponent
     */
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setLayout(layout: string | Layout): void;
    setLayoutSettings(settings: any): void;
    /**
     * Angular lifecycle event
     *
     *
     * @memberOf GraphComponent
     */
    ngOnDestroy(): void;
    /**
     * Angular lifecycle event
     *
     *
     * @memberOf GraphComponent
     */
    ngAfterViewInit(): void;
    /**
     * Base class update implementation for the dag graph
     *
     * @memberOf GraphComponent
     */
    update(): void;
    /**
     * Creates the dagre graph engine
     *
     * @memberOf GraphComponent
     */
    createGraph(): void;
    /**
     * Draws the graph using dagre layouts
     *
     *
     * @memberOf GraphComponent
     */
    draw(): void;
    tick(): void;
    /**
     * Measures the node element and applies the dimensions
     *
     * @memberOf GraphComponent
     */
    applyNodeDimensions(): void;
    /**
     * Redraws the lines when dragged or viewport updated
     *
     * @memberOf GraphComponent
     */
    redrawLines(_animate?: boolean): void;
    /**
     * Calculate the text directions / flipping
     *
     * @memberOf GraphComponent
     */
    calcDominantBaseline(link: any): void;
    /**
     * Generate the new line path
     *
     * @memberOf GraphComponent
     */
    generateLine(points: any): any;
    /**
     * Zoom was invoked from event
     *
     * @memberOf GraphComponent
     */
    onZoom($event: WheelEvent, direction: any): void;
    /**
     * Pan by x/y
     *
     * @param x
     * @param y
     */
    pan(x: number, y: number, ignoreZoomLevel?: boolean): void;
    /**
     * Pan to a fixed x/y
     *
     */
    panTo(x: number, y: number): void;
    /**
     * Zoom by a factor
     *
     */
    zoom(factor: number): void;
    /**
     * Zoom to a fixed level
     *
     */
    zoomTo(level: number): void;
    /**
     * Pan was invoked from event
     *
     * @memberOf GraphComponent
     */
    onPan(event: MouseEvent): void;
    /**
     * Drag was invoked from an event
     *
     * @memberOf GraphComponent
     */
    onDrag(event: MouseEvent): void;
    redrawEdge(edge: Edge): void;
    /**
     * Update the entire view for the new pan position
     *
     *
     * @memberOf GraphComponent
     */
    updateTransform(): void;
    /**
     * Node was clicked
     *
     *
     * @memberOf GraphComponent
     */
    onClick(event: any): void;
    /**
     * Node was focused
     *
     *
     * @memberOf GraphComponent
     */
    onActivate(event: any): void;
    /**
     * Node was defocused
     *
     * @memberOf GraphComponent
     */
    onDeactivate(event: any): void;
    /**
     * Get the domain series for the nodes
     *
     * @memberOf GraphComponent
     */
    getSeriesDomain(): any[];
    /**
     * Tracking for the link
     *
     *
     * @memberOf GraphComponent
     */
    trackLinkBy(index: number, link: Edge): any;
    /**
     * Tracking for the node
     *
     *
     * @memberOf GraphComponent
     */
    trackNodeBy(index: number, node: Node): any;
    /**
     * Sets the colors the nodes
     *
     *
     * @memberOf GraphComponent
     */
    setColors(): void;
    /**
     * Gets the legend options
     *
     * @memberOf GraphComponent
     */
    getLegendOptions(): any;
    /**
     * On mouse move event, used for panning and dragging.
     *
     * @memberOf GraphComponent
     */
    onMouseMove($event: MouseEvent): void;
    onMouseDown(event: MouseEvent): void;
    graphClick(event: MouseEvent): void;
    /**
     * On touch start event to enable panning.
     *
     * @memberOf GraphComponent
     */
    onTouchStart(event: any): void;
    /**
     * On touch move event, used for panning.
     *
     */
    onTouchMove($event: any): void;
    /**
     * On touch end event to disable panning.
     *
     * @memberOf GraphComponent
     */
    onTouchEnd(event: any): void;
    /**
     * On mouse up event to disable panning/dragging.
     *
     * @memberOf GraphComponent
     */
    onMouseUp(event: MouseEvent): void;
    /**
     * On node mouse down to kick off dragging
     *
     * @memberOf GraphComponent
     */
    onNodeMouseDown(event: MouseEvent, node: any): void;
    /**
     * Center the graph in the viewport
     */
    center(): void;
    /**
     * Zooms to fit the entier graph
     */
    zoomToFit(): void;
    /**
     * Pans to the node
     * @param nodeId
     */
    panToNodeId(nodeId: string): void;
    private checkEnum;
    private updateMidpointOnEdge;
}
