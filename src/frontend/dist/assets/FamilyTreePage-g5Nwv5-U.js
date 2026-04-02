import { k as createLucideIcon, r as reactExports, j as jsxRuntimeExports, au as createContextScope, ar as createPopperScope, av as useId, as as useControllableState, at as Root2, aw as useComposedRefs, az as Anchor, ax as Primitive, ay as composeEventHandlers, aA as Presence, aB as Portal$1, aJ as Arrow, aH as DismissableLayer, aI as Content, aZ as createSlottable, b7 as Root, ad as cn, T as Tabs, B as Badge, c as TabsList, a4 as GraduationCap, x as Briefcase, H as Heart, l as Building2, d as TabsTrigger, e as TabsContent, L as Label, X, I as Input, a as Button, K as Plus, S as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, $ as Switch, u as ue, A as Avatar, b as AvatarFallback, q as Users, ak as Shield, b0 as useActor, a5 as useInternetIdentity, b8 as useGetFamilyTree, b9 as useAddFamilyMember, ba as useQuery, D as Dialog, z as DialogTrigger, E as DialogContent, F as DialogHeader, G as DialogTitle, aj as LoaderCircle, bb as Skeleton, Q as TreePine, v as CircleCheck, b3 as useSaveUserProfile } from "./index-BUwiR49K.js";
import { P as Popover, a as PopoverTrigger, b as PopoverContent } from "./popover-Bs2_a3P0.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-DpmRZEFl.js";
import { T as Textarea } from "./textarea-D4qg7eX8.js";
import { E as EventsTab } from "./EventsTab-BN8bXnA7.js";
import { S as Sheet, a as SheetContent, b as SheetHeader, c as SheetTitle, d as SheetClose } from "./sheet-D6icv1uN.js";
import { S as Stethoscope } from "./stethoscope-Cklv44TA.js";
import { G as Globe } from "./globe-8-_IrNBg.js";
import { L as Lock } from "./lock-CKM9ZCDR.js";
import { P as Phone } from "./phone-BE9to7ZR.js";
import { C as Checkbox } from "./checkbox-CbC1uGmv.js";
import { C as Crown } from "./crown-CUCYyq_W.js";
import { T as Trash2 } from "./trash-2-B95Go7ao.js";
import { g as getFamilyTreeBusinesses, s as saveFamilyTreeBusiness } from "./familyTreeState-BANKLlxj.js";
import { A as ArrowRight } from "./arrow-right-dvmD72ol.js";
import { S as Share2 } from "./share-2-CQg0iDeR.js";
import { C as Copy } from "./copy-nYlvd4ZJ.js";
import { D as Droplets } from "./droplets-Rk1iDbBm.js";
import { C as CircleAlert } from "./circle-alert-D0hly9Ji.js";
import { E as Eye } from "./eye-DgeAXy79.js";
import { E as EyeOff } from "./eye-off-lF0aWJ7N.js";
import { L as Link } from "./link-BNZak6Fx.js";
import "./calendar-fqFt5hj8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CircleUserRound = createLucideIcon("circle-user-round", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = createLucideIcon("pencil", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
];
const UsersRound = createLucideIcon("users-round", __iconNode);
var [createTooltipContext] = createContextScope("Tooltip", [
  createPopperScope
]);
var usePopperScope = createPopperScope();
var PROVIDER_NAME = "TooltipProvider";
var DEFAULT_DELAY_DURATION = 700;
var TOOLTIP_OPEN = "tooltip.open";
var [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME);
var TooltipProvider$1 = (props) => {
  const {
    __scopeTooltip,
    delayDuration = DEFAULT_DELAY_DURATION,
    skipDelayDuration = 300,
    disableHoverableContent = false,
    children
  } = props;
  const isOpenDelayedRef = reactExports.useRef(true);
  const isPointerInTransitRef = reactExports.useRef(false);
  const skipDelayTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const skipDelayTimer = skipDelayTimerRef.current;
    return () => window.clearTimeout(skipDelayTimer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TooltipProviderContextProvider,
    {
      scope: __scopeTooltip,
      isOpenDelayedRef,
      delayDuration,
      onOpen: reactExports.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        isOpenDelayedRef.current = false;
      }, []),
      onClose: reactExports.useCallback(() => {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => isOpenDelayedRef.current = true,
          skipDelayDuration
        );
      }, [skipDelayDuration]),
      isPointerInTransitRef,
      onPointerInTransitChange: reactExports.useCallback((inTransit) => {
        isPointerInTransitRef.current = inTransit;
      }, []),
      disableHoverableContent,
      children
    }
  );
};
TooltipProvider$1.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip";
var [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME);
var Tooltip$1 = (props) => {
  const {
    __scopeTooltip,
    children,
    open: openProp,
    defaultOpen,
    onOpenChange,
    disableHoverableContent: disableHoverableContentProp,
    delayDuration: delayDurationProp
  } = props;
  const providerContext = useTooltipProviderContext(TOOLTIP_NAME, props.__scopeTooltip);
  const popperScope = usePopperScope(__scopeTooltip);
  const [trigger, setTrigger] = reactExports.useState(null);
  const contentId = useId();
  const openTimerRef = reactExports.useRef(0);
  const disableHoverableContent = disableHoverableContentProp ?? providerContext.disableHoverableContent;
  const delayDuration = delayDurationProp ?? providerContext.delayDuration;
  const wasOpenDelayedRef = reactExports.useRef(false);
  const [open, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen ?? false,
    onChange: (open2) => {
      if (open2) {
        providerContext.onOpen();
        document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN));
      } else {
        providerContext.onClose();
      }
      onOpenChange == null ? void 0 : onOpenChange(open2);
    },
    caller: TOOLTIP_NAME
  });
  const stateAttribute = reactExports.useMemo(() => {
    return open ? wasOpenDelayedRef.current ? "delayed-open" : "instant-open" : "closed";
  }, [open]);
  const handleOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    wasOpenDelayedRef.current = false;
    setOpen(true);
  }, [setOpen]);
  const handleClose = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = 0;
    setOpen(false);
  }, [setOpen]);
  const handleDelayedOpen = reactExports.useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    openTimerRef.current = window.setTimeout(() => {
      wasOpenDelayedRef.current = true;
      setOpen(true);
      openTimerRef.current = 0;
    }, delayDuration);
  }, [delayDuration, setOpen]);
  reactExports.useEffect(() => {
    return () => {
      if (openTimerRef.current) {
        window.clearTimeout(openTimerRef.current);
        openTimerRef.current = 0;
      }
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    TooltipContextProvider,
    {
      scope: __scopeTooltip,
      contentId,
      open,
      stateAttribute,
      trigger,
      onTriggerChange: setTrigger,
      onTriggerEnter: reactExports.useCallback(() => {
        if (providerContext.isOpenDelayedRef.current) handleDelayedOpen();
        else handleOpen();
      }, [providerContext.isOpenDelayedRef, handleDelayedOpen, handleOpen]),
      onTriggerLeave: reactExports.useCallback(() => {
        if (disableHoverableContent) {
          handleClose();
        } else {
          window.clearTimeout(openTimerRef.current);
          openTimerRef.current = 0;
        }
      }, [handleClose, disableHoverableContent]),
      onOpen: handleOpen,
      onClose: handleClose,
      disableHoverableContent,
      children
    }
  ) });
};
Tooltip$1.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger";
var TooltipTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...triggerProps } = props;
    const context = useTooltipContext(TRIGGER_NAME, __scopeTooltip);
    const providerContext = useTooltipProviderContext(TRIGGER_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onTriggerChange);
    const isPointerDownRef = reactExports.useRef(false);
    const hasPointerMoveOpenedRef = reactExports.useRef(false);
    const handlePointerUp = reactExports.useCallback(() => isPointerDownRef.current = false, []);
    reactExports.useEffect(() => {
      return () => document.removeEventListener("pointerup", handlePointerUp);
    }, [handlePointerUp]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Anchor, { asChild: true, ...popperScope, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        "aria-describedby": context.open ? context.contentId : void 0,
        "data-state": context.stateAttribute,
        ...triggerProps,
        ref: composedRefs,
        onPointerMove: composeEventHandlers(props.onPointerMove, (event) => {
          if (event.pointerType === "touch") return;
          if (!hasPointerMoveOpenedRef.current && !providerContext.isPointerInTransitRef.current) {
            context.onTriggerEnter();
            hasPointerMoveOpenedRef.current = true;
          }
        }),
        onPointerLeave: composeEventHandlers(props.onPointerLeave, () => {
          context.onTriggerLeave();
          hasPointerMoveOpenedRef.current = false;
        }),
        onPointerDown: composeEventHandlers(props.onPointerDown, () => {
          if (context.open) {
            context.onClose();
          }
          isPointerDownRef.current = true;
          document.addEventListener("pointerup", handlePointerUp, { once: true });
        }),
        onFocus: composeEventHandlers(props.onFocus, () => {
          if (!isPointerDownRef.current) context.onOpen();
        }),
        onBlur: composeEventHandlers(props.onBlur, context.onClose),
        onClick: composeEventHandlers(props.onClick, context.onClose)
      }
    ) });
  }
);
TooltipTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal";
var [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, {
  forceMount: void 0
});
var TooltipPortal = (props) => {
  const { __scopeTooltip, forceMount, children, container } = props;
  const context = useTooltipContext(PORTAL_NAME, __scopeTooltip);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PortalProvider, { scope: __scopeTooltip, forceMount, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { asChild: true, container, children }) }) });
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent";
var TooltipContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeTooltip);
    const { forceMount = portalContext.forceMount, side = "top", ...contentProps } = props;
    const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: context.disableHoverableContent ? /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, { side, ...contentProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentHoverable, { side, ...contentProps, ref: forwardedRef }) });
  }
);
var TooltipContentHoverable = reactExports.forwardRef((props, forwardedRef) => {
  const context = useTooltipContext(CONTENT_NAME, props.__scopeTooltip);
  const providerContext = useTooltipProviderContext(CONTENT_NAME, props.__scopeTooltip);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const [pointerGraceArea, setPointerGraceArea] = reactExports.useState(null);
  const { trigger, onClose } = context;
  const content = ref.current;
  const { onPointerInTransitChange } = providerContext;
  const handleRemoveGraceArea = reactExports.useCallback(() => {
    setPointerGraceArea(null);
    onPointerInTransitChange(false);
  }, [onPointerInTransitChange]);
  const handleCreateGraceArea = reactExports.useCallback(
    (event, hoverTarget) => {
      const currentTarget = event.currentTarget;
      const exitPoint = { x: event.clientX, y: event.clientY };
      const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
      const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
      const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
      const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
      setPointerGraceArea(graceArea);
      onPointerInTransitChange(true);
    },
    [onPointerInTransitChange]
  );
  reactExports.useEffect(() => {
    return () => handleRemoveGraceArea();
  }, [handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (trigger && content) {
      const handleTriggerLeave = (event) => handleCreateGraceArea(event, content);
      const handleContentLeave = (event) => handleCreateGraceArea(event, trigger);
      trigger.addEventListener("pointerleave", handleTriggerLeave);
      content.addEventListener("pointerleave", handleContentLeave);
      return () => {
        trigger.removeEventListener("pointerleave", handleTriggerLeave);
        content.removeEventListener("pointerleave", handleContentLeave);
      };
    }
  }, [trigger, content, handleCreateGraceArea, handleRemoveGraceArea]);
  reactExports.useEffect(() => {
    if (pointerGraceArea) {
      const handleTrackPointerGrace = (event) => {
        const target = event.target;
        const pointerPosition = { x: event.clientX, y: event.clientY };
        const hasEnteredTarget = (trigger == null ? void 0 : trigger.contains(target)) || (content == null ? void 0 : content.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, pointerGraceArea);
        if (hasEnteredTarget) {
          handleRemoveGraceArea();
        } else if (isPointerOutsideGraceArea) {
          handleRemoveGraceArea();
          onClose();
        }
      };
      document.addEventListener("pointermove", handleTrackPointerGrace);
      return () => document.removeEventListener("pointermove", handleTrackPointerGrace);
    }
  }, [trigger, content, pointerGraceArea, onClose, handleRemoveGraceArea]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContentImpl, { ...props, ref: composedRefs });
});
var [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: false });
var Slottable = createSlottable("TooltipContent");
var TooltipContentImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTooltip,
      children,
      "aria-label": ariaLabel,
      onEscapeKeyDown,
      onPointerDownOutside,
      ...contentProps
    } = props;
    const context = useTooltipContext(CONTENT_NAME, __scopeTooltip);
    const popperScope = usePopperScope(__scopeTooltip);
    const { onClose } = context;
    reactExports.useEffect(() => {
      document.addEventListener(TOOLTIP_OPEN, onClose);
      return () => document.removeEventListener(TOOLTIP_OPEN, onClose);
    }, [onClose]);
    reactExports.useEffect(() => {
      if (context.trigger) {
        const handleScroll = (event) => {
          const target = event.target;
          if (target == null ? void 0 : target.contains(context.trigger)) onClose();
        };
        window.addEventListener("scroll", handleScroll, { capture: true });
        return () => window.removeEventListener("scroll", handleScroll, { capture: true });
      }
    }, [context.trigger, onClose]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DismissableLayer,
      {
        asChild: true,
        disableOutsidePointerEvents: false,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside: (event) => event.preventDefault(),
        onDismiss: onClose,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            "data-state": context.stateAttribute,
            ...popperScope,
            ...contentProps,
            ref: forwardedRef,
            style: {
              ...contentProps.style,
              // re-namespace exposed content custom properties
              ...{
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              }
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(VisuallyHiddenContentContextProvider, { scope: __scopeTooltip, isInside: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { id: context.contentId, role: "tooltip", children: ariaLabel || children }) })
            ]
          }
        )
      }
    );
  }
);
TooltipContent$1.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow";
var TooltipArrow = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTooltip, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeTooltip);
    const visuallyHiddenContentContext = useVisuallyHiddenContentContext(
      ARROW_NAME,
      __scopeTooltip
    );
    return visuallyHiddenContentContext.isInside ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { ...popperScope, ...arrowProps, ref: forwardedRef });
  }
);
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const paddedExitPoints = [];
  switch (exitSide) {
    case "top":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y + padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "bottom":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y - padding }
      );
      break;
    case "left":
      paddedExitPoints.push(
        { x: exitPoint.x + padding, y: exitPoint.y - padding },
        { x: exitPoint.x + padding, y: exitPoint.y + padding }
      );
      break;
    case "right":
      paddedExitPoints.push(
        { x: exitPoint.x - padding, y: exitPoint.y - padding },
        { x: exitPoint.x - padding, y: exitPoint.y + padding }
      );
      break;
  }
  return paddedExitPoints;
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x, y } = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const ii = polygon[i];
    const jj = polygon[j];
    const xi = ii.x;
    const yi = ii.y;
    const xj = jj.x;
    const yj = jj.y;
    const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a, b) => {
    if (a.x < b.x) return -1;
    else if (a.x > b.x) return 1;
    else if (a.y < b.y) return -1;
    else if (a.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) {
    return upperHull;
  } else {
    return upperHull.concat(lowerHull);
  }
}
var Provider = TooltipProvider$1;
var Root3 = Tooltip$1;
var Trigger = TooltipTrigger$1;
var Portal = TooltipPortal;
var Content2 = TooltipContent$1;
var Arrow2 = TooltipArrow;
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root3, { "data-slot": "tooltip", ...props }) });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content2,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow2, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const DEFAULT_EXTENDED_PROFILE = {
  education: [],
  educationPrivacy: "family",
  jobs: [],
  jobsPrivacy: "family",
  medicalConditions: "",
  medicalMedications: "",
  medicalSurgeries: "",
  medicalAllergies: "",
  medicalPrivacy: "family",
  financialIncomeRange: "",
  financialPropertyOwned: false,
  financialPropertyDesc: "",
  financialAssets: "",
  financialGoals: "",
  financialPrivacy: "private",
  hobbies: [],
  activities: [],
  activitiesPrivacy: "family",
  businessesPrivacy: "family"
};
function loadExtendedProfile(memberId) {
  try {
    const raw = localStorage.getItem(
      `familysocial_extended_profile_${memberId}`
    );
    if (!raw) return { ...DEFAULT_EXTENDED_PROFILE };
    return {
      ...DEFAULT_EXTENDED_PROFILE,
      ...JSON.parse(raw)
    };
  } catch {
    return { ...DEFAULT_EXTENDED_PROFILE };
  }
}
function saveExtendedProfile(memberId, profile) {
  try {
    localStorage.setItem(
      `familysocial_extended_profile_${memberId}`,
      JSON.stringify(profile)
    );
  } catch {
  }
}
function loadBusinesses(principalId) {
  try {
    const raw = localStorage.getItem(`familysocial_businesses_${principalId}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
const PRIVACY_ICONS = {
  private: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 11 }),
  family: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 11 }),
  friends: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 11 }),
  public: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 11 })
};
const PRIVACY_LABELS = {
  private: "Private",
  family: "Family Circle",
  friends: "Friends",
  public: "Public"
};
function PrivacySelector({
  value,
  onChange,
  disabled
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Select,
    {
      value,
      onValueChange: (v) => onChange(v),
      disabled,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-7 w-[130px] text-xs gap-1.5 px-2 font-label", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          PRIVACY_ICONS[value],
          PRIVACY_LABELS[value]
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: Object.keys(PRIVACY_LABELS).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: k, className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          PRIVACY_ICONS[k],
          PRIVACY_LABELS[k]
        ] }) }, k)) })
      ]
    }
  );
}
function SectionHeader({
  title,
  icon,
  privacy,
  onPrivacyChange,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  canEdit
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 mb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-sm text-foreground", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PrivacySelector,
        {
          value: privacy,
          onChange: onPrivacyChange,
          disabled: !canEdit
        }
      ),
      canEdit && !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: onEdit,
          className: "h-7 w-7 p-0 hover:bg-primary/10 hover:text-primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 13 })
        }
      ),
      canEdit && isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            onClick: onSave,
            className: "h-7 px-3 text-xs font-label",
            children: "Save"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            onClick: onCancel,
            className: "h-7 px-3 text-xs font-label",
            children: "Cancel"
          }
        )
      ] })
    ] })
  ] });
}
function PrivatePlaceholder() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-8 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 18, className: "text-muted-foreground" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-medium text-muted-foreground", children: "This section is private" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: "The member has restricted access to this information." })
  ] });
}
function EducationTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [entries, setEntries] = reactExports.useState([
    ...profile.education
  ]);
  const [privacy, setPrivacy] = reactExports.useState(
    profile.educationPrivacy
  );
  const canView = viewerIsOwner || profile.educationPrivacy === "public" || profile.educationPrivacy === "family" || profile.educationPrivacy === "friends";
  reactExports.useEffect(() => {
    setEntries([...profile.education]);
    setPrivacy(profile.educationPrivacy);
  }, [profile]);
  const blank = () => ({
    id: `edu_${Date.now()}_${Math.random()}`,
    institution: "",
    degree: "",
    field: "",
    startYear: "",
    endYear: ""
  });
  const handleSave = () => {
    onUpdate({ education: entries, educationPrivacy: privacy });
    setIsEditing(false);
    ue.success("Education history saved");
  };
  const handleCancel = () => {
    setEntries([...profile.education]);
    setPrivacy(profile.educationPrivacy);
    setIsEditing(false);
  };
  if (!canView && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Education History",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ educationPrivacy: v });
        },
        isEditing,
        onEdit: () => setIsEditing(true),
        onSave: handleSave,
        onCancel: handleCancel,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      entries.length === 0 && !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-muted-foreground text-sm", children: "No education history added yet." }),
      entries.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-border bg-secondary/20 p-4 relative",
          children: [
            isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setEntries((prev) => prev.filter((_, i) => i !== idx)),
                className: "absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
              }
            ),
            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pr-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Institution" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.institution,
                    placeholder: "e.g. University of Lahore",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, institution: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Degree" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.degree,
                    placeholder: "e.g. BSc",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, degree: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Field of Study" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.field,
                    placeholder: "e.g. Computer Science",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, field: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Start Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.startYear,
                    placeholder: "2018",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, startYear: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "End Year" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.endYear,
                    placeholder: "2022 or Present",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, endYear: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground", children: entry.institution || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: [entry.degree, entry.field].filter(Boolean).join(" · ") }),
              (entry.startYear || entry.endYear) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                entry.startYear,
                entry.endYear ? ` – ${entry.endYear}` : ""
              ] })
            ] })
          ]
        },
        entry.id
      )),
      isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "w-full gap-2 font-label border-dashed",
          onClick: () => setEntries((prev) => [...prev, blank()]),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
            "Add Education Entry"
          ]
        }
      )
    ] })
  ] });
}
function JobsTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [entries, setEntries] = reactExports.useState([...profile.jobs]);
  const [privacy, setPrivacy] = reactExports.useState(profile.jobsPrivacy);
  const canView = viewerIsOwner || profile.jobsPrivacy === "public" || profile.jobsPrivacy === "family" || profile.jobsPrivacy === "friends";
  reactExports.useEffect(() => {
    setEntries([...profile.jobs]);
    setPrivacy(profile.jobsPrivacy);
  }, [profile]);
  const blank = () => ({
    id: `job_${Date.now()}_${Math.random()}`,
    employer: "",
    role: "",
    type: "Full-time",
    startDate: "",
    endDate: "",
    description: ""
  });
  const handleSave = () => {
    onUpdate({ jobs: entries, jobsPrivacy: privacy });
    setIsEditing(false);
    ue.success("Job history saved");
  };
  const handleCancel = () => {
    setEntries([...profile.jobs]);
    setPrivacy(profile.jobsPrivacy);
    setIsEditing(false);
  };
  if (!canView && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Job History",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ jobsPrivacy: v });
        },
        isEditing,
        onEdit: () => setIsEditing(true),
        onSave: handleSave,
        onCancel: handleCancel,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      entries.length === 0 && !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-6 text-muted-foreground text-sm", children: "No job history added yet." }),
      entries.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-border bg-secondary/20 p-4 relative",
          children: [
            isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setEntries((prev) => prev.filter((_, i) => i !== idx)),
                className: "absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
              }
            ),
            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 pr-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Employer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.employer,
                    placeholder: "e.g. Systems Limited",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, employer: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Role / Title" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.role,
                    placeholder: "e.g. Software Engineer",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, role: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: entry.type,
                    onValueChange: (v) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, type: v } : en
                      )
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Full-time", "Part-time", "Freelance", "Contract"].map(
                        (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, className: "text-sm", children: t }, t)
                      ) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Start Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.startDate,
                    placeholder: "Jan 2020",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, startDate: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "End Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: entry.endDate,
                    placeholder: "Dec 2022 or Present",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, endDate: e.target.value } : en
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs mb-1 block", children: "Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    value: entry.description,
                    placeholder: "Brief description of responsibilities...",
                    onChange: (e) => setEntries(
                      (prev) => prev.map(
                        (en, i) => i === idx ? { ...en, description: e.target.value } : en
                      )
                    ),
                    rows: 2,
                    className: "text-sm resize-none"
                  }
                )
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground", children: entry.role || "—" }),
                entry.type && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] px-1.5 py-0 font-label",
                    children: entry.type
                  }
                )
              ] }),
              entry.employer && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: entry.employer }),
              (entry.startDate || entry.endDate) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                entry.startDate,
                entry.endDate ? ` – ${entry.endDate}` : ""
              ] }),
              entry.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 line-clamp-2", children: entry.description })
            ] })
          ]
        },
        entry.id
      )),
      isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "w-full gap-2 font-label border-dashed",
          onClick: () => setEntries((prev) => [...prev, blank()]),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
            "Add Job Entry"
          ]
        }
      )
    ] })
  ] });
}
function MedicalTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    medicalConditions: profile.medicalConditions,
    medicalMedications: profile.medicalMedications,
    medicalSurgeries: profile.medicalSurgeries,
    medicalAllergies: profile.medicalAllergies
  });
  const [privacy, setPrivacy] = reactExports.useState(
    profile.medicalPrivacy
  );
  const canView = viewerIsOwner || profile.medicalPrivacy === "public" || profile.medicalPrivacy === "friends";
  const canViewFamily = canView || profile.medicalPrivacy === "family";
  reactExports.useEffect(() => {
    setForm({
      medicalConditions: profile.medicalConditions,
      medicalMedications: profile.medicalMedications,
      medicalSurgeries: profile.medicalSurgeries,
      medicalAllergies: profile.medicalAllergies
    });
    setPrivacy(profile.medicalPrivacy);
  }, [profile]);
  const handleSave = () => {
    onUpdate({ ...form, medicalPrivacy: privacy });
    setIsEditing(false);
    ue.success("Medical information saved");
  };
  const handleCancel = () => {
    setForm({
      medicalConditions: profile.medicalConditions,
      medicalMedications: profile.medicalMedications,
      medicalSurgeries: profile.medicalSurgeries,
      medicalAllergies: profile.medicalAllergies
    });
    setPrivacy(profile.medicalPrivacy);
    setIsEditing(false);
  };
  if (!canViewFamily && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  const renderTags = (value) => {
    const tags = value.split(",").map((s) => s.trim()).filter(Boolean);
    if (tags.length === 0)
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "None" });
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-1", children: tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-secondary text-foreground border border-border font-label",
        children: tag
      },
      tag
    )) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Medical History",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ medicalPrivacy: v });
        },
        isEditing,
        onEdit: () => setIsEditing(true),
        onSave: handleSave,
        onCancel: handleCancel,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
      "medicalConditions",
      "medicalMedications",
      "medicalSurgeries",
      "medicalAllergies"
    ].map((field) => {
      const labels = {
        medicalConditions: "Conditions",
        medicalMedications: "Medications",
        medicalSurgeries: "Surgeries",
        medicalAllergies: "Allergies"
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-xl border border-border bg-secondary/20 p-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: labels[field] }),
            isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: form[field],
                onChange: (e) => setForm((prev) => ({ ...prev, [field]: e.target.value })),
                placeholder: "Comma-separated, e.g. Condition 1, Condition 2",
                rows: 2,
                className: "mt-2 text-sm resize-none"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: renderTags(form[field]) })
          ]
        },
        field
      );
    }) })
  ] });
}
function FinancialTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    financialIncomeRange: profile.financialIncomeRange,
    financialPropertyOwned: profile.financialPropertyOwned,
    financialPropertyDesc: profile.financialPropertyDesc,
    financialAssets: profile.financialAssets,
    financialGoals: profile.financialGoals
  });
  const [privacy, setPrivacy] = reactExports.useState(
    profile.financialPrivacy
  );
  const canView = viewerIsOwner || profile.financialPrivacy === "public" || profile.financialPrivacy === "friends" || profile.financialPrivacy === "family";
  reactExports.useEffect(() => {
    setForm({
      financialIncomeRange: profile.financialIncomeRange,
      financialPropertyOwned: profile.financialPropertyOwned,
      financialPropertyDesc: profile.financialPropertyDesc,
      financialAssets: profile.financialAssets,
      financialGoals: profile.financialGoals
    });
    setPrivacy(profile.financialPrivacy);
  }, [profile]);
  const handleSave = () => {
    onUpdate({ ...form, financialPrivacy: privacy });
    setIsEditing(false);
    ue.success("Financial profile saved");
  };
  const handleCancel = () => {
    setForm({
      financialIncomeRange: profile.financialIncomeRange,
      financialPropertyOwned: profile.financialPropertyOwned,
      financialPropertyDesc: profile.financialPropertyDesc,
      financialAssets: profile.financialAssets,
      financialGoals: profile.financialGoals
    });
    setPrivacy(profile.financialPrivacy);
    setIsEditing(false);
  };
  if (!canView && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Financial Profile",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ financialPrivacy: v });
        },
        isEditing,
        onEdit: () => setIsEditing(true),
        onSave: handleSave,
        onCancel: handleCancel,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/20 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2 block", children: "Monthly Income Range (PKR)" }),
        isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: form.financialIncomeRange,
            onValueChange: (v) => setForm((prev) => ({ ...prev, financialIncomeRange: v })),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select range..." }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: [
                "Below 30,000",
                "30,000 – 100,000",
                "100,000 – 300,000",
                "300,000+",
                "Prefer not to say"
              ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: r, className: "text-sm", children: r }, r)) })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-label", children: form.financialIncomeRange || "—" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/20 p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Property Owned" }),
          isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Switch,
            {
              checked: form.financialPropertyOwned,
              onCheckedChange: (v) => setForm((prev) => ({ ...prev, financialPropertyOwned: v }))
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: form.financialPropertyOwned ? "default" : "secondary",
              className: "text-xs font-label",
              children: form.financialPropertyOwned ? "Yes" : "No"
            }
          )
        ] }),
        form.financialPropertyOwned && (isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: form.financialPropertyDesc,
            onChange: (e) => setForm((prev) => ({
              ...prev,
              financialPropertyDesc: e.target.value
            })),
            placeholder: "Brief description of property owned...",
            rows: 2,
            className: "text-sm resize-none"
          }
        ) : form.financialPropertyDesc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: form.financialPropertyDesc }))
      ] }),
      ["financialAssets", "financialGoals"].map((field) => {
        const labels = {
          financialAssets: "Investments & Assets",
          financialGoals: "Financial Goals"
        };
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl border border-border bg-secondary/20 p-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-2 block", children: labels[field] }),
              isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  value: form[field],
                  onChange: (e) => setForm((prev) => ({ ...prev, [field]: e.target.value })),
                  placeholder: `Enter ${labels[field].toLowerCase()}...`,
                  rows: 2,
                  className: "text-sm resize-none"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: form[field] || "—" })
            ]
          },
          field
        );
      })
    ] })
  ] });
}
function ActivitiesTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner
}) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [hobbies, setHobbies] = reactExports.useState([...profile.hobbies]);
  const [activities, setActivities] = reactExports.useState([
    ...profile.activities
  ]);
  const [privacy, setPrivacy] = reactExports.useState(
    profile.activitiesPrivacy
  );
  const [newHobby, setNewHobby] = reactExports.useState("");
  const canView = viewerIsOwner || profile.activitiesPrivacy === "public" || profile.activitiesPrivacy === "family" || profile.activitiesPrivacy === "friends";
  reactExports.useEffect(() => {
    setHobbies([...profile.hobbies]);
    setActivities([...profile.activities]);
    setPrivacy(profile.activitiesPrivacy);
  }, [profile]);
  const blank = () => ({
    id: `act_${Date.now()}_${Math.random()}`,
    name: "",
    frequency: "Weekly",
    since: ""
  });
  const handleAddHobby = () => {
    const t = newHobby.trim();
    if (!t || hobbies.includes(t)) return;
    setHobbies((prev) => [...prev, t]);
    setNewHobby("");
  };
  const handleSave = () => {
    onUpdate({ hobbies, activities, activitiesPrivacy: privacy });
    setIsEditing(false);
    ue.success("Activities & hobbies saved");
  };
  const handleCancel = () => {
    setHobbies([...profile.hobbies]);
    setActivities([...profile.activities]);
    setPrivacy(profile.activitiesPrivacy);
    setIsEditing(false);
  };
  if (!canView && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Activities & Hobbies",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          if (!isEditing) onUpdate({ activitiesPrivacy: v });
        },
        isEditing,
        onEdit: () => setIsEditing(true),
        onSave: handleSave,
        onCancel: handleCancel,
        canEdit
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/20 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3 block", children: "Hobbies & Interests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          hobbies.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 font-label",
              children: [
                h,
                isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setHobbies((prev) => prev.filter((x) => x !== h)),
                    className: "hover:text-destructive transition-colors",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 10 })
                  }
                )
              ]
            },
            h
          )),
          hobbies.length === 0 && !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "No hobbies added" })
        ] }),
        isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: newHobby,
              onChange: (e) => setNewHobby(e.target.value),
              placeholder: "Add a hobby...",
              className: "h-8 text-sm flex-1",
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddHobby();
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "outline",
              onClick: handleAddHobby,
              className: "h-8 px-3 gap-1 font-label",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 12 }),
                "Add"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Regular Activities" }),
        activities.map((act, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl border border-border bg-secondary/20 p-3 relative",
            children: [
              isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setActivities((prev) => prev.filter((_, i) => i !== idx)),
                  className: "absolute top-3 right-3 w-6 h-6 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 11 })
                }
              ),
              isEditing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 pr-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: act.name,
                    placeholder: "Activity name",
                    onChange: (e) => setActivities(
                      (prev) => prev.map(
                        (a, i) => i === idx ? { ...a, name: e.target.value } : a
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: act.frequency,
                    onValueChange: (v) => setActivities(
                      (prev) => prev.map(
                        (a, i) => i === idx ? { ...a, frequency: v } : a
                      )
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "h-8 text-sm col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: ["Daily", "Weekly", "Monthly"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: f, className: "text-sm", children: f }, f)) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    value: act.since,
                    placeholder: "Since (year)",
                    onChange: (e) => setActivities(
                      (prev) => prev.map(
                        (a, i) => i === idx ? { ...a, since: e.target.value } : a
                      )
                    ),
                    className: "h-8 text-sm"
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-medium text-sm text-foreground flex-1", children: act.name || "—" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] px-1.5 py-0 font-label shrink-0",
                    children: act.frequency
                  }
                ),
                act.since && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground shrink-0", children: [
                  "since ",
                  act.since
                ] })
              ] })
            ]
          },
          act.id
        )),
        isEditing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            size: "sm",
            className: "w-full gap-2 font-label border-dashed",
            onClick: () => setActivities((prev) => [...prev, blank()]),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 13 }),
              "Add Activity"
            ]
          }
        ),
        activities.length === 0 && !isEditing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-4 text-muted-foreground text-xs", children: "No regular activities added yet." })
      ] })
    ] })
  ] });
}
function BusinessesTab({
  profile,
  canEdit,
  onUpdate,
  viewerIsOwner,
  memberId
}) {
  const [privacy, setPrivacy] = reactExports.useState(
    profile.businessesPrivacy
  );
  const businesses = loadBusinesses(memberId);
  const canView = viewerIsOwner || profile.businessesPrivacy === "public" || profile.businessesPrivacy === "family" || profile.businessesPrivacy === "friends";
  reactExports.useEffect(() => {
    setPrivacy(profile.businessesPrivacy);
  }, [profile]);
  if (!canView && !viewerIsOwner) return /* @__PURE__ */ jsxRuntimeExports.jsx(PrivatePlaceholder, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        title: "Businesses",
        icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
        privacy,
        onPrivacyChange: (v) => {
          setPrivacy(v);
          onUpdate({ businessesPrivacy: v });
        },
        isEditing: false,
        onEdit: () => {
        },
        onSave: () => {
        },
        onCancel: () => {
        },
        canEdit
      }
    ),
    businesses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 28, className: "mx-auto mb-2 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No businesses linked to this profile." }),
      viewerIsOwner && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-1 text-muted-foreground", children: 'Add businesses in the "My Businesses" section below the family tree.' })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: businesses.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-border bg-secondary/20 p-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 15, className: "text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground truncate", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-0.5 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] px-1.5 py-0 font-label",
                    children: b.type
                  }
                ),
                b.category && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: b.category })
              ] })
            ] })
          ] }),
          b.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 10, className: "shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: b.location })
          ] }),
          b.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 line-clamp-2", children: b.description }),
          (b.website || b.phone) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-2 pt-2 border-t border-border/60", children: [
            b.website && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: b.website.startsWith("http") ? b.website : `https://${b.website}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-1 text-xs text-primary hover:underline",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 10 }),
                  "Website"
                ]
              }
            ),
            b.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:${b.phone}`,
                className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 10 }),
                  b.phone
                ]
              }
            )
          ] })
        ]
      },
      b.id
    )) })
  ] });
}
function ProfileTab({
  member,
  canEdit,
  viewerIsOwner
}) {
  var _a;
  const fields = [
    { label: "Name", value: member.name },
    { label: "Blood Type", value: member.bloodType || "Unknown" },
    { label: "Occupation", value: member.occupation || "—" },
    {
      label: "Medical Conditions",
      value: !viewerIsOwner && !member.isPublic ? "Private" : ((_a = member.medicalConditions) == null ? void 0 : _a.join(", ")) || "None"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 16, className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-sm text-foreground", children: "Basic Profile" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: member.isPublic ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "text-[10px] px-1.5 py-0 font-label gap-1 border-green-500/30 text-green-600 bg-green-500/8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 8 }),
            "Public"
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "outline",
          className: "text-[10px] px-1.5 py-0 font-label gap-1 border-muted-foreground/30 text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 8 }),
            "Private"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: fields.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-xl border border-border bg-secondary/20 px-4 py-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground mt-1 font-label", children: value })
        ]
      },
      label
    )) }),
    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Quick edit tip:" }),
      " ",
      "Hover the member card and click the pencil icon to edit basic profile fields quickly."
    ] }) })
  ] });
}
function ExtendedProfileSheet({
  open,
  onClose,
  member,
  isOwner,
  isAdmin,
  principalId
}) {
  const canEdit = isOwner || isAdmin;
  const memberId = member ? member.id.toString() : "";
  const [extProfile, setExtProfile] = reactExports.useState(
    DEFAULT_EXTENDED_PROFILE
  );
  reactExports.useEffect(() => {
    if (!member) return;
    setExtProfile(loadExtendedProfile(memberId));
  }, [member, memberId]);
  const handleUpdate = (updates) => {
    if (!member) return;
    const next = { ...extProfile, ...updates };
    setExtProfile(next);
    saveExtendedProfile(memberId, next);
  };
  if (!member) return null;
  const relLabel = member.id === BigInt(0) ? "You" : (() => {
    const k = member.relationship.__kind__;
    if (k === "other")
      return member.relationship.other || "Other";
    return {
      parent: "Parent",
      child: "Child",
      sibling: "Sibling",
      spouse: "Spouse"
    }[k] || k;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-xl flex flex-col p-0 gap-0 overflow-hidden",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Tabs,
        {
          defaultValue: "profile",
          className: "flex flex-col h-full overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-6 pb-0 border-b border-border shrink-0 bg-background", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { className: "p-0 mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "sr-only", children: [
                member.name,
                " - Extended Profile"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 pb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-lg font-display font-bold text-primary", children: member.name.charAt(0).toUpperCase() }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 pr-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base leading-snug text-foreground truncate", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] px-1.5 py-0 font-label border-primary/30 text-primary bg-primary/8",
                        children: relLabel
                      }
                    ),
                    canEdit && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        variant: "outline",
                        className: "text-[10px] px-1.5 py-0 font-label gap-1 border-amber-500/30 text-amber-600 bg-amber-500/8",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 7 }),
                          "Can edit"
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsList, { className: "w-full h-auto flex flex-wrap gap-0.5 bg-transparent border-0 p-0 pb-0 rounded-none", children: [
                {
                  value: "profile",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleUserRound, { size: 13 }),
                  label: "Profile"
                },
                {
                  value: "education",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 13 }),
                  label: "Education"
                },
                { value: "jobs", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 13 }), label: "Jobs" },
                {
                  value: "medical",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { size: 13 }),
                  label: "Medical"
                },
                {
                  value: "financial",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { size: 13 }),
                  label: "Financial"
                },
                {
                  value: "activities",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 13 }),
                  label: "Activities"
                },
                {
                  value: "businesses",
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 13 }),
                  label: "Businesses"
                }
              ].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                TabsTrigger,
                {
                  value: tab.value,
                  className: "flex-1 min-w-0 gap-1 text-[11px] font-label px-2 py-2 h-auto rounded-t-lg rounded-b-none data-[state=active]:bg-background data-[state=active]:border-t data-[state=active]:border-x data-[state=active]:border-border data-[state=active]:border-b-0 data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground transition-colors",
                  children: [
                    tab.icon,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline truncate", children: tab.label })
                  ]
                },
                tab.value
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "profile", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProfileTab,
                {
                  member,
                  canEdit,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "education", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                EducationTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "jobs", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                JobsTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "medical", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                MedicalTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "financial", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                FinancialTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activities", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ActivitiesTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "businesses", className: "p-6 mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                BusinessesTab,
                {
                  profile: extProfile,
                  canEdit,
                  onUpdate: handleUpdate,
                  viewerIsOwner: isOwner,
                  memberId: isOwner ? principalId : memberId
                }
              ) })
            ] })
          ]
        }
      )
    }
  ) });
}
function getCircleKey(principalId) {
  return `familysocial_circle_${principalId}`;
}
function loadCircle(principalId) {
  try {
    const raw = localStorage.getItem(getCircleKey(principalId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveCircle(principalId, circle) {
  try {
    localStorage.setItem(getCircleKey(principalId), JSON.stringify(circle));
  } catch {
  }
}
const BANNER_PRESETS = [
  { label: "Violet", value: "oklch(0.55 0.22 280)" },
  { label: "Rose", value: "oklch(0.65 0.25 335)" },
  { label: "Emerald", value: "oklch(0.52 0.14 155)" },
  { label: "Amber", value: "oklch(0.72 0.17 85)" },
  { label: "Sky", value: "oklch(0.55 0.18 240)" },
  { label: "Coral", value: "oklch(0.62 0.22 25)" }
];
function EditBannerDialog({ circle, onSave }) {
  const [open, setOpen] = reactExports.useState(false);
  const [name, setName] = reactExports.useState(circle.name);
  const [bannerColor, setBannerColor] = reactExports.useState(
    circle.bannerColor || BANNER_PRESETS[0].value
  );
  const [bannerImageUrl, setBannerImageUrl] = reactExports.useState(
    circle.bannerImageUrl || ""
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(true),
        className: "text-[10px] font-label font-semibold px-2 py-1 rounded border border-white/30 bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1",
        style: { color: "rgba(255,255,255,0.9)" },
        "aria-label": "Edit circle banner",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              width: "10",
              height: "10",
              viewBox: "0 0 16 16",
              fill: "currentColor",
              "aria-hidden": "true",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" })
            }
          ),
          "Edit Circle"
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl p-5 w-full max-w-sm shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-label font-semibold text-foreground mb-4", children: "Edit Family Circle" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "edit-circle-name",
              className: "text-xs font-label text-muted-foreground",
              children: "Circle Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "edit-circle-name",
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "w-full h-9 px-3 text-sm font-label bg-secondary/60 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground", children: "Banner Color" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: BANNER_PRESETS.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "w-8 h-8 rounded-lg border-2 transition-transform hover:scale-110",
              style: {
                background: preset.value,
                borderColor: bannerColor === preset.value ? "oklch(var(--foreground))" : "transparent"
              },
              title: preset.label,
              onClick: () => setBannerColor(preset.value)
            },
            preset.value
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "edit-banner-url",
              className: "text-xs font-label text-muted-foreground",
              children: "Banner Image URL (optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "edit-banner-url",
              type: "url",
              value: bannerImageUrl,
              onChange: (e) => setBannerImageUrl(e.target.value),
              placeholder: "https://...",
              className: "w-full h-9 px-3 text-sm font-label bg-secondary/60 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2 mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setOpen(false),
            className: "text-xs font-label px-3 py-1.5 rounded-lg border border-border hover:bg-secondary/60 transition-colors",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              onSave({ name: name.trim(), bannerColor, bannerImageUrl });
              setOpen(false);
              ue.success("Circle updated!");
            },
            className: "text-xs font-label font-semibold px-3 py-1.5 rounded-lg text-white transition-colors",
            style: { background: bannerColor },
            children: "Save Changes"
          }
        )
      ] })
    ] }) })
  ] });
}
function FamilyCircleBanner({
  circle,
  members,
  isAdmin,
  onManage,
  onCircleUpdate
}) {
  const circleMembers = members.filter(
    (m) => circle == null ? void 0 : circle.memberIds.includes(m.id.toString())
  );
  const visibleMembers = circleMembers.slice(0, 5);
  const extraCount = Math.max(0, circleMembers.length - 5);
  if (!circle) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl border border-dashed border-primary/30 bg-gradient-to-r from-primary/5 via-primary/3 to-accent/5 p-5 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { size: 20, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground text-sm", children: "Create Your Family Circle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Bring your family together in a private, named group" })
        ] })
      ] }),
      isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          size: "sm",
          onClick: onManage,
          className: "gap-2 shrink-0 font-label",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            "Create Circle"
          ]
        }
      )
    ] });
  }
  const bannerBg = circle.bannerImageUrl ? `url(${circle.bannerImageUrl}) center/cover no-repeat` : circle.bannerColor || "oklch(0.55 0.22 280)";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "mb-6 rounded-2xl overflow-hidden shadow-md",
      style: { background: bannerBg },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "p-5",
          style: {
            background: circle.bannerImageUrl ? "rgba(0,0,0,0.45)" : `${circle.bannerColor || "oklch(0.55 0.22 280)"}cc`
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                  style: { background: "rgba(255,255,255,0.2)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    UsersRound,
                    {
                      size: 20,
                      style: { color: "rgba(255,255,255,0.9)" }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-display font-bold truncate",
                      style: {
                        color: "rgba(255,255,255,0.95)",
                        fontSize: "1.1rem"
                      },
                      children: circle.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: "text-[10px] px-1.5 py-0 font-label shrink-0",
                      style: {
                        borderColor: "rgba(255,255,255,0.4)",
                        color: "rgba(255,255,255,0.9)",
                        background: "rgba(255,255,255,0.15)"
                      },
                      children: "Family Circle"
                    }
                  )
                ] }),
                circle.description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-xs mt-0.5 truncate max-w-xs",
                    style: { color: "rgba(255,255,255,0.7)" },
                    children: circle.description
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                visibleMembers.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Avatar,
                  {
                    className: "w-7 h-7 border-2",
                    style: {
                      marginLeft: i > 0 ? "-10px" : void 0,
                      borderColor: "rgba(255,255,255,0.4)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      AvatarFallback,
                      {
                        className: "text-[10px] font-bold",
                        style: {
                          background: "rgba(255,255,255,0.2)",
                          color: "rgba(255,255,255,0.9)"
                        },
                        children: m.name.charAt(0).toUpperCase()
                      }
                    )
                  },
                  m.id.toString()
                )),
                extraCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold",
                    style: {
                      marginLeft: "-10px",
                      borderColor: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.9)"
                    },
                    children: [
                      "+",
                      extraCount
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-xs font-label",
                  style: { color: "rgba(255,255,255,0.8)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-semibold",
                        style: { color: "rgba(255,255,255,0.95)" },
                        children: circleMembers.length
                      }
                    ),
                    " ",
                    "member",
                    circleMembers.length !== 1 ? "s" : ""
                  ]
                }
              ),
              isAdmin && onCircleUpdate && /* @__PURE__ */ jsxRuntimeExports.jsx(EditBannerDialog, { circle, onSave: onCircleUpdate }),
              isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: onManage,
                  className: "text-[10px] font-label font-semibold px-2 py-1 rounded border border-white/30 bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1",
                  style: { color: "rgba(255,255,255,0.9)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
                    "Manage"
                  ]
                }
              )
            ] })
          ] })
        }
      )
    }
  );
}
function FamilyCircleManagerSheet({
  open,
  onClose,
  circle,
  members,
  principalId,
  onCircleChange
}) {
  const [name, setName] = reactExports.useState((circle == null ? void 0 : circle.name) ?? "");
  const [description, setDescription] = reactExports.useState((circle == null ? void 0 : circle.description) ?? "");
  const [selectedMemberIds, setSelectedMemberIds] = reactExports.useState(
    () => new Set((circle == null ? void 0 : circle.memberIds) ?? [])
  );
  const [coAdminIds, setCoAdminIds] = reactExports.useState(
    () => new Set((circle == null ? void 0 : circle.coAdminIds) ?? [])
  );
  reactExports.useEffect(() => {
    setName((circle == null ? void 0 : circle.name) ?? "");
    setDescription((circle == null ? void 0 : circle.description) ?? "");
    setSelectedMemberIds(new Set((circle == null ? void 0 : circle.memberIds) ?? []));
    setCoAdminIds(new Set((circle == null ? void 0 : circle.coAdminIds) ?? []));
  }, [circle]);
  const handleSave = () => {
    if (!name.trim()) {
      ue.error("Circle name is required");
      return;
    }
    const updated = {
      id: (circle == null ? void 0 : circle.id) ?? `circle_${Date.now()}`,
      name: name.trim(),
      description: description.trim(),
      adminIds: [principalId],
      memberIds: Array.from(selectedMemberIds),
      coAdminIds: Array.from(coAdminIds),
      createdAt: (circle == null ? void 0 : circle.createdAt) ?? (/* @__PURE__ */ new Date()).toISOString()
    };
    saveCircle(principalId, updated);
    onCircleChange(updated);
    ue.success(circle ? "Family circle updated" : "Family circle created!");
    onClose();
  };
  const handleDelete = () => {
    if (!confirm("Delete this family circle? This cannot be undone.")) return;
    try {
      localStorage.removeItem(getCircleKey(principalId));
    } catch {
    }
    onCircleChange(null);
    ue.success("Family circle deleted");
    onClose();
  };
  const toggleMember = (id) => {
    setSelectedMemberIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setCoAdminIds((ca) => {
          const nca = new Set(ca);
          nca.delete(id);
          return nca;
        });
      } else {
        next.add(id);
      }
      return next;
    });
  };
  const toggleCoAdmin = (id) => {
    setCoAdminIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  const removeMember = (id) => {
    setSelectedMemberIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setCoAdminIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };
  const circleMembers = members.filter(
    (m) => selectedMemberIds.has(m.id.toString())
  );
  const nonCircleMembers = members.filter(
    (m) => !selectedMemberIds.has(m.id.toString())
  );
  const previewName = name.trim() || "Your Family Circle";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Sheet, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SheetContent,
    {
      side: "right",
      className: "w-full sm:max-w-lg flex flex-col p-0 gap-0 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetHeader, { className: "px-6 pt-6 pb-4 border-b border-border shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetTitle, { className: "font-display text-lg flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { size: 20, className: "text-primary" }),
            circle ? "Manage Family Circle" : "Create Family Circle"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: circle ? "Edit circle settings, manage members and roles" : "Create a named group for your family members" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-primary/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-label font-semibold uppercase tracking-wider text-primary mb-2", children: "Preview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { size: 18, className: "text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm text-foreground", children: previewName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                  circleMembers.length,
                  " member",
                  circleMembers.length !== 1 ? "s" : "",
                  " · You are the Admin"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                "Circle Name ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  placeholder: "e.g. The Khan Family",
                  value: name,
                  onChange: (e) => setName(e.target.value)
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  placeholder: "A brief description of your family circle...",
                  value: description,
                  onChange: (e) => setDescription(e.target.value),
                  rows: 2
                }
              )
            ] })
          ] }),
          circleMembers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-label font-semibold text-foreground", children: [
              "Circle Members (",
              circleMembers.length,
              ")"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: circleMembers.map((m) => {
              const mid = m.id.toString();
              const isCoAdmin = coAdminIds.has(mid);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-3 py-2.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "w-8 h-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs font-bold bg-primary/10 text-primary", children: m.name.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-medium text-sm text-foreground truncate", children: m.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1.5 mt-0.5", children: isCoAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-[10px] px-1.5 py-0 gap-1 bg-amber-500/15 text-amber-600 border-amber-500/30 font-label", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 8 }),
                        "Co-Admin"
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "secondary",
                          className: "text-[10px] px-1.5 py-0 font-label",
                          children: "Member"
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => toggleCoAdmin(mid),
                          title: isCoAdmin ? "Remove Co-Admin" : "Make Co-Admin",
                          className: `w-7 h-7 rounded-md border flex items-center justify-center transition-colors
                            ${isCoAdmin ? "bg-amber-500/15 border-amber-500/30 text-amber-600 hover:bg-amber-500/25" : "border-border bg-background text-muted-foreground hover:bg-amber-500/10 hover:text-amber-600 hover:border-amber-500/30"}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { size: 12 })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => removeMember(mid),
                          title: "Remove from circle",
                          className: "w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center text-muted-foreground hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-colors",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
                        }
                      )
                    ] })
                  ]
                },
                mid
              );
            }) })
          ] }),
          nonCircleMembers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Add Members" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: nonCircleMembers.map((m) => {
              const mid = m.id.toString();
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5 cursor-pointer hover:bg-secondary/30 transition-colors w-full text-left",
                  onClick: () => toggleMember(mid),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Checkbox,
                      {
                        checked: selectedMemberIds.has(mid),
                        onCheckedChange: () => toggleMember(mid),
                        onClick: (e) => e.stopPropagation()
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "w-8 h-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "text-xs font-bold bg-muted text-muted-foreground", children: m.name.charAt(0).toUpperCase() }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-medium text-sm text-foreground truncate", children: m.name }),
                      m.occupation && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: m.occupation })
                    ] })
                  ]
                },
                mid
              );
            }) })
          ] }),
          members.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Shield,
              {
                size: 24,
                className: "text-muted-foreground mx-auto mb-2"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add family members to your tree first, then add them to your circle." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-t border-border shrink-0 flex gap-2", children: [
          circle && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: handleDelete,
              className: "gap-2 text-destructive border-destructive/30 hover:bg-destructive/10 hover:text-destructive",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }),
                "Delete"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "font-label", children: "Cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: handleSave, className: "gap-2 font-label", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { size: 14 }),
            circle ? "Save Changes" : "Create Circle"
          ] })
        ] })
      ]
    }
  ) });
}
const BLOOD_TYPES = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
  "Unknown"
];
const RELATIONSHIP_LABELS = {
  parent: "Parent",
  child: "Child",
  sibling: "Sibling",
  spouse: "Spouse",
  other: "Other"
};
const RELATIONSHIP_COLORS = {
  parent: "oklch(0.52 0.14 155)",
  child: "oklch(0.65 0.14 50)",
  sibling: "oklch(0.48 0.12 260)",
  spouse: "oklch(0.72 0.17 85)",
  other: "oklch(0.58 0.16 350)"
};
const BUSINESS_TYPES = [
  "Retail",
  "Restaurant",
  "Services",
  "Technology",
  "Healthcare",
  "Education",
  "Real Estate",
  "Transport",
  "Manufacturing",
  "Other"
];
function getRelationshipKind(rel) {
  return rel.__kind__;
}
function getRelationshipLabel(rel) {
  const kind = rel.__kind__;
  if (kind === "other")
    return rel.other || "Other";
  return RELATIONSHIP_LABELS[kind] || kind;
}
function MemberCard({
  member,
  isCenter = false,
  isAdmin = false,
  isOwn = false,
  onEdit,
  onClick,
  lifestyleActive
}) {
  var _a;
  const relKind = getRelationshipKind(member.relationship);
  const relColor = RELATIONSHIP_COLORS[relKind] || RELATIONSHIP_COLORS.other;
  const canEdit = isAdmin || isOwn || isCenter;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: `
        family-tree-node rounded-xl border bg-card shadow-card hover:shadow-card-hover cursor-pointer
        transition-all duration-200 group relative text-left
        ${isCenter ? "border-primary/40 ring-2 ring-primary/20" : "border-border"}
      `,
      style: { minWidth: "160px", maxWidth: "200px" },
      onClick: () => onClick == null ? void 0 : onClick(member),
      children: [
        !isCenter && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1 w-full rounded-t-xl",
            style: { background: relColor }
          }
        ),
        isCenter && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-1 w-full rounded-t-xl",
            style: { background: "oklch(var(--primary))" }
          }
        ),
        canEdit && onEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onEdit(member);
            },
            className: "absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity\n            w-6 h-6 rounded-md bg-background/90 border border-border shadow-sm\n            flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary",
            "aria-label": "Edit member",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 11 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-9 h-9 rounded-full flex items-center justify-center text-sm font-label font-bold shrink-0",
                style: isCenter ? {
                  background: "oklch(var(--primary) / 0.15)",
                  color: "oklch(var(--primary))"
                } : { background: `${relColor}22`, color: relColor },
                children: member.name.charAt(0).toUpperCase()
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground truncate pr-5", children: member.name }),
              !isCenter && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] px-1.5 py-0 mt-0.5 font-label border-0",
                  style: { background: `${relColor}18`, color: relColor },
                  children: getRelationshipLabel(member.relationship)
                }
              ),
              isCenter && /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "outline",
                  className: "text-[10px] px-1.5 py-0 mt-0.5 font-label border-0 bg-primary/10 text-primary",
                  children: "You"
                }
              )
            ] })
          ] }),
          isCenter && lifestyleActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mb-2", children: [
            lifestyleActive.matrimony && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-label font-semibold bg-pink-500/15 text-pink-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 8 }),
              "Matrimony Active"
            ] }),
            lifestyleActive.dating && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-label font-semibold bg-purple-500/15 text-purple-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 8 }),
              "Dating Active"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            member.bloodType && member.bloodType !== "Unknown" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Droplets,
                {
                  size: 11,
                  className: "shrink-0",
                  style: { color: "oklch(0.55 0.22 25)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-label", children: member.bloodType })
            ] }),
            member.occupation && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 11, className: "shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.occupation })
            ] }),
            (member.isPublic || isCenter) && ((_a = member.medicalConditions) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleAlert,
                {
                  size: 11,
                  className: "shrink-0 mt-0.5",
                  style: { color: "oklch(0.65 0.14 50)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: member.medicalConditions.slice(0, 2).join(", ") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1 text-[10px] text-muted-foreground", children: [
            member.isPublic ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 10 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { size: 10 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: member.isPublic ? "Public" : "Private" })
          ] })
        ] })
      ]
    }
  );
}
function GroupedMembers({
  members,
  isAdmin,
  onEdit,
  onCardClick
}) {
  if (members.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 justify-center", children: members.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    MemberCard,
    {
      member: m,
      isAdmin,
      onEdit,
      onClick: onCardClick
    },
    m.id.toString()
  )) });
}
const DEFAULT_MEMBER_FORM = {
  name: "",
  relationship: "parent",
  otherRelationship: "",
  bloodType: "Unknown",
  occupation: "",
  medicalConditions: "",
  isPublic: false,
  bizCategory: "",
  bizMode: "none",
  bizName: "",
  bizLocation: "",
  bizPhone: "",
  bizLinkId: ""
};
function EditMemberDialog({
  member,
  open,
  onClose,
  onSave,
  isSaving
}) {
  const [form, setForm] = reactExports.useState(DEFAULT_MEMBER_FORM);
  reactExports.useEffect(() => {
    if (!member) return;
    const relKind = getRelationshipKind(member.relationship);
    setForm({
      name: member.name,
      relationship: relKind,
      otherRelationship: relKind === "other" ? member.relationship.other || "" : "",
      bloodType: member.bloodType || "Unknown",
      occupation: member.occupation || "",
      medicalConditions: (member.medicalConditions || []).join(", "),
      isPublic: member.isPublic
    });
  }, [member]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!member || !form.name.trim()) {
      ue.error("Please enter a name");
      return;
    }
    let relationship;
    switch (form.relationship) {
      case "parent":
        relationship = { __kind__: "parent", parent: null };
        break;
      case "child":
        relationship = { __kind__: "child", child: null };
        break;
      case "sibling":
        relationship = { __kind__: "sibling", sibling: null };
        break;
      case "spouse":
        relationship = { __kind__: "spouse", spouse: null };
        break;
      default:
        relationship = {
          __kind__: "other",
          other: form.otherRelationship || "Other"
        };
    }
    const medConditions = form.medicalConditions ? form.medicalConditions.split(",").map((s) => s.trim()).filter(Boolean) : [];
    await onSave({
      id: member.id,
      name: form.name.trim(),
      relationship,
      bloodType: form.bloodType,
      occupation: form.occupation.trim(),
      medicalConditions: medConditions,
      isPublic: form.isPublic
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Edit Family Member" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
          "Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Full name",
            value: form.name,
            onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Relationship" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.relationship,
              onValueChange: (v) => setForm((p) => ({ ...p, relationship: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "parent", children: "Parent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "child", children: "Child" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sibling", children: "Sibling" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "spouse", children: "Spouse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Blood Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.bloodType,
              onValueChange: (v) => setForm((p) => ({ ...p, bloodType: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_TYPES.map((bt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: bt, children: bt }, bt)) })
              ]
            }
          )
        ] })
      ] }),
      form.relationship === "other" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Specify Relationship" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Uncle, Aunt, Cousin",
            value: form.otherRelationship,
            onChange: (e) => setForm((p) => ({
              ...p,
              otherRelationship: e.target.value
            }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Occupation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Teacher, Engineer, Student",
            value: form.occupation,
            onChange: (e) => setForm((p) => ({ ...p, occupation: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Medical Conditions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Comma-separated, e.g. Diabetes, Hypertension",
            value: form.medicalConditions,
            onChange: (e) => setForm((p) => ({ ...p, medicalConditions: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary/60 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Make Public" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Show this member to community members" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: form.isPublic,
            onCheckedChange: (v) => setForm((p) => ({ ...p, isPublic: v }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "flex-1",
            onClick: onClose,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "flex-1", disabled: isSaving, children: isSaving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
          "Saving..."
        ] }) : "Save Changes" })
      ] })
    ] })
  ] }) });
}
function EditProfileDialog({
  userProfile,
  open,
  onClose
}) {
  const saveProfile = useSaveUserProfile();
  const [form, setForm] = reactExports.useState({
    name: "",
    occupation: "",
    bloodType: "Unknown",
    dateOfBirth: "",
    bio: "",
    isPrivate: true
  });
  reactExports.useEffect(() => {
    if (!userProfile) return;
    setForm({
      name: userProfile.name || "",
      occupation: userProfile.occupation || "",
      bloodType: userProfile.bloodType || "Unknown",
      dateOfBirth: userProfile.dateOfBirth || "",
      bio: userProfile.bio || "",
      isPrivate: userProfile.isPrivate ?? true
    });
  }, [userProfile]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveProfile.mutateAsync({
        name: form.name.trim(),
        occupation: form.occupation.trim(),
        bloodType: form.bloodType,
        dateOfBirth: form.dateOfBirth,
        bio: form.bio.trim(),
        isPrivate: form.isPrivate,
        photoUrl: (userProfile == null ? void 0 : userProfile.photoUrl) || ""
      });
      ue.success("Profile updated successfully");
      onClose();
    } catch {
      ue.error("Failed to update profile");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Edit Your Profile" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
          "Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "Your full name",
            value: form.name,
            onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Blood Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.bloodType,
              onValueChange: (v) => setForm((p) => ({ ...p, bloodType: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_TYPES.map((bt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: bt, children: bt }, bt)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date of Birth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              value: form.dateOfBirth,
              onChange: (e) => setForm((p) => ({ ...p, dateOfBirth: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Occupation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Teacher, Engineer, Student",
            value: form.occupation,
            onChange: (e) => setForm((p) => ({ ...p, occupation: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Tell your family about yourself...",
            value: form.bio,
            onChange: (e) => setForm((p) => ({ ...p, bio: e.target.value })),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary/60 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Private Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Only family members can see your details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Switch,
          {
            checked: form.isPrivate,
            onCheckedChange: (v) => setForm((p) => ({ ...p, isPrivate: v }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "flex-1",
            onClick: onClose,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "submit",
            className: "flex-1",
            disabled: saveProfile.isPending,
            children: saveProfile.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Saving..."
            ] }) : "Save Profile"
          }
        )
      ] })
    ] })
  ] }) });
}
const DEFAULT_BUSINESS = {
  name: "",
  type: "Services",
  category: "",
  location: "",
  description: "",
  website: "",
  phone: ""
};
function BusinessDialog({
  business,
  open,
  onClose,
  onSave
}) {
  const [form, setForm] = reactExports.useState(DEFAULT_BUSINESS);
  reactExports.useEffect(() => {
    if (business) {
      setForm({
        name: business.name,
        type: business.type,
        category: business.category,
        location: business.location,
        description: business.description,
        website: business.website,
        phone: business.phone
      });
    } else {
      setForm(DEFAULT_BUSINESS);
    }
  }, [business]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      ue.error("Business name is required");
      return;
    }
    onSave({
      id: (business == null ? void 0 : business.id) || `biz_${Date.now()}`,
      ...form,
      name: form.name.trim()
    });
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (v) => !v && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-lg max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: business ? "Edit Business" : "Add Business" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
          "Business Name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Ahmed Traders",
            value: form.name,
            onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Business Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              value: form.type,
              onValueChange: (v) => setForm((p) => ({ ...p, type: v })),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BUSINESS_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: t, children: t }, t)) })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "e.g. Grocery, IT Services",
              value: form.category,
              onChange: (e) => setForm((p) => ({ ...p, category: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            placeholder: "e.g. Lahore, Punjab",
            value: form.location,
            onChange: (e) => setForm((p) => ({ ...p, location: e.target.value }))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            placeholder: "Brief description of your business...",
            value: form.description,
            onChange: (e) => setForm((p) => ({ ...p, description: e.target.value })),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Website URL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "https://example.com",
              value: form.website,
              onChange: (e) => setForm((p) => ({ ...p, website: e.target.value }))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              placeholder: "+92 300 1234567",
              value: form.phone,
              onChange: (e) => setForm((p) => ({ ...p, phone: e.target.value }))
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "flex-1",
            onClick: onClose,
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "flex-1", children: business ? "Save Changes" : "Add Business" })
      ] })
    ] })
  ] }) });
}
function BusinessCard({
  business,
  onEdit,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 flex flex-col gap-3 hover:shadow-card-hover transition-shadow group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 18, className: "text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-sm text-foreground truncate", children: business.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-[10px] px-1.5 py-0 mt-0.5 font-label",
              children: business.type
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => onEdit(business),
            className: "w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors",
            "aria-label": "Edit business",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 12 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              if (confirm(`Delete "${business.name}"?`)) {
                onDelete(business.id);
              }
            },
            className: "w-7 h-7 rounded-md border border-border bg-background flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors",
            "aria-label": "Delete business",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 })
          }
        )
      ] })
    ] }),
    business.category && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-label", children: business.category }),
    business.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 11, className: "shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: business.location })
    ] }),
    business.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2", children: business.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-auto", children: [
      business.website && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: business.website.startsWith("http") ? business.website : `https://${business.website}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1 text-xs text-primary hover:underline",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 10 }),
            "Website"
          ]
        }
      ),
      business.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `tel:${business.phone}`,
          className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 10 }),
            business.phone
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 pt-2 border-t border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: 10, className: "text-muted-foreground shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-label", children: "Linked to Family Tree" })
    ] })
  ] });
}
const FT_PRIVACY_KEY = "ic_familytree_privacy";
function FamilyTreePrivacyBadge() {
  const [privacy] = reactExports.useState(
    () => localStorage.getItem(FT_PRIVACY_KEY) || "Private"
  );
  const colors = {
    Public: "bg-green-500/15 text-green-600 border-green-500/30",
    Restricted: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    Private: "bg-muted text-muted-foreground border-border"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: `text-[10px] font-label gap-1 ${colors[privacy]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 9 }),
    privacy
  ] });
}
function FamilyTreeShareButton() {
  const [privacy, setPrivacy] = reactExports.useState(
    () => localStorage.getItem(FT_PRIVACY_KEY) || "Private"
  );
  const [copied, setCopied] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const url = `${typeof window !== "undefined" ? window.location.origin : ""}?page=family-tree`;
  const handlePrivacyChange = (val) => {
    setPrivacy(val);
    localStorage.setItem(FT_PRIVACY_KEY, val);
  };
  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "gap-2 font-label",
        "data-ocid": "familytree.share.button",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
          "Share"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      PopoverContent,
      {
        className: "w-80 p-4 space-y-4",
        align: "end",
        "data-ocid": "familytree.share.popover",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Share Family Tree" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Share this link to let others view your Family Tree" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Page URL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: url, readOnly: true, className: "text-xs h-8 flex-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  size: "sm",
                  variant: "outline",
                  className: "h-8 px-2",
                  onClick: copyLink,
                  children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 13, className: "text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 13 })
                }
              )
            ] }),
            copied && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-600", children: "Copied!" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Visibility" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              RadioGroup,
              {
                value: privacy,
                onValueChange: (v) => handlePrivacyChange(v),
                className: "space-y-1",
                children: ["Public", "Restricted", "Private"].map(
                  (opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RadioGroupItem, { value: opt, id: `ft-privacy-${opt}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: `ft-privacy-${opt}`,
                        className: "text-xs cursor-pointer",
                        children: opt === "Public" ? "🌍 Public — anyone with the link can view" : opt === "Restricted" ? "🔒 Restricted — only family circle members" : "🔐 Private — only you"
                      }
                    )
                  ] }, opt)
                )
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function FamilyTreePage({ userProfile, onNavigate }) {
  const { actor, isFetching: actorFetching } = useActor();
  const { identity } = useInternetIdentity();
  const principalId = (identity == null ? void 0 : identity.getPrincipal().toString()) ?? "anonymous";
  const { data: members, isLoading } = useGetFamilyTree();
  const addMember = useAddFamilyMember();
  const { data: isAdmin } = useQuery({
    queryKey: ["isAdmin"],
    queryFn: async () => actor ? actor.isCallerAdmin() : false,
    enabled: !!actor && !actorFetching
  });
  const [open, setOpen] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState(DEFAULT_MEMBER_FORM);
  const [editMember, setEditMember] = reactExports.useState(null);
  const [editMemberOpen, setEditMemberOpen] = reactExports.useState(false);
  const [isSavingMember, setIsSavingMember] = reactExports.useState(false);
  const [editProfileOpen, setEditProfileOpen] = reactExports.useState(false);
  const [circle, setCircle] = reactExports.useState(
    () => loadCircle(principalId)
  );
  const [circleManagerOpen, setCircleManagerOpen] = reactExports.useState(false);
  const [extProfileMember, setExtProfileMember] = reactExports.useState(
    null
  );
  const [extProfileOpen, setExtProfileOpen] = reactExports.useState(false);
  const lifestyleKey = `familysocial_lifestyle_${principalId}`;
  const [matrimonyEnabled, setMatrimonyEnabled] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem(lifestyleKey);
      return stored ? JSON.parse(stored).matrimony ?? false : false;
    } catch {
      return false;
    }
  });
  const [datingEnabled, setDatingEnabled] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem(lifestyleKey);
      return stored ? JSON.parse(stored).dating ?? false : false;
    } catch {
      return false;
    }
  });
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(
        lifestyleKey,
        JSON.stringify({ matrimony: matrimonyEnabled, dating: datingEnabled })
      );
    } catch {
    }
  }, [matrimonyEnabled, datingEnabled, lifestyleKey]);
  const businessesKey = `familysocial_businesses_${principalId}`;
  const [businesses, setBusinesses] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem(businessesKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [businessDialogOpen, setBusinessDialogOpen] = reactExports.useState(false);
  const [editingBusiness, setEditingBusiness] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      localStorage.setItem(businessesKey, JSON.stringify(businesses));
    } catch {
    }
  }, [businesses, businessesKey]);
  const parents = (members == null ? void 0 : members.filter((m) => getRelationshipKind(m.relationship) === "parent")) ?? [];
  const siblings = (members == null ? void 0 : members.filter((m) => getRelationshipKind(m.relationship) === "sibling")) ?? [];
  const spouses = (members == null ? void 0 : members.filter((m) => getRelationshipKind(m.relationship) === "spouse")) ?? [];
  const children = (members == null ? void 0 : members.filter((m) => getRelationshipKind(m.relationship) === "child")) ?? [];
  const others = (members == null ? void 0 : members.filter(
    (m) => !["parent", "sibling", "spouse", "child"].includes(
      getRelationshipKind(m.relationship)
    )
  )) ?? [];
  const isMarried = spouses.length > 0;
  const selfMember = {
    id: BigInt(0),
    name: (userProfile == null ? void 0 : userProfile.name) || "You",
    relationship: { __kind__: "other", other: "self" },
    bloodType: (userProfile == null ? void 0 : userProfile.bloodType) || "Unknown",
    occupation: (userProfile == null ? void 0 : userProfile.occupation) || "",
    medicalConditions: [],
    isPublic: !((userProfile == null ? void 0 : userProfile.isPrivate) ?? true)
  };
  const handleAddSubmit = async (e) => {
    var _a, _b, _c;
    e.preventDefault();
    if (!form.name.trim()) {
      ue.error("Please enter a name");
      return;
    }
    let relationship;
    switch (form.relationship) {
      case "parent":
        relationship = { __kind__: "parent", parent: null };
        break;
      case "child":
        relationship = { __kind__: "child", child: null };
        break;
      case "sibling":
        relationship = { __kind__: "sibling", sibling: null };
        break;
      case "spouse":
        relationship = { __kind__: "spouse", spouse: null };
        break;
      default:
        relationship = {
          __kind__: "other",
          other: form.otherRelationship || "Other"
        };
        break;
    }
    const medConditions = form.medicalConditions ? form.medicalConditions.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const nextId = BigInt(Date.now());
    try {
      await addMember.mutateAsync({
        id: nextId,
        name: form.name.trim(),
        relationship,
        bloodType: form.bloodType,
        occupation: form.occupation.trim(),
        medicalConditions: medConditions,
        isPublic: form.isPublic
      });
      ue.success(`${form.name} added to your family tree`);
      if (form.bizMode === "add" && form.bizCategory && ((_a = form.bizName) == null ? void 0 : _a.trim())) {
        saveFamilyTreeBusiness({
          id: `biz-${Date.now()}`,
          name: form.bizName.trim(),
          category: form.bizCategory,
          ownerName: form.name.trim(),
          phone: ((_b = form.bizPhone) == null ? void 0 : _b.trim()) ?? "",
          location: ((_c = form.bizLocation) == null ? void 0 : _c.trim()) ?? ""
        });
      } else if (form.bizMode === "link" && form.bizLinkId) {
      }
      setOpen(false);
      setForm(DEFAULT_MEMBER_FORM);
    } catch {
      ue.error("Failed to add family member");
    }
  };
  const handleEditMember = (member) => {
    setEditMember(member);
    setEditMemberOpen(true);
  };
  const handleSaveEditedMember = async (updated) => {
    setIsSavingMember(true);
    try {
      await addMember.mutateAsync(updated);
      ue.success(`${updated.name} updated`);
      setEditMemberOpen(false);
      setEditMember(null);
    } catch {
      ue.error("Failed to update family member");
    } finally {
      setIsSavingMember(false);
    }
  };
  const handleSaveBusiness = (b) => {
    setBusinesses((prev) => {
      const idx = prev.findIndex((x) => x.id === b.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = b;
        return next;
      }
      return [...prev, b];
    });
    saveFamilyTreeBusiness({
      id: b.id,
      name: b.name,
      category: b.category,
      type: b.type,
      ownerName: (identity == null ? void 0 : identity.getPrincipal().toString()) ?? "anonymous",
      phone: b.phone,
      location: b.location
    });
    ue.success(
      editingBusiness ? `${b.name} updated` : `${b.name} added to your family tree`
    );
    setEditingBusiness(null);
  };
  const handleDeleteBusiness = (id) => {
    setBusinesses((prev) => prev.filter((b) => b.id !== id));
    ue.success("Business removed");
  };
  const handleEditSelf = () => {
    setEditProfileOpen(true);
  };
  const handleOpenExtProfile = (member) => {
    setExtProfileMember(member);
    setExtProfileOpen(true);
  };
  const handleOpenSelfExtProfile = () => {
    setExtProfileMember(selfMember);
    setExtProfileOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FamilyCircleBanner,
        {
          circle,
          members: members ?? [],
          isAdmin: !!isAdmin,
          onManage: () => setCircleManagerOpen(true),
          onCircleUpdate: (updates) => {
            if (circle) {
              const updated = { ...circle, ...updates };
              setCircle(updated);
              try {
                localStorage.setItem(
                  `familysocial_circle_${principalId}`,
                  JSON.stringify(updated)
                );
              } catch {
              }
            }
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FamilyCircleManagerSheet,
        {
          open: circleManagerOpen,
          onClose: () => setCircleManagerOpen(false),
          circle,
          members: members ?? [],
          principalId,
          onCircleChange: setCircle
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ExtendedProfileSheet,
        {
          open: extProfileOpen,
          onClose: () => {
            setExtProfileOpen(false);
            setExtProfileMember(null);
          },
          member: extProfileMember,
          isOwner: (extProfileMember == null ? void 0 : extProfileMember.id) === BigInt(0) || (extProfileMember == null ? void 0 : extProfileMember.id.toString()) === principalId,
          isAdmin: !!isAdmin,
          principalId
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Family Tree" }),
            isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-amber-500/15 text-amber-600 border-amber-500/30 hover:bg-amber-500/20 font-label text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 11 }),
              "Admin"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: (members == null ? void 0 : members.length) ? `${members.length} family member${members.length === 1 ? "" : "s"} connected` : "Start building your family tree" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyTreePrivacyBadge, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FamilyTreeShareButton, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "gap-2 font-label", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
              "Add Member"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-display", children: "Add Family Member" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddSubmit, className: "space-y-4 mt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                    "Name ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Full name",
                      value: form.name,
                      onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Relationship" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.relationship,
                        onValueChange: (v) => setForm((p) => ({ ...p, relationship: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "parent", children: "Parent" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "child", children: "Child" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "sibling", children: "Sibling" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "spouse", children: "Spouse" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                          ] })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Blood Type" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Select,
                      {
                        value: form.bloodType,
                        onValueChange: (v) => setForm((p) => ({ ...p, bloodType: v })),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, {}) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: BLOOD_TYPES.map((bt) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: bt, children: bt }, bt)) })
                        ]
                      }
                    )
                  ] })
                ] }),
                form.relationship === "other" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Specify Relationship" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Uncle, Aunt, Cousin",
                      value: form.otherRelationship,
                      onChange: (e) => setForm((p) => ({
                        ...p,
                        otherRelationship: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Occupation" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "e.g. Teacher, Engineer, Student",
                      value: form.occupation,
                      onChange: (e) => setForm((p) => ({ ...p, occupation: e.target.value }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Medical Conditions" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Comma-separated, e.g. Diabetes, Hypertension",
                      value: form.medicalConditions,
                      onChange: (e) => setForm((p) => ({
                        ...p,
                        medicalConditions: e.target.value
                      }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-secondary/60 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Make Public" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Show this member to community members" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      checked: form.isPublic,
                      onCheckedChange: (v) => setForm((p) => ({ ...p, isPublic: v }))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-xl border border-border bg-secondary/20 p-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Business & Services" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: form.bizCategory ?? "",
                      onValueChange: (v) => setForm((p) => ({
                        ...p,
                        bizCategory: v,
                        bizMode: p.bizMode ?? "none"
                      })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectTrigger,
                          {
                            className: "h-8 text-xs",
                            "data-ocid": "family.member.biz.select",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select category (optional)" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "retail", children: "Retail" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "food", children: "Food & Beverage" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "healthcare", children: "Healthcare" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "education", children: "Education" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "realestate", children: "Real Estate" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "travel", children: "Travel" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "technology", children: "Technology" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "finance", children: "Finance" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "manufacturing", children: "Manufacturing" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
                        ] })
                      ]
                    }
                  ),
                  form.bizCategory && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["none", "add", "link"].map((mode) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: `flex-1 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${(form.bizMode ?? "none") === mode ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-secondary"}`,
                      onClick: () => setForm((p) => ({ ...p, bizMode: mode })),
                      "data-ocid": `family.member.biz.${mode}.toggle`,
                      children: mode === "none" ? "Skip" : mode === "add" ? "Add New" : "Link Existing"
                    },
                    mode
                  )) }),
                  form.bizMode === "add" && form.bizCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        className: "w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary",
                        placeholder: "Business name",
                        value: form.bizName ?? "",
                        onChange: (e) => setForm((p) => ({ ...p, bizName: e.target.value })),
                        "data-ocid": "family.member.biz.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        className: "w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary",
                        placeholder: "Location",
                        value: form.bizLocation ?? "",
                        onChange: (e) => setForm((p) => ({
                          ...p,
                          bizLocation: e.target.value
                        }))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        className: "w-full h-8 rounded-lg border border-border bg-background px-3 text-xs outline-none focus:ring-1 focus:ring-primary",
                        placeholder: "Phone number",
                        value: form.bizPhone ?? "",
                        onChange: (e) => setForm((p) => ({ ...p, bizPhone: e.target.value }))
                      }
                    )
                  ] }),
                  form.bizMode === "link" && form.bizCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Select,
                    {
                      value: form.bizLinkId ?? "",
                      onValueChange: (v) => setForm((p) => ({ ...p, bizLinkId: v })),
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          SelectTrigger,
                          {
                            className: "h-8 text-xs",
                            "data-ocid": "family.member.biz.link.select",
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select existing business" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                          getFamilyTreeBusinesses().map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b.id, children: b.name }, b.id)),
                          getFamilyTreeBusinesses().length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "_none", disabled: true, children: "No businesses found — add one first" })
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    className: "w-full",
                    disabled: addMember.isPending,
                    children: addMember.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                      " ",
                      "Adding..."
                    ] }) : "Add to Family Tree"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditMemberDialog,
        {
          member: editMember,
          open: editMemberOpen,
          onClose: () => {
            setEditMemberOpen(false);
            setEditMember(null);
          },
          onSave: handleSaveEditedMember,
          isSaving: isSavingMember
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        EditProfileDialog,
        {
          userProfile,
          open: editProfileOpen,
          onClose: () => setEditProfileOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        BusinessDialog,
        {
          business: editingBusiness,
          open: businessDialogOpen,
          onClose: () => {
            setBusinessDialogOpen(false);
            setEditingBusiness(null);
          },
          onSave: handleSaveBusiness
        }
      ),
      isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4", children: [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-44 rounded-xl" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-36 w-48 rounded-xl" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-44 rounded-xl" }, i)) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0", children: [
        parents.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center animate-fade-up animate-fade-up-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Parents" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GroupedMembers,
            {
              members: parents,
              relType: "parent",
              isAdmin: !!isAdmin,
              onEdit: handleEditMember,
              onCardClick: handleOpenExtProfile
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-border" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up animate-fade-up-2", children: [
          (siblings.length > 0 || spouses.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3 text-center", children: "Family Circle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center items-start gap-4", children: [
            siblings.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              MemberCard,
              {
                member: m,
                isAdmin: !!isAdmin,
                onEdit: handleEditMember,
                onClick: handleOpenExtProfile
              },
              m.id.toString()
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                (siblings.length > 0 || spouses.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] font-label font-bold tracking-wider",
                    style: { color: "oklch(var(--primary))" },
                    children: "★"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group/self", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    MemberCard,
                    {
                      member: selfMember,
                      isCenter: true,
                      isOwn: true,
                      lifestyleActive: {
                        matrimony: matrimonyEnabled,
                        dating: datingEnabled
                      },
                      onClick: handleOpenSelfExtProfile
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleEditSelf();
                      },
                      className: "absolute top-2 right-2 z-10 opacity-0 group-hover/self:opacity-100 transition-opacity\n                          w-6 h-6 rounded-md bg-background/90 border border-border shadow-sm\n                          flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary",
                      "aria-label": "Edit your profile",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { size: 11 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "rounded-xl border border-border bg-card/80 p-4 w-full",
                  style: { minWidth: "200px", maxWidth: "240px" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Lifestyle Settings" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `flex items-center justify-between gap-3 ${isMarried ? "opacity-50" : ""}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Heart,
                                  {
                                    size: 14,
                                    className: matrimonyEnabled && !isMarried ? "text-pink-500" : "text-muted-foreground"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-medium text-foreground", children: "Matrimony Profile" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Find life partner" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Switch,
                                {
                                  checked: matrimonyEnabled && !isMarried,
                                  onCheckedChange: (v) => {
                                    if (!isMarried) {
                                      setMatrimonyEnabled(v);
                                      if (v) {
                                        ue.success(
                                          "You are now visible on the Matrimony map. Visit Geomap to see your pin."
                                        );
                                      }
                                    }
                                  },
                                  disabled: isMarried,
                                  className: "data-[state=checked]:bg-pink-500"
                                }
                              )
                            ]
                          }
                        ) }),
                        isMarried && /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: "Not available for married members" })
                      ] }),
                      matrimonyEnabled && !isMarried && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => onNavigate == null ? void 0 : onNavigate("matrimony"),
                          className: "flex items-center gap-1 text-[11px] font-label font-medium mt-1 ml-6 transition-colors hover:opacity-80",
                          style: { color: "oklch(0.65 0.18 350)" },
                          children: [
                            "Set up profile ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 10 })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-border/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tooltip, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `flex items-center justify-between gap-3 ${isMarried ? "opacity-50" : ""}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  Users,
                                  {
                                    size: 14,
                                    className: datingEnabled && !isMarried ? "text-purple-500" : "text-muted-foreground"
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-medium text-foreground", children: "Dating Profile" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Meet new people" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Switch,
                                {
                                  checked: datingEnabled && !isMarried,
                                  onCheckedChange: (v) => {
                                    if (!isMarried) {
                                      setDatingEnabled(v);
                                      if (v) {
                                        ue.success(
                                          "You are now visible on the Dating map. Visit Geomap to see your pin."
                                        );
                                      }
                                    }
                                  },
                                  disabled: isMarried,
                                  className: "data-[state=checked]:bg-purple-500"
                                }
                              )
                            ]
                          }
                        ) }),
                        isMarried && /* @__PURE__ */ jsxRuntimeExports.jsx(TooltipContent, { children: "Not available for married members" })
                      ] }),
                      datingEnabled && !isMarried && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => onNavigate == null ? void 0 : onNavigate("dating"),
                          className: "flex items-center gap-1 text-[11px] font-label font-medium mt-1 ml-6 transition-colors hover:opacity-80",
                          style: { color: "oklch(0.55 0.22 280)" },
                          children: [
                            "Set up profile ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 10 })
                          ]
                        }
                      )
                    ] })
                  ]
                }
              )
            ] }),
            spouses.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              MemberCard,
              {
                member: m,
                isAdmin: !!isAdmin,
                onEdit: handleEditMember,
                onClick: handleOpenExtProfile
              },
              m.id.toString()
            ))
          ] })
        ] }),
        children.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center animate-fade-up animate-fade-up-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Children" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GroupedMembers,
            {
              members: children,
              relType: "child",
              isAdmin: !!isAdmin,
              onEdit: handleEditMember,
              onCardClick: handleOpenExtProfile
            }
          )
        ] }),
        others.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 animate-fade-up animate-fade-up-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider", children: "Extended Family" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            GroupedMembers,
            {
              members: others,
              relType: "other",
              isAdmin: !!isAdmin,
              onEdit: handleEditMember,
              onCardClick: handleOpenExtProfile
            }
          )
        ] }),
        (!members || members.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 animate-fade-up animate-fade-up-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreePine, { size: 28, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-2", children: "Your family tree awaits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm mx-auto mb-6", children: "Start by adding your parents, siblings, spouse, or children to build your family's digital legacy." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setOpen(true), className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
            "Add your first family member"
          ] })
        ] })
      ] }),
      members && members.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-4 rounded-xl bg-secondary/50 border border-border animate-fade-up animate-fade-up-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-label font-semibold text-muted-foreground uppercase tracking-wider mb-3", children: "Legend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          Object.entries(RELATIONSHIP_LABELS).map(([key, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-3 h-3 rounded-full",
                style: { background: RELATIONSHIP_COLORS[key] }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground", children: label })
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-label text-muted-foreground", children: "You" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "My Businesses" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Businesses linked to your family tree profile" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "gap-2 font-label",
              onClick: () => {
                setEditingBusiness(null);
                setBusinessDialogOpen(true);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
                "Add Business"
              ]
            }
          )
        ] }),
        businesses.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-dashed border-border bg-secondary/30 p-10 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 22, className: "text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-label font-semibold text-foreground mb-1", children: "No businesses yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Link your businesses to your family tree to showcase your ventures." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "gap-2",
              onClick: () => {
                setEditingBusiness(null);
                setBusinessDialogOpen(true);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
                "Add your first business"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: businesses.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          BusinessCard,
          {
            business: b,
            onEdit: (biz) => {
              setEditingBusiness(biz);
              setBusinessDialogOpen(true);
            },
            onDelete: handleDeleteBusiness
          },
          b.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      EventsTab,
      {
        moduleName: "Family Tree",
        moduleColor: "oklch(0.55 0.22 280)"
      }
    ) })
  ] });
}
export {
  FamilyTreePage as default
};
