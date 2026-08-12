# Blog drafts — plan 0004 Wave A, post bodies

Three posts for Content > Blog posts. Titles and target queries are verbatim
from plan 0004. Visibility must stay Hidden until the orchestrator reviews.

If the admin blog editor's rich text field will not save body content
directly (it did not reliably sync during the Wave A run, see the agent
report), open the draft, click the `</>` "Show HTML" icon in the content
toolbar, paste the matching file below into that code view, then click the
icon again to switch back to the normal editor before clicking Save. Verify
by reloading the article URL fresh and confirming the body still shows text,
not just the title/SEO fields.

## Post 1 — Gifts for Golfers Who Have Everything

- Target query: "gifts for golfers who have everything"
- Body: `post1-gifts-for-golfers.html`
- SEO title (56 chars): `Gifts for Golfers Who Have Everything: The Curious Maker`
- Meta description (158 chars): `A gift guide for golfers who already have the gear. See why a tap to dispense golf ball dispenser, printed to order in Utah, is a tool they will actually use.`
- Already created in Admin as article id `1009253875861`, Hidden. Title and
  SEO fields saved correctly at creation time; confirm body content before
  treating it as done.
- Known bug still live on that draft: the meta description currently reads
  "a tap to dispense dispenser" (missing "golf ball"). A fix was attempted
  after creation but did not persist, since edits to an already saved
  article did not trigger the admin's dirty state / Save button through
  this automation tool (title, body, and SEO fields all showed the same
  behavior on the edit route, only the original creation flow reliably
  saved). Open the draft, click the pencil on Search engine listing, and
  manually retype the meta description to: "A gift guide for golfers who
  already have the gear. See why a tap to dispense golf ball dispenser,
  printed to order in Utah, is a tool they will actually use." (158 chars).

## Post 2 — Why PETG Makes Sense for a Golf Ball Dispenser

- Target query: "PETG golf ball dispenser"
- Body: `post2-why-petg.html`
- SEO title (46 chars): `Why PETG Makes Sense for a Golf Ball Dispenser`
- Meta description (152 chars): `Most 3D printed goods use PLA. See why our golf ball dispensers are printed in UV resistant PETG instead, tested outdoors and at 114 degrees Fahrenheit.`
- Not yet created in Admin.

## Post 3 — How a 3D Printed Golf Ball Dispenser Works

- Target query: "how does a 3D printed golf ball dispenser work"
- Body: `post3-how-it-works.html`
- SEO title (42 chars): `How a 3D Printed Golf Ball Dispenser Works`
- Meta description (142 chars): `No motor, no battery. See how our gravity fed, tap to dispense golf ball dispenser drops one ball at a time, and what is included in each set.`
- Not yet created in Admin.

## Facts used, all sourced from the live site

- `/pages/petg`, `/pages/how-it-works`, `/pages/about`, and the dispenser
  product page (`/products/golf-ball-dispenser-golf-training-aid-for-simulator-backyard-range-practice-25-ball-capacity`).
- 114 degree Fahrenheit car test and the two outdoor test sets: from the live
  PETG page copy.
- No claims invented beyond what those pages already state. PETG claims are
  dispenser scoped only, per the plan's prime directive (clickers are PLA,
  Strike Form is TPU, mentioned only as the workshop's general material
  policy, not extended to golf claims).

## Internal links used in every post

Dispenser product page, `/collections/golf`, and one of `/pages/petg` or
`/pages/how-it-works` depending on the post's topic.
