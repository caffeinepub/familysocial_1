import { ay as useInternetIdentity, r as reactExports, j as jsxRuntimeExports, aD as TreePine, U as Users, N as Heart, B as Button, E as LoaderCircle, u as ue } from "./index-CTlHP6rz.js";
import { G as Globe } from "./globe-BIcECz2X.js";
function getStoredUsers() {
  try {
    const raw = localStorage.getItem("indyacentral-users");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function saveStoredUsers(users) {
  localStorage.setItem("indyacentral-users", JSON.stringify(users));
}
function LoginPage({ onEmailLogin }) {
  const { login, isLoggingIn } = useInternetIdentity();
  const [mode, setMode] = reactExports.useState("signin");
  const [signInEmail, setSignInEmail] = reactExports.useState("");
  const [signInPassword, setSignInPassword] = reactExports.useState("");
  const [signInError, setSignInError] = reactExports.useState("");
  const [signUpName, setSignUpName] = reactExports.useState("");
  const [signUpEmail, setSignUpEmail] = reactExports.useState("");
  const [signUpPassword, setSignUpPassword] = reactExports.useState("");
  const [signUpConfirm, setSignUpConfirm] = reactExports.useState("");
  const [signUpError, setSignUpError] = reactExports.useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    setSignInError("");
    if (!signInEmail || !signInPassword) {
      setSignInError("Please enter your email and password.");
      return;
    }
    const users = getStoredUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === signInEmail.toLowerCase() && u.passwordHash === btoa(signInPassword)
    );
    if (!found) {
      setSignInError("Incorrect email or password.");
      return;
    }
    ue.success(`Welcome back, ${found.name}!`);
    onEmailLogin({ name: found.name, email: found.email });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    setSignUpError("");
    if (!signUpName || !signUpEmail || !signUpPassword || !signUpConfirm) {
      setSignUpError("All fields are required.");
      return;
    }
    if (signUpPassword !== signUpConfirm) {
      setSignUpError("Passwords do not match.");
      return;
    }
    if (signUpPassword.length < 6) {
      setSignUpError("Password must be at least 6 characters.");
      return;
    }
    const users = getStoredUsers();
    if (users.some((u) => u.email.toLowerCase() === signUpEmail.toLowerCase())) {
      setSignUpError("An account with this email already exists.");
      return;
    }
    const newUser = {
      name: signUpName,
      email: signUpEmail,
      passwordHash: btoa(signUpPassword)
    };
    saveStoredUsers([...users, newUser]);
    ue.success(`Account created! Welcome, ${signUpName}!`);
    onEmailLogin({ name: signUpName, email: signUpEmail });
  };
  const features = [
    {
      icon: TreePine,
      label: "Family Tree",
      desc: "Map your ancestry with rich profiles"
    },
    {
      icon: Users,
      label: "Community",
      desc: "Connect with your local neighborhood"
    },
    {
      icon: Heart,
      label: "Social Feed",
      desc: "Share life moments with family"
    },
    {
      icon: Globe,
      label: "Marketplace",
      desc: "Products, services & opportunities"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "hidden lg:flex lg:w-[52%] relative flex-col justify-between p-12 overflow-hidden",
        style: {
          background: "oklch(0.22 0.055 155)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage: `radial-gradient(circle at 20% 20%, oklch(0.78 0.13 65) 0%, transparent 60%), 
                              radial-gradient(circle at 80% 80%, oklch(0.52 0.14 155) 0%, transparent 60%)`
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "svg",
            {
              className: "absolute bottom-0 right-0 opacity-10",
              width: "400",
              height: "400",
              viewBox: "0 0 400 400",
              fill: "none",
              "aria-hidden": "true",
              role: "presentation",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Decorative family tree" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "200",
                    cy: "80",
                    r: "40",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "200",
                    y1: "120",
                    x2: "100",
                    y2: "200",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "200",
                    y1: "120",
                    x2: "300",
                    y2: "200",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "100",
                    cy: "230",
                    r: "30",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "300",
                    cy: "230",
                    r: "30",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "2"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "100",
                    y1: "260",
                    x2: "50",
                    y2: "330",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "100",
                    y1: "260",
                    x2: "150",
                    y2: "330",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "300",
                    y1: "260",
                    x2: "250",
                    y2: "330",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "line",
                  {
                    x1: "300",
                    y1: "260",
                    x2: "350",
                    y2: "330",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "50",
                    cy: "355",
                    r: "22",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "150",
                    cy: "355",
                    r: "22",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "250",
                    cy: "355",
                    r: "22",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "circle",
                  {
                    cx: "350",
                    cy: "355",
                    r: "22",
                    stroke: "oklch(0.78 0.13 65)",
                    strokeWidth: "1.5"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-xl flex items-center justify-center",
                  style: { background: "oklch(0.78 0.13 65)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreePine, { size: 20, style: { color: "oklch(0.12 0.025 40)" } })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-2xl font-display font-semibold",
                  style: { color: "oklch(0.95 0.012 85)" },
                  children: "IndyaCentral"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-label",
                style: { color: "oklch(0.72 0.03 155)" },
                children: "Your family's digital home"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "text-5xl font-display font-bold leading-tight",
                  style: { color: "oklch(0.97 0.005 85)" },
                  children: [
                    "Every family",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.78 0.13 65)" }, children: "has a story." })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "mt-4 text-lg leading-relaxed",
                  style: { color: "oklch(0.75 0.02 155)" },
                  children: "Connect generations, preserve heritage, and build your community — all in one place."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: features.map(({ icon: Icon, label, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-xl p-4",
                style: { background: "oklch(0.28 0.065 155)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, style: { color: "oklch(0.78 0.13 65)" } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm font-label font-semibold",
                        style: { color: "oklch(0.92 0.015 85)" },
                        children: label
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: { color: "oklch(0.65 0.02 155)" },
                      children: desc
                    }
                  )
                ]
              },
              label
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "relative z-10 text-xs",
              style: { color: "oklch(0.5 0.02 155)" },
              children: "Built on Internet Computer Protocol • Decentralized & Private"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col items-center justify-center p-8 lg:p-16 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-10 h-10 rounded-xl flex items-center justify-center",
            style: { background: "oklch(0.32 0.085 155)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TreePine, { size: 20, className: "text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-semibold", children: "IndyaCentral" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-label text-muted-foreground font-medium", children: "Welcome to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-display font-bold text-foreground leading-none", children: "IndyaCentral" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground pt-1", children: "Sign in to access your family's digital ecosystem" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            "data-ocid": "login.primary_button",
            onClick: login,
            disabled: isLoggingIn,
            className: "w-full h-12 text-base font-label font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all",
            children: isLoggingIn ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Connecting..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "mr-2 h-5 w-5",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Internet Identity" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
                  ]
                }
              ),
              "Sign in with Internet Identity"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-border" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-2 text-muted-foreground font-label tracking-wider", children: "or continue with email" }) })
        ] }),
        mode === "signin" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSignIn,
            className: "space-y-3",
            "data-ocid": "login.modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signin-email",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Email"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signin-email",
                    "data-ocid": "login.input",
                    type: "email",
                    autoComplete: "email",
                    value: signInEmail,
                    onChange: (e) => setSignInEmail(e.target.value),
                    placeholder: "you@example.com",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signin-password",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signin-password",
                    "data-ocid": "login.input",
                    type: "password",
                    autoComplete: "current-password",
                    value: signInPassword,
                    onChange: (e) => setSignInPassword(e.target.value),
                    placeholder: "••••••••",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              signInError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "login.error_state",
                  className: "text-xs text-destructive font-label",
                  children: signInError
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  "data-ocid": "login.submit_button",
                  className: "w-full h-10 font-label font-semibold",
                  children: "Sign In"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
                "Don't have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "login.toggle",
                    onClick: () => {
                      setMode("signup");
                      setSignInError("");
                    },
                    className: "text-primary font-semibold hover:underline",
                    children: "Sign up"
                  }
                )
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSignUp,
            className: "space-y-3",
            "data-ocid": "signup.modal",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signup-name",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Full Name"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signup-name",
                    "data-ocid": "signup.input",
                    type: "text",
                    autoComplete: "name",
                    value: signUpName,
                    onChange: (e) => setSignUpName(e.target.value),
                    placeholder: "Your full name",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signup-email",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Email"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signup-email",
                    "data-ocid": "signup.input",
                    type: "email",
                    autoComplete: "email",
                    value: signUpEmail,
                    onChange: (e) => setSignUpEmail(e.target.value),
                    placeholder: "you@example.com",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signup-password",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signup-password",
                    "data-ocid": "signup.input",
                    type: "password",
                    autoComplete: "new-password",
                    value: signUpPassword,
                    onChange: (e) => setSignUpPassword(e.target.value),
                    placeholder: "••••••••",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "label",
                  {
                    htmlFor: "signup-confirm",
                    className: "text-xs font-label font-medium text-foreground mb-1 block",
                    children: "Confirm Password"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    id: "signup-confirm",
                    "data-ocid": "signup.input",
                    type: "password",
                    autoComplete: "new-password",
                    value: signUpConfirm,
                    onChange: (e) => setSignUpConfirm(e.target.value),
                    placeholder: "••••••••",
                    className: "w-full h-10 rounded-lg border border-border bg-secondary/60 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  }
                )
              ] }),
              signUpError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-ocid": "signup.error_state",
                  className: "text-xs text-destructive font-label",
                  children: signUpError
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  "data-ocid": "signup.submit_button",
                  className: "w-full h-10 font-label font-semibold",
                  children: "Create Account"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
                "Already have an account?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "signup.toggle",
                    onClick: () => {
                      setMode("signin");
                      setSignUpError("");
                    },
                    className: "text-primary font-semibold hover:underline",
                    children: "Sign in"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4 bg-secondary/80 border border-border space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-label font-semibold text-foreground", children: "What is Internet Identity?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "A secure, password-free authentication system built on the Internet Computer. Your data stays private and decentralized." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-center text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " IndyaCentral.",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "underline underline-offset-2 hover:text-foreground transition-colors",
            children: "Built with caffeine.ai"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  LoginPage as default
};
