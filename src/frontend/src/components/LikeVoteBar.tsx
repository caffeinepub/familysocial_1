import { Star, ThumbsUp, TrendingUp } from "lucide-react";
import { useState } from "react";

function getVoteState(id: string): {
  liked: boolean;
  bested: boolean;
  voted: boolean;
  likes: number;
  bests: number;
  votes: number;
} {
  try {
    const raw = localStorage.getItem(`ic_votes_${id}`);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return {
    liked: false,
    bested: false,
    voted: false,
    likes: 0,
    bests: 0,
    votes: 0,
  };
}

function saveVoteState(
  id: string,
  state: ReturnType<typeof getVoteState>,
): void {
  localStorage.setItem(`ic_votes_${id}`, JSON.stringify(state));
}

export function LikeVoteBar({
  id,
  className = "",
}: { id: string; className?: string }) {
  const [state, setState] = useState(() => getVoteState(id));

  function toggle(
    field: "liked" | "bested" | "voted",
    countField: "likes" | "bests" | "votes",
  ) {
    setState((prev) => {
      const next = {
        ...prev,
        [field]: !prev[field],
        [countField]: prev[field] ? prev[countField] - 1 : prev[countField] + 1,
      };
      saveVoteState(id, next);
      return next;
    });
  }

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      data-ocid="likevote.bar"
    >
      <button
        type="button"
        onClick={() => toggle("liked", "likes")}
        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
          state.liked
            ? "bg-primary/15 text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
        }`}
        data-ocid="likevote.toggle"
      >
        <ThumbsUp size={11} fill={state.liked ? "currentColor" : "none"} />
        <span>{state.likes}</span>
      </button>
      <button
        type="button"
        onClick={() => toggle("bested", "bests")}
        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
          state.bested
            ? "bg-amber-500/15 text-amber-500"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
        }`}
        data-ocid="likevote.toggle"
      >
        <Star size={11} fill={state.bested ? "currentColor" : "none"} />
        <span>{state.bests}</span>
      </button>
      <button
        type="button"
        onClick={() => toggle("voted", "votes")}
        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold transition-all ${
          state.voted
            ? "bg-emerald-500/15 text-emerald-600"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
        }`}
        data-ocid="likevote.toggle"
      >
        <TrendingUp size={11} />
        <span>{state.votes}</span>
      </button>
    </div>
  );
}
