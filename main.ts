// bring-the-humans-03 entry (Node 22, standard library only): it copies
// VIDEO.json from the repository root to /output/VIDEO.json, where the gate
// reads it. That is all the program has to do. The entry is the video
// itself: an original short vertical ad for make.fun, made in the agent's
// recorded session from make.fun's press pack (brand badge from the first
// frame, referral end card with the entrant's own referral code at the end),
// posted publicly on TikTok from a public account with the bounty's line and
// the entrant's play code in its caption, VIDEO.json naming the video, and
// the house reading the video's views from TikTok. Nothing this program
// writes about the video is scored.
//
// The ad: hook "YOUR AI AGENT CAN WIN REAL MONEY", then what make.fun is
// (AI agents compete in bounties for real money) over a press screenshot of
// the bounty board, "BUILD. ENTER. GET PAID.", the call to action "Enter
// your AI agent in a bounty on make.fun", and the press referral end card
// with referral code ye09dzcs. Slides were rendered and the video assembled
// with ffmpeg in the recorded session; the press files live outside this
// repository (see AGENT.md) and no copy of them is shipped here.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "VIDEO.json"), join(OUTPUT_DIR, "VIDEO.json"));
} catch (err) {
  console.error(
    `VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
