import { c as createLucideIcon, j as jsxRuntimeExports, aT as Root, r as reactExports, aU as Trigger, ak as useComposedRefs, aV as WarningProvider, aW as Content, an as composeEventHandlers, aX as Title, aY as Description, aZ as Close, a_ as createDialogScope, a$ as Portal, b0 as Overlay, aw as createSlottable, av as createContextScope, ax as cn, b1 as buttonVariants, ay as useActor, az as useInternetIdentity, aG as createActor, aF as useSaveUserProfile, $ as User, a0 as Avatar, b2 as AvatarImage, a1 as AvatarFallback, b3 as Camera, B as Button, L as Label, I as Input, l as Select, m as SelectTrigger, n as SelectValue, o as SelectContent, p as SelectItem, v as Shield, s as Switch, ac as Separator, aJ as Bell, u as ue, E as LoaderCircle, a2 as MessageCircle, t as CircleCheck } from "./index-BVgoOni7.js";
import { P as Progress } from "./progress-Oys46YfA.js";
import { T as Textarea } from "./textarea-CUltifiE.js";
import { D as Database } from "./database-BJ7OXP8_.js";
import { D as Download } from "./download-DWGF8nf_.js";
import { T as Trash2 } from "./trash-2-Ctr775tn.js";
import { U as Upload } from "./upload-DjE0HILF.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
];
const FileUp = createLucideIcon("file-up", __iconNode);
var ROOT_NAME = "AlertDialog";
var [createAlertDialogContext] = createContextScope(ROOT_NAME, [
  createDialogScope
]);
var useDialogScope = createDialogScope();
var AlertDialog$1 = (props) => {
  const { __scopeAlertDialog, ...alertDialogProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ...dialogScope, ...alertDialogProps, modal: true });
};
AlertDialog$1.displayName = ROOT_NAME;
var TRIGGER_NAME = "AlertDialogTrigger";
var AlertDialogTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...triggerProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger, { ...dialogScope, ...triggerProps, ref: forwardedRef });
  }
);
AlertDialogTrigger$1.displayName = TRIGGER_NAME;
var PORTAL_NAME = "AlertDialogPortal";
var AlertDialogPortal$1 = (props) => {
  const { __scopeAlertDialog, ...portalProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, { ...dialogScope, ...portalProps });
};
AlertDialogPortal$1.displayName = PORTAL_NAME;
var OVERLAY_NAME = "AlertDialogOverlay";
var AlertDialogOverlay$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...overlayProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Overlay, { ...dialogScope, ...overlayProps, ref: forwardedRef });
  }
);
AlertDialogOverlay$1.displayName = OVERLAY_NAME;
var CONTENT_NAME = "AlertDialogContent";
var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME);
var Slottable = createSlottable("AlertDialogContent");
var AlertDialogContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, children, ...contentProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const contentRef = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const cancelRef = reactExports.useRef(null);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      WarningProvider,
      {
        contentName: CONTENT_NAME,
        titleName: TITLE_NAME,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogContentProvider, { scope: __scopeAlertDialog, cancelRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Content,
          {
            role: "alertdialog",
            ...dialogScope,
            ...contentProps,
            ref: composedRefs,
            onOpenAutoFocus: composeEventHandlers(contentProps.onOpenAutoFocus, (event) => {
              var _a;
              event.preventDefault();
              (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
            }),
            onPointerDownOutside: (event) => event.preventDefault(),
            onInteractOutside: (event) => event.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Slottable, { children }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DescriptionWarning, { contentRef })
            ]
          }
        ) })
      }
    );
  }
);
AlertDialogContent$1.displayName = CONTENT_NAME;
var TITLE_NAME = "AlertDialogTitle";
var AlertDialogTitle$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...titleProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Title, { ...dialogScope, ...titleProps, ref: forwardedRef });
  }
);
AlertDialogTitle$1.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "AlertDialogDescription";
var AlertDialogDescription$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeAlertDialog, ...descriptionProps } = props;
  const dialogScope = useDialogScope(__scopeAlertDialog);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Description, { ...dialogScope, ...descriptionProps, ref: forwardedRef });
});
AlertDialogDescription$1.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "AlertDialogAction";
var AlertDialogAction$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...actionProps } = props;
    const dialogScope = useDialogScope(__scopeAlertDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...actionProps, ref: forwardedRef });
  }
);
AlertDialogAction$1.displayName = ACTION_NAME;
var CANCEL_NAME = "AlertDialogCancel";
var AlertDialogCancel$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAlertDialog, ...cancelProps } = props;
    const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
    const dialogScope = useDialogScope(__scopeAlertDialog);
    const ref = useComposedRefs(forwardedRef, cancelRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Close, { ...dialogScope, ...cancelProps, ref });
  }
);
AlertDialogCancel$1.displayName = CANCEL_NAME;
var DescriptionWarning = ({ contentRef }) => {
  const MESSAGE = `\`${CONTENT_NAME}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${CONTENT_NAME}\` by passing a \`${DESCRIPTION_NAME}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  reactExports.useEffect(() => {
    var _a;
    const hasDescription = document.getElementById(
      (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
    );
    if (!hasDescription) console.warn(MESSAGE);
  }, [MESSAGE, contentRef]);
  return null;
};
var Root2 = AlertDialog$1;
var Trigger2 = AlertDialogTrigger$1;
var Portal2 = AlertDialogPortal$1;
var Overlay2 = AlertDialogOverlay$1;
var Content2 = AlertDialogContent$1;
var Action = AlertDialogAction$1;
var Cancel = AlertDialogCancel$1;
var Title2 = AlertDialogTitle$1;
var Description2 = AlertDialogDescription$1;
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Root2, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Trigger2, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Overlay2,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content2,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Title2,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Description2,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}
function useBlobStorage() {
  const { actor } = useActor(createActor);
  const { identity } = useInternetIdentity();
  const [uploadProgress, setUploadProgress] = reactExports.useState(0);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const uploadFile = reactExports.useCallback(
    async (file) => {
      if (!actor || !identity) throw new Error("Not authenticated");
      setIsUploading(true);
      setUploadProgress(0);
      try {
        return await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            var _a;
            setUploadProgress(100);
            resolve((_a = e.target) == null ? void 0 : _a.result);
          };
          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsDataURL(file);
        });
      } finally {
        setIsUploading(false);
        setUploadProgress(0);
      }
    },
    [actor, identity]
  );
  return { uploadFile, uploadProgress, isUploading };
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
function WhatsAppImportSection() {
  const [contactsState, setContactsState] = reactExports.useState("idle");
  const [productsState, setProductsState] = reactExports.useState("idle");
  const [contactsCount, setContactsCount] = reactExports.useState(0);
  const [importRows, setImportRows] = reactExports.useState([]);
  const simulateImport = (setter, onDone) => {
    setter("scanning");
    setTimeout(() => {
      setter("processing");
      setTimeout(() => {
        setter("done");
        onDone();
      }, 1800);
    }, 1200);
  };
  const handleContactsFile = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (!file.name.endsWith(".csv")) {
      ue.error("Only CSV files are accepted");
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      ue.error("File exceeds 50MB limit");
      return;
    }
    simulateImport(setContactsState, () => {
      const count = Math.floor(Math.random() * 80) + 20;
      setContactsCount(count);
      ue.success(`${count} WhatsApp contacts created`);
    });
  };
  const handleProductsFile = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (!file.name.endsWith(".csv")) {
      ue.error("Only CSV files are accepted");
      return;
    }
    simulateImport(setProductsState, () => {
      const rows = Array.from({ length: 5 }, (_, i) => ({
        row: i + 1,
        name: [
          "Organic Honey",
          "Silk Saree",
          "Basmati Rice",
          "Brass Lamp",
          "Cotton Kurta"
        ][i],
        status: i === 2 ? "Pending Moderation" : i === 4 ? "Error - Missing Image" : "Created"
      }));
      setImportRows(rows);
      ue.success("Products imported — 5 rows processed");
    });
  };
  const stateLabel = {
    idle: "",
    scanning: "Scanning for viruses...",
    processing: "Processing data...",
    done: "Complete",
    error: "Failed"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-xs text-muted-foreground p-3 rounded-lg",
        style: {
          background: "oklch(0.72 0.19 85 / 0.1)",
          color: "oklch(0.62 0.15 85)"
        },
        children: "⚠️ Only CSV, JPG, PNG files accepted. Files are scanned and deleted immediately after processing."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 14, style: { color: "oklch(0.52 0.14 155)" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Import WhatsApp Contacts (CSV)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors hover:bg-muted/20",
          style: { borderColor: "oklch(0.52 0.14 155 / 0.4)" },
          "data-ocid": "settings.contacts.dropzone",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "text-muted-foreground mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Drop CSV file or click to upload" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Max 50MB · CSV only" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: ".csv",
                className: "hidden",
                onChange: handleContactsFile,
                "data-ocid": "settings.contacts.upload_button"
              }
            )
          ]
        }
      ),
      contactsState !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 text-sm",
          "data-ocid": "settings.contacts.loading_state",
          children: [
            contactsState === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheck,
              {
                size: 16,
                style: { color: "oklch(0.52 0.14 155)" }
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                size: 16,
                className: "animate-spin text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: contactsState === "done" ? "text-foreground font-semibold" : "text-muted-foreground",
                children: contactsState === "done" ? `✓ ${contactsCount} users created successfully` : stateLabel[contactsState]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 14, className: "text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Import Product Data (CSV + Images)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: "flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer transition-colors hover:bg-muted/20",
          style: { borderColor: "oklch(0.65 0.25 335 / 0.4)" },
          "data-ocid": "settings.products.dropzone",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "text-muted-foreground mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Drop product CSV here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "CSV with image_url column · Max 50MB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "file",
                accept: ".csv",
                className: "hidden",
                onChange: handleProductsFile,
                "data-ocid": "settings.products.upload_button"
              }
            )
          ]
        }
      ),
      productsState !== "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 text-sm",
          "data-ocid": "settings.products.loading_state",
          children: [
            productsState === "done" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              CircleCheck,
              {
                size: 16,
                style: { color: "oklch(0.52 0.14 155)" }
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                size: 16,
                className: "animate-spin text-muted-foreground"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: productsState === "done" ? "text-foreground font-semibold" : "text-muted-foreground",
                children: productsState === "done" ? "✓ Import complete" : stateLabel[productsState]
              }
            )
          ]
        }
      ),
      importRows.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "overflow-x-auto rounded-xl border border-border",
          "data-ocid": "settings.products.table",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-label text-muted-foreground", children: "Row" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-label text-muted-foreground", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-3 py-2 text-left font-label text-muted-foreground", children: "Status" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: importRows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-t border-border",
                "data-ocid": `settings.import.row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-3 py-2 text-muted-foreground", children: [
                    "#",
                    row.row
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2 font-semibold", children: row.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-label px-2 py-0.5 rounded-full",
                      style: {
                        background: row.status === "Created" ? "oklch(0.52 0.14 155 / 0.15)" : row.status.includes("Error") ? "oklch(0.58 0.22 25 / 0.15)" : "oklch(0.72 0.19 85 / 0.15)",
                        color: row.status === "Created" ? "oklch(0.52 0.14 155)" : row.status.includes("Error") ? "oklch(0.58 0.22 25)" : "oklch(0.72 0.19 85)"
                      },
                      children: row.status
                    }
                  ) })
                ]
              },
              row.row
            )) })
          ] })
        }
      )
    ] })
  ] });
}
function SettingsPage({ userProfile }) {
  const save = useSaveUserProfile();
  const { uploadFile, isUploading, uploadProgress } = useBlobStorage();
  const fileInputRef = reactExports.useRef(null);
  const [form, setForm] = reactExports.useState({
    name: (userProfile == null ? void 0 : userProfile.name) || "",
    dateOfBirth: (userProfile == null ? void 0 : userProfile.dateOfBirth) || "",
    bloodType: (userProfile == null ? void 0 : userProfile.bloodType) || "Unknown",
    occupation: (userProfile == null ? void 0 : userProfile.occupation) || "",
    bio: (userProfile == null ? void 0 : userProfile.bio) || "",
    photoUrl: (userProfile == null ? void 0 : userProfile.photoUrl) || "",
    isPrivate: (userProfile == null ? void 0 : userProfile.isPrivate) ?? true
  });
  reactExports.useEffect(() => {
    if (userProfile) {
      setForm({
        name: userProfile.name || "",
        dateOfBirth: userProfile.dateOfBirth || "",
        bloodType: userProfile.bloodType || "Unknown",
        occupation: userProfile.occupation || "",
        bio: userProfile.bio || "",
        photoUrl: userProfile.photoUrl || "",
        isPrivate: userProfile.isPrivate ?? true
      });
    }
  }, [userProfile]);
  const initials = form.name ? form.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() : "U";
  const handlePhotoUpload = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      ue.error("Photo must be under 5MB");
      return;
    }
    try {
      const url = await uploadFile(file);
      setForm((p) => ({ ...p, photoUrl: url }));
      ue.success("Photo uploaded!");
    } catch {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((p) => ({ ...p, photoUrl: reader.result }));
      };
      reader.readAsDataURL(file);
      ue.info("Photo set locally");
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      ue.error("Name is required");
      return;
    }
    try {
      await save.mutateAsync(form);
      ue.success("Profile saved successfully!");
    } catch {
      ue.error("Failed to save profile");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 lg:p-8 max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 animate-fade-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground", children: "Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Manage your profile and preferences" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSave, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Profile Photo" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-20 w-20", children: [
              form.photoUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: form.photoUrl, alt: form.name }) : null,
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AvatarFallback,
                {
                  className: "text-xl font-label font-bold",
                  style: {
                    background: "oklch(var(--primary) / 0.15)",
                    color: "oklch(var(--primary))"
                  },
                  children: initials
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                disabled: isUploading,
                className: "absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow hover:bg-primary/90 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { size: 13 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: form.name || "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: isUploading ? `Uploading... ${uploadProgress}%` : "Click camera icon to upload photo" }),
            isUploading && /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: uploadProgress, className: "h-1" }),
            !isUploading && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                size: "sm",
                className: "text-xs font-label",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                children: "Upload Photo"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            type: "file",
            accept: "image/*",
            className: "hidden",
            onChange: handlePhotoUpload
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Personal Information" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
              "Full Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.name,
                onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                placeholder: "Your full name",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Occupation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.occupation,
                onChange: (e) => setForm((p) => ({ ...p, occupation: e.target.value })),
                placeholder: "e.g. Software Engineer, Teacher, Business Owner"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Bio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: form.bio,
                onChange: (e) => setForm((p) => ({ ...p, bio: e.target.value })),
                placeholder: "A brief description about yourself...",
                rows: 4,
                className: "resize-none"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Privacy & Visibility" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Private Profile" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: "When enabled, only family members you explicitly connect with can see your profile details." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Switch,
              {
                checked: form.isPrivate,
                onCheckedChange: (v) => setForm((p) => ({ ...p, isPrivate: v }))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Share Medical Info" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: "Allow family members to see your blood type and medical conditions." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: false })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up animate-fade-up-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Notification Preferences" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
          {
            label: "Family Tree Updates",
            desc: "When someone adds you to their family tree",
            on: true
          },
          {
            label: "Community Announcements",
            desc: "Important updates from your communities",
            on: true
          },
          {
            label: "New Job Matches",
            desc: "Jobs matching your profile and location",
            on: false
          },
          {
            label: "Order & Booking Alerts",
            desc: "Updates on your purchases and bookings",
            on: true
          }
        ].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          i > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: n.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: n.desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: n.on })
          ] })
        ] }, n.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Privacy & Data" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "Export My Data" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: "Download a complete copy of your FamilySocial data including profile, family tree, posts, and activity history." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "text-xs font-label shrink-0 gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
                    "Request Export"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-label", children: "Export Your Data" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogDescription, { children: "This will generate a JSON file containing all your FamilySocial data: profile, family tree, posts, healthcare records, and activity history. The file will download immediately." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "font-label text-xs", children: "Cancel" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      className: "font-label text-xs",
                      onClick: () => {
                        const mockData = {
                          exportDate: (/* @__PURE__ */ new Date()).toISOString(),
                          profile: {
                            name: form.name,
                            occupation: form.occupation,
                            bloodType: form.bloodType,
                            dateOfBirth: form.dateOfBirth,
                            bio: form.bio
                          },
                          familyTree: { members: 8, businesses: 2 },
                          posts: { total: 47, public: 12, private: 35 },
                          healthcare: { conditions: 2, appointments: 5 },
                          timeline: { entries: 22 },
                          note: "This is a mock data export from FamilySocial"
                        };
                        const blob = new Blob(
                          [JSON.stringify(mockData, null, 2)],
                          { type: "application/json" }
                        );
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `familysocial-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                        ue.success("Data export downloaded!");
                      },
                      children: "Download Export"
                    }
                  )
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-destructive", children: "Delete Account" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground max-w-xs", children: "Request permanent account deletion. Your data will be archived for 30 days before deletion." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialog, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "text-xs font-label shrink-0 gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 13 }),
                    "Request Deletion"
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { className: "font-label text-destructive", children: "Delete Account?" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This action cannot be undone." }),
                    " Your account will be archived for 30 days, after which all your data will be permanently deleted. You will lose access to your family tree, posts, healthcare records, and all other data."
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { className: "font-label text-xs", children: "Keep My Account" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AlertDialogAction,
                    {
                      className: "font-label text-xs bg-destructive hover:bg-destructive/90",
                      onClick: () => {
                        ue.success(
                          "Deletion requested. Your account will be archived in 30 days.",
                          { duration: 6e3 }
                        );
                      },
                      children: "Yes, Delete My Account"
                    }
                  )
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end animate-fade-up animate-fade-up-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "submit",
          className: "px-8 font-label",
          disabled: save.isPending,
          children: save.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            " Saving..."
          ] }) : "Save Changes"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-4 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-display font-semibold text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500", children: "📱" }),
          " WhatsApp Integration"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "wa-phone", className: "text-xs", children: "WhatsApp Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "wa-phone",
                className: "mt-1",
                placeholder: "+91 98765 43210",
                "data-ocid": "settings.whatsapp.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                className: "h-9 font-label",
                onClick: () => {
                  alert("OTP sent to your WhatsApp number (simulated)");
                },
                "data-ocid": "settings.whatsapp.primary_button",
                children: "Send OTP"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Enter OTP",
                className: "flex-1 h-9",
                "data-ocid": "settings.whatsapp.input"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                className: "h-9 font-label",
                onClick: () => alert("WhatsApp verified!"),
                "data-ocid": "settings.whatsapp.secondary_button",
                children: "Verify"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Subscribe to WhatsApp Updates" }),
          [
            "Daily digest of nearby deals",
            "Order & booking updates",
            "Community notices",
            "Job alerts"
          ].map((sub) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              className: "flex items-center gap-2 cursor-pointer",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "checkbox",
                    defaultChecked: true,
                    className: "rounded",
                    "data-ocid": "settings.whatsapp.checkbox"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: sub })
              ]
            },
            sub
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 shadow-card animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileUp, { size: 16, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-label font-semibold text-foreground", children: "Data Import & Contacts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppImportSection, {})
      ] })
    ] })
  ] });
}
export {
  SettingsPage as default
};
