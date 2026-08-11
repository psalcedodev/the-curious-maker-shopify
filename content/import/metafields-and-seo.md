# Metafield definitions and SEO copy sheet

Plan 0003, step S5. Every value below is sourced; sources are named inline.
Blank rows are intentional. Do not fill a blank with a guess; see the
Paul-asks list at the bottom.

Importing `products.csv`? Read `content/import/README.md` first. It covers
the overwrite-by-handle behavior and the image column handling; this file is
the fact sourcing and metafield reference.

## 1. Metafield definitions (create these in Shopify Admin > Settings > Custom data > Products)

| Namespace and key | Type | Notes |
|---|---|---|
| `custom.whats_included` | List of single line text | Matches S4's Liquid at `sections/main-product.liquid:249` |
| `custom.dimensions` | Single line text | Matches S4's Liquid at `sections/main-product.liquid:277` |
| `custom.material` | Single line text | Matches S4's Liquid at `sections/main-product.liquid:277` |

Both blocks render nothing when their metafields are blank (blank safe,
verified in the Liquid). It is safe to leave a product's metafields unset
until real values exist.

## 2. Proposed metafield values per product

Source for all facts below: live product pages at `bqtfza-md.myshopify.com`
(redirects to `www.thecuriousmaker.us`), fetched via `/products.json` and
`/products/<handle>.js` on 2026-08-11.

### Golf Ball Dispenser (`golf-ball-dispenser-golf-training-aid-for-simulator-backyard-range-practice-25-ball-capacity`)

- `custom.material`: `UV resistant PETG`, sourced verbatim ("Material: UV-resistant PETG") from the live product description.
- `custom.whats_included`: list with two lines:
  - `Classic: base, ball guider, pedal, hopper, adjustable legs`
  - `Premium: adds a funnel for smoother ball delivery`
  Both sourced verbatim (reworded to drop the plus sign and marketing emoji) from the live description's "SET OPTIONS" block.
- `custom.dimensions`: **blank, Paul-ask.** No physical dimensions (height, width, footprint) are published anywhere I could reach. See Paul-asks.

### Football-Team Golf Ball Dispenser (`football-team-golf-ball-dispenser-...`)

- `custom.material`: `UV resistant PETG`, same source pattern as above, this product's own description.
- `custom.whats_included`: `Premium with Funnel: base, ball guider, pedal, hopper, adjustable legs, funnel`. This product only sells the Premium set (its live `options` array has a single Set value, "Premium with Funnel"; there is no Classic option on this handle).
- `custom.dimensions`: **blank, Paul-ask.**

### Golf Ball Tray (`3d-printed-golf-ball-tray-simulator-accessory-unique-golf-gift-for-him`)

- `custom.material`: **blank, Paul-ask, weak signal only.** The live description never states a material in prose. The product does carry a `PETG` tag, which is a real signal but not a stated fact, so it is flagged rather than asserted as a description level fact.
- `custom.whats_included`: list with two lines:
  - `Classic: 30 ball slots`
  - `Premium Flat: adds a flat tray section for tees, markers, or accessories`
  **Mismatch note:** the live description text also advertises a third option, "Premium with Tee Holes," but the product's actual live `options` array only has two Type values: `Classic` and `Premium Flat`. Tee Holes is not a purchasable variant right now, so it is left out of this list rather than invented as a real option.
- `custom.dimensions`: **blank, Paul-ask.** ("Holds 30 balls" is a capacity fact, not a linear dimension.)

### Strike Form Golf Swing Trainer (`strike-form-golf-swing-trainer-wedge-practice-improve-contact-and-swing-path`)

- `custom.material`: `TPU`, sourced verbatim ("Crafted from TPU, a flexible and durable material...") from the live description. **This product is not PETG.** Flagging clearly since the other four products in this catalog are.
- `custom.whats_included`: list with three lines, matching the live `options` array (Classic/Deluxe/Premium) exactly:
  - `Classic: training wedge only`
  - `Deluxe: training wedge, Ruler Wall, Diagonal Wall`
  - `Premium: training wedge, training walls, storage case`
- `custom.dimensions`: **blank, Paul-ask.**

### Personalized Keycap Fidget Clicker Keychain (`personalized-keycap-fidget-clicker-keychain-...`)

