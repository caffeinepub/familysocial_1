import { r as reactExports, j as jsxRuntimeExports } from "./index-DpPfuGNX.js";
import { T as ThumbsUp } from "./thumbs-up-D3lxNWVi.js";
import { S as Star } from "./star-CHk-i-YI.js";
import { T as TrendingUp } from "./trending-up-Dc-WKiTb.js";
function getVoteState(id) {
  try {
    const raw = localStorage.getItem(`ic_votes_${id}`);
    if (raw) return JSON.parse(raw);
  } catch {
  }
  return {
    liked: false,
    bested: false,
    voted: false,
    likes: 0,
    bests: 0,
    votes: 0
  };
}
function saveVoteState(id, state) {
  localStorage.setItem(`ic_votes_${id}`, JSON.stringify(state));
}
function LikeVoteBar({
  id,
  className = ""
}) {
  const [state, setState] = reactExports.useState(() => getVoteState(id));
  function toggle(field, countField) {
    setState((prev) => {
      const next = {
        ...prev,
        [field]: !prev[field],
        [countField]: prev[field] ? prev[countField] - 1 : prev[countField] + 1
      };
      saveVoteState(id, next);
      return next;
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `flex items-center gap-1 ${className}`,
      "data-ocid": "likevote.bar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggle("liked", "likes"),
            className: `flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${state.liked ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
            "data-ocid": "likevote.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 11, fill: state.liked ? "currentColor" : "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: state.likes })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggle("bested", "bests"),
            className: `flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${state.bested ? "bg-amber-500/15 text-amber-500" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
            "data-ocid": "likevote.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, fill: state.bested ? "currentColor" : "none" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: state.bests })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => toggle("voted", "votes"),
            className: `flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${state.voted ? "bg-emerald-500/15 text-emerald-600" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
            "data-ocid": "likevote.toggle",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 11 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: state.votes })
            ]
          }
        )
      ]
    }
  );
}
export {
  LikeVoteBar as L
};
