import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { formatTimeAgo } from "@/utils/timeUtils";
import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export interface Review {
  id: string;
  targetId: string;
  targetType: "product" | "service" | "business" | "promotion";
  stars: number;
  comment: string;
  author: string;
  createdAt: string;
}

const REVIEWS_KEY = "ic_reviews";

export function getReviews(): Review[] {
  try {
    return JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]") as Review[];
  } catch {
    return [];
  }
}

export function saveReview(review: Review): void {
  const all = getReviews();
  const idx = all.findIndex((r) => r.id === review.id);
  if (idx >= 0) {
    all[idx] = review;
  } else {
    all.push(review);
  }
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <button
          key={i}
          type="button"
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(i)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={22}
            className={
              (hover || value) >= i
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground"
            }
          />
        </button>
      ))}
    </div>
  );
}

export function ReviewModal({
  targetId,
  targetType,
  targetName,
  currentRating = 0,
  reviewCount = 0,
}: {
  targetId: string;
  targetType: Review["targetType"];
  targetName: string;
  currentRating?: number;
  reviewCount?: number;
}) {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  const existing = getReviews().filter((r) => r.targetId === targetId);

  function handleSubmit() {
    if (stars === 0) {
      toast.error("Please select a star rating");
      return;
    }
    const review: Review = {
      id: `rev_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      targetId,
      targetType,
      stars,
      comment,
      author: "You",
      createdAt: new Date().toISOString(),
    };
    saveReview(review);
    toast.success("Review submitted!");
    setStars(0);
    setComment("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-xs px-2 gap-1"
          data-ocid="review.open_modal_button"
        >
          <Star
            size={10}
            className={currentRating > 0 ? "fill-amber-400 text-amber-400" : ""}
          />
          {currentRating > 0 ? currentRating.toFixed(1) : "Rate"}
          {reviewCount > 0 && (
            <span className="text-muted-foreground">({reviewCount})</span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md" data-ocid="review.dialog">
        <DialogHeader>
          <DialogTitle className="text-base font-display">
            Rate &amp; Review
          </DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">{targetName}</p>
        <div className="space-y-3">
          <StarPicker value={stars} onChange={setStars} />
          <Textarea
            placeholder="Share your experience (optional)…"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            data-ocid="review.textarea"
          />
          <Button
            className="w-full"
            onClick={handleSubmit}
            data-ocid="review.submit_button"
          >
            Submit Review
          </Button>
        </div>

        {existing.length > 0 && (
          <div className="mt-2 space-y-2" data-ocid="review.list">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              {existing.length} Review{existing.length !== 1 ? "s" : ""}
            </p>
            {existing.slice(0, 5).map((r) => (
              <div
                key={r.id}
                className="border border-border rounded-lg p-3 space-y-1"
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        size={11}
                        className={
                          r.stars >= i
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {r.author}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {formatTimeAgo(r.createdAt)}
                  </span>
                </div>
                {r.comment && (
                  <p className="text-xs text-foreground">{r.comment}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