- `custom.material`: **blank, Paul-ask.** No material is stated on the live listing, and this product does not carry a `PETG` tag (the four golf products do). Do not assume PETG for this one.
- `custom.whats_included`: `Lobster clasp attachment, standard, or a wrist strap attachment for an extra $2.50, 10 color options`. Sourced from the live description's "ATTACHMENT OPTIONS" section, cross checked against the live variant price ladder (Wrist Strap variants are consistently $2.50 more than the matching Lobster Clasp variant at every character tier).
- `custom.dimensions`: **blank, Paul-ask.**

## 3. SEO titles and descriptions (paste-ready, plan voice, character counts verified)

| Product | SEO Title (chars) | SEO Description (chars) |
|---|---|---|
| Golf Ball Dispenser | Golf Ball Dispenser, Classic or Premium (39) | Tap to dispense golf ball feeder, gravity fed, no power required. Holds 25 balls. Printed in UV resistant PETG in our own workshop. (131) |
| Football-Team Golf Ball Dispenser | Football Team Golf Ball Dispenser (33) | Team color golf ball dispenser with funnel. Gravity fed, tap to dispense, holds 25 balls. Printed in UV resistant PETG in our workshop. (135) |
| Golf Ball Tray | Golf Ball Tray, Simulator Storage (33) | A 3D printed tray that holds 30 golf balls in a clean grid layout. Classic or Premium Flat, printed to order in our workshop. (125) |
| Strike Form Golf Swing Trainer | Strike Form Golf Swing Trainer (30) | A wedge training aid for strike quality and swing path, built from durable TPU. Classic, Deluxe, or Premium sets available. (123) |
| Personalized Fidget Clicker Keychain | Personalized Fidget Clicker Keychain (36) | A custom name or word fidget clicker keychain, 3D printed to order. Choose your colors and attachment style. (108) |

These same title and description strings are already written into
`content/import/products.csv` (SEO Title / SEO Description columns). This
table is the paste-ready duplicate for the Admin SEO fields if Paul edits
products directly instead of re-importing.

### Future collections (Golf, Clickers), owed since plan 0001; S3's `shop-by-family` block is blank safe until these exist

| Collection | SEO Title (chars) | SEO Description (chars) |
|---|---|---|
| Golf | Golf Practice Gear \| The Curious Maker (38) | Golf ball dispensers, a ball tray, and a swing trainer, printed to order in our own workshop. Tap to dispense, gravity fed, no power required. (142) |
| Clickers | Fidget Clicker Keychains \| The Curious Maker (44) | Personalized fidget clicker keychains, 3D printed to order with your name, word, or phrase, and 15 color combinations to choose from. (133) |

Scope note: as of this fetch, the live catalog has 5 products across these
implied families: 4 golf products (Golf Ball Dispenser, Football-Team Golf
Ball Dispenser, Golf Ball Tray, Strike Form Golf Swing Trainer) and 1 clicker
product. `templates/llms.txt.liquid`'s "Current line" section (S1's territory)
only names the plain Golf Ball Dispenser and the clicker line; the tray and
swing trainer are real, live, and currently undescribed there. Not changed
here per the S5 brief ("keep the catalog claims as S1 left them"). Flagged
for the S1 owner to reconcile.

## Paul-asks (facts I could not source, left blank rather than guessed)

1. **No physical dimensions exist anywhere I could reach**, for any of the 5 products. I tried: live product JSON (no dimension fields populated), the live product descriptions (capacity only, for example "holds 25 balls" or "holds 30 balls," not linear dimensions), and the Etsy listing for the golf ball dispenser (`https://www.etsy.com/listing/4363662080/...`, the live URL I found via web search). Etsy blocked the fetch (HTTP 403). A web search for dimensions on our own clicker listing returned dimensions for two different sellers' fidget clicker listings that happen to rank for similar terms. I did not use those; using them would have been misattributed fact. Recommend Paul measures the physical parts, or pulls from the Blender or STL files, and supplies real inch or cm figures for `custom.dimensions` per product.
2. **Material for the Golf Ball Tray and the Fidget Clicker keychain.** See per-product notes above. The tray has a `PETG` tag but no stated-in-prose material fact; the clicker has neither.
3. **No PETG vendor spec sheet exists.** `PETG_HF_Hex_Code_Table.pdf` (in the Studio vault next to `product-colors.md`, not in this theme repo; see Mismatch 1 below) is a Bambu Lab filament color chart only: 14 color swatches and their hex codes, nothing else. It has no heat deflection temperature, tensile strength, UV rating, or care instructions. I did not invent PETG-specific care facts. The only "care" copy I found anywhere on the live site is on the fidget clicker listing ("Wipe clean with a soft, dry cloth. Avoid prolonged exposure to high heat."). I used it on that product's own CSV body copy, its real and correct context, but deliberately did **not** port it to `templates/page.petg.json`, because "avoid heat" would directly contradict the approved 114F hot-car durability claim on that page. If Paul wants a real PETG care blurb, it needs a real source (Bambu's PETG HF technical data sheet, not the hex chart) or Paul's own guidance.
4. **Prototype counts, print hours, origin story, name in About.** Already logged in the plan's own Paul-side checklist (plan section "Facts still wanted for copy v2"). Repeating here only to confirm S5 did not invent any of these to fill gaps.

