# Sharemaxxing

A skill that rewrites any social media post, thread, caption, or script draft into a format people can't help but share.

## Installation

### Recommended (clone directly into skills directory)

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/fachrynuzuli/sharemaxxing.git ~/.claude/skills/sharemaxxing
```

### Manual install/update (only the skill file)

```bash
mkdir -p ~/.claude/skills/sharemaxxing
cp SKILL.md ~/.claude/skills/sharemaxxing/
```

## Usage

Invoke the skill:

```
/sharemaxxing

[paste your draft here]
```

Or ask directly:

```
Sharemaxx this post: [your draft]
```

```
Make this shareable: [your draft]
```

```
Punch up this draft: [your draft]
```

## How It Works

You give it a draft. It finds the sharpest insight buried in it, rewrites around that insight, and makes sure the result passes the group chat test: "would someone screenshot this and send it to 5 people?"

### The Shareability Engine

Every rewrite must hit at least 1 of these 3 triggers (ideally all 3):

| # | Trigger | What it does | Why people share |
|---|---------|-------------|------------------|
| 1 | **Opinion Flex** | Crystallizes an opinion readers couldn't articulate themselves | "That's exactly what I've been trying to say" |
| 2 | **Proxy Boldness** | Says the thing readers are too afraid to say outright | "Someone finally said it" |
| 3 | **Wit Signal** | Makes the sharer look smart, funny, or culturally plugged-in | The share itself becomes a flex on their taste |

### Rewrite Patterns

| Pattern | What it means |
|---------|--------------|
| Lead with the sharpest thought | The insight is the hook, not the conclusion |
| Compress ruthlessly | Every word earns its spot or gets cut |
| Create quotable lines | At least 1 sentence works as a standalone screenshot |
| End with a turn | Last line reframes or surprises. No summaries, no CTAs |
| Kill the preamble | Delete everything before the point |
| Stakes over structure | Make readers feel something, not admire your outline |

### Voice DNA

Enforced strict writing rules based on [Ole Lehmann (@itsolelehmann)](https://x.com/itsolelehmann/status/2028497454635888982):
- Contractions always, short paragraphs, physical verbs over abstract ones
- No em dashes (ever), numbers as digits, bold used sparingly
- A comprehensive banned phrase list covering dead AI language, dead transitions, engagement bait, AI cringe, generic insider claims
- Fatal rule: "This isn't X. This is Y." (and all variations) kills the output instantly

### Anti-AI Patterns

Condensed from the [humanizer](https://github.com/blader/humanizer) skill by Siqi Chen. Covers significance inflation, AI vocabulary words, negative parallelisms, rule of three overuse, em dash overuse, sycophantic tone, and generic conclusions.

## Full Example

**Draft:**
> I've been reflecting on my career journey and I realized something important. The best career advice I ever received wasn't about skills or networking. It was about showing up consistently, even when you don't feel like it. In today's fast-paced world, consistency is truly a game-changer.

**Sharemaxxed:**
> The best career advice I ever got had nothing to do with skills, networking, or being the smartest person in any room.
>
> Show up. Consistently. Especially on the days you don't feel like it.
>
> Sounds boring because it is. But every person I know who's built something real did it by being the one who kept showing up after everyone else got distracted by the next thing. Talent gets you in the door. Consistency is what keeps you from getting kicked out of it.

**Shareability tags:** Opinion Flex ✓ · Proxy Boldness ✓ · Wit Signal ✓

## Credits and References

This skill is a synthesis of three core frameworks:

1. **Anti-AI Writing Patterns**: Condensed from the [humanizer](https://github.com/blader/humanizer) skill by Siqi Chen, which is based on [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).
2. **Shareability Engine**: Based on the "instantly shareable" framework by [@signulll](https://x.com/signulll/status/1902351203565998406).
3. **Voice DNA**: Based on the "actual voice" writing rules and banned phrases by [Ole Lehmann (@itsolelehmann)](https://x.com/itsolelehmann/status/2028497454635888982).

Synthesized and sharemaxxed with additional quirk by [Fachry Nuzuli Kamal](https://github.com/fachrynuzuli).

## Version History

- **1.1.0** — Added proper attribution for @itsolelehmann and @signulll.
- **1.0.0** — Initial release. Shareability Engine (3 triggers), Voice DNA, anti-AI patterns, rewrite patterns.

## License

MIT — see [LICENSE](LICENSE)

## Author

[Fachry Nuzuli Kamal](https://github.com/fachrynuzuli)