## Spec-vs-reality mismatches found during S5

1. **`content/product-colors.md` and `content/brand-voice-card.png` are not in this repo.** The S5 brief describes them as being "in the repo." They live in the Studio vault instead, at `~/Desktop/Studio/projects/shopify/content/product-colors.md` and `.../brand-voice-card.png`. Used from there; flagging the path so nobody goes looking in `the-curious-maker-shopify/content/` (which did not exist before this step) expecting to find them.
2. **The "Bambu PETG HF vendor PDF" has no material property content.** It is a 14 swatch color hex table, not a spec sheet. See Paul-ask 3.
3. **No dispenser render or diagram assets exist in `assets/` yet.** The S5 brief for `page.how-it-works.json` assumed "imagery from assets/ renders already present in the theme." I checked `assets/`: the only non-icon, non-CSS images there are the two already-committed PETG comparison graphics and one workshop photo (`craftsmanship-packing.jpg`). No dispenser renders or mechanism diagrams are in the theme yet. Built the how-it-works page blank safe (image fields left empty; the theme's `multicolumn` section renders clean text-only cards when images are blank, not a broken placeholder) rather than referencing assets that do not exist.
4. **The live catalog is 5 products, not 2 families.** `templates/llms.txt.liquid`'s hand-maintained "Current line" section (S1's territory, not touched here) describes only "Golf Ball Dispenser" and "Personalized fidget clickers." The live store also sells a Golf Ball Tray and a Strike Form Golf Swing Trainer (confirmed via `/products.json`, both real and purchasable). Flagged for the llms.txt owner, not changed here.
5. **Golf Ball Tray's "Premium with Tee Holes" variant does not exist live.** See per-product note above; the live description text oversells the variant options. Only Classic and Premium Flat are real, purchasable Type values.
6. **The fidget clicker product has no working way to collect personalization on this storefront.** Full detail in `content/import/README.md` section 0; summary here because it is a functional gap, not a copy gap. This theme has no line item property input on the product form and the cart note is switched off (`config/settings_data.json:128`). The live description's own instructions say "enter your personalization" without saying where. My CSV body copy for this product says "message us with your personalization" rather than inventing a field that does not exist. This predates S5 and is not something a copy pass can fix; it needs a real input mechanism before the product can be ordered correctly.
7. **Image mapping to the 68-file upload set is partial by necessity, not by guesswork, and it does not live in the CSV.** Shopify's CSV importer only accepts public http(s) URLs for `Image Src` / `Variant Image`, never local file paths, so every image column in `products.csv` is blank on purpose (a local path would silently fail to import). The full filename mapping is in `content/import/README.md` instead, as a manual assignment reference. Summary: of the plain Golf Ball Dispenser's 14 variants, all 12 named-color variants (Classic/Premium times 6 colors) matched exact filenames; the 2 "Custom" variants have no default photo, expected for custom orders. Of the Football-Team dispenser's 26 variants, 22 matched (2 with a minor name variant: "Table Smashers" to "The Table Smashers.png", "Monsters of D Midway" to "Monsters of the Midway.png"); 4 did not match anything: `Nautical Blue Crew`, `Faithful To The Bay`, `Titans Blue`, and `Custom`. One local file, `Two-Tone Blue.png`, has no corresponding live variant at all, an orphaned asset, flagging in case it belongs to a team name that was renamed. The Golf Ball Tray, Strike Form Golf Swing Trainer, and Fidget Clicker have **no** matching files anywhere in the 68-file set, 36 variants with zero local photography between them.
