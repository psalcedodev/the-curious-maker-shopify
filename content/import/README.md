# How to use products.csv

Plan 0003, step S5. Read this before importing, starting with section 0,
which is a blocker on the fidget clicker product, not a CSV mechanics note.

## 0. The fidget clicker has no working personalization field on this storefront

This is a pre-existing gap, not something this step introduced, but it means
the product cannot be ordered correctly as the theme stands today. The live
description's own "HOW TO ORDER" steps end with "Enter your personalization,"
but never say where. I checked: this theme has no line item property input
anywhere on the product form (`snippets/buy-buttons.liquid`,
`snippets/product-variant-picker.liquid`, `sections/main-product.liquid`),
and the one text field that exists, the cart note
(`sections/main-cart-footer.liquid`, `snippets/cart-drawer.liquid`), is
switched off (`config/settings_data.json:128`, `show_cart_note: false`). It
is also a single note for the whole cart, not tied to a specific line item,
which would be confusing on an order with more than one clicker.

I did not invent a mechanism to paper over this. The CSV body copy for this
product says "message us with your personalization," matching the live
listing's own real fallback ("...or message us"). Before this product is
truly ready to sell through this storefront, it needs one of: a line item
property text input added to the product form, the cart note turned on (with
a name/word field per clicker in a multi-item order still unresolved), or a
confirmed message-us-first workflow. Flagging for Paul to decide; not a CSV
or copy problem to solve from this seat.

## 1. This is an overwrite import, not a new-products import, and I have not verified it is safe for existing photos

All 5 products in `products.csv` already exist on the live store (same
handles, same variant structure, same prices, byte checked against
`/products/<handle>.js` at fetch time), and each one currently carries real
product photography (8, 16, 4, 7, and 5 images respectively). Import this
file using Shopify Admin's Products > Import, and choose the option to
overwrite existing products that match by handle. If you instead choose
"create new products," Shopify will either reject the duplicate handles or
create a second, parallel set of products.

I could not confirm from here whether Shopify's overwrite import treats a
blank `Image Src` column as "leave existing media alone" or as "clear
existing media." Before you run the first overwrite import, export the
current products from Admin as a backup CSV, or at minimum confirm this
behavior in a test import on one product. Do not assume the blank image
columns in this CSV are a safe no-op until you have checked.

Overwriting replaces the live Title, Body (HTML), Tags, and SEO fields with
the versions in this CSV. I rewrote every product's Body (HTML) in plan
voice, but kept the details a customer needs to order correctly: the golf
dispenser FAQ (powered, handed, simulator), and, most importantly, the fidget
clicker's full 15 color combo list, symbol list, and how to order steps,
since that product has no color variant option. Its color choice is only
captured in the body copy, not in a Shopify dropdown. If you edit that body
copy later, keep that list intact or personalization orders will come in
without enough information to fill correctly.

## 2. The image columns are blank on purpose. Do not leave them blank by accident.

Shopify's CSV importer only accepts public http(s) URLs in `Image Src` and
`Variant Image`. It cannot read a local file path off your Mac. Because of
that hard constraint, I left both columns blank in `products.csv` rather than
filling them with local file paths that would silently fail to import (the
product would come in with zero images and no error).

The real image work happens in Shopify Admin directly, not through this CSV.
Two ways to do it, pick one:

**Manual (recommended, most reliable):** open each product in Admin, drag in
the matching file from `~/Desktop/Curious Maker Images/`, and assign it to
the matching variant. Use the mapping table below as the answer key. This is
the standard way to add local files to Shopify and it just works.

**CSV driven (only if you want bulk automation):** upload the files to
Shopify Admin > Content > Files first, copy the resulting `cdn.shopify.com`
URLs, and paste them into `Image Src` / `Variant Image` in a copy of this CSV
before re-importing. More setup, only worth it if you are doing this
repeatedly.

### Confident matches (34 of 76 variants; use these directly)

I only mapped a variant to a file when the filename matched the live variant
option value exactly or near exactly. Everything not listed below has no
confident local match and is a Paul-ask, not a guess.

| Product | Option 1 | Option 2 | Local file (relative to `~/Desktop/Curious Maker Images/`) |
|---|---|---|---|
| Golf Ball Dispenser | Classic | Patriot's Drive | Shopify/Patriot's Drive - Classic.png |
| Golf Ball Dispenser | Classic | Augusta Aura | Shopify/Augusta Aura - Classic.png |
| Golf Ball Dispenser | Classic | Caddie | Shopify/Caddie - Classic.png |
| Golf Ball Dispenser | Classic | Golden Tee | Shopify/Golden Tee - Classic.png |
| Golf Ball Dispenser | Classic | Ocean Drive | Shopify/Ocean Drive - Classic.png |
| Golf Ball Dispenser | Classic | Tiger's Roar | Shopify/Tiger's Roar - Classic.png |
| Golf Ball Dispenser | Premium | Patriot's Drive | Shopify/Patriot's Drive - Premium.png |
| Golf Ball Dispenser | Premium | Augusta Aura | Shopify/Augusta Aura - Premium.png |
| Golf Ball Dispenser | Premium | Caddie | Shopify/Caddie - Premium.png |
| Golf Ball Dispenser | Premium | Golden Tee | Shopify/Golden Tee - Premium.png |
| Golf Ball Dispenser | Premium | Ocean Drive | Shopify/Ocean Drive - Premium.png |
| Golf Ball Dispenser | Premium | Tiger's Roar | Shopify/Tiger's Roar - Premium.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | America's Team | Shopify/Football Teams/America's Team.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Black & Gold Nation | Shopify/Football Teams/Black & Gold Nation (also Who Dat! Nation).png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Cheesehead Nation | Shopify/Football Teams/Cheesehead Nation.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | The Red Kingdom | Shopify/Football Teams/The Red Kingdom (also San Francisco 49ers).png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Philly Green Guard | Shopify/Football Teams/Philly Green Guard.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Table Smashers | Shopify/Football Teams/The Table Smashers.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Aqua & Orange Fins | Shopify/Football Teams/Aqua & Orange Fins.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Orange Crush Country | Shopify/Football Teams/Orange Crush Country.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Blue Horse Shoe | Shopify/Football Teams/Blue Horse Shoe.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Bolt Fam | Shopify/Football Teams/Bolt Fam.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Buccaneer Red | Shopify/Football Teams/Buccaneer Red.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Cardinal Red Birds | Shopify/Football Teams/Cardinal Red Birds.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Carolina Blue Cats | Shopify/Football Teams/Carolina Blue Cats.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Dirty Bird Flight | Shopify/Football Teams/Dirty Bird Flight.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Gang Green | Shopify/Football Teams/Gang Green.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Honolulu Blue Pride | Shopify/Football Teams/Honolulu Blue Pride.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Monsters of D Midway | Shopify/Football Teams/Monsters of the Midway.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | The 12th Man Legion | Shopify/Football Teams/The 12th Man Legion.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | The Dawg Pound | Shopify/Football Teams/The Dawg Pound.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | Silver & Black Horde | Shopify/Football Teams/Silver & Black Horde.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | The Bengal Stripes | Shopify/Football Teams/The Bengal Stripes.png |
| Football-Team Golf Ball Dispenser | Premium with Funnel | The Greatest Show | Shopify/Football Teams/The Greatest Show.png |

Two "near matches" in that table have a minor name difference between the
live variant and the local filename: `Table Smashers` uses the file named
`The Table Smashers.png`, and `Monsters of D Midway` uses the file named
`Monsters of the Midway.png`. Confirm those two by eye before assigning; I am
confident but not certain they are the same team art.

### No confident match (Paul-ask, do not guess)

- **4 football team variants**: `Nautical Blue Crew`, `Faithful To The Bay`,
  `Titans Blue`, `Custom`. No file in the upload set matches these names.
- **One orphaned local file**: `Shopify/Football Teams/Two-Tone Blue.png`
  has no corresponding live variant at all. It may belong to a team that got
  renamed; worth checking before it gets lost.
- **The 2 "Custom" variants** on the plain Golf Ball Dispenser have no
  default photo, which is expected since those are made to a buyer's custom
  request.
- **Golf Ball Tray, Strike Form Golf Swing Trainer, and the Fidget Clicker**:
  no files anywhere in the 68-file upload set correspond to these three
  products at all (24, 6, and 6 variants respectively, 36 variants with zero
  local photography). Either shoot or source new images for these three, or
  pull their current live CDN images as a placeholder (available at each
  product's `/products/<handle>.js`, `images` array).

## 3. Two columns are my proposed defaults, not live data

- **`Type`**: I wrote a proposed taxonomy ("Golf Ball Dispenser," "Golf
  Accessory," "Golf Training Aid," "Fidget Toy"). The live `type` field is
  empty on all 5 products today. Overwriting will set it for the first time,
  not change an existing value.
- **`Variant Inventory Policy`**: set to `continue` for every row (sell
  without tracked stock, matching "printed to order," not drop shipped). The
  live products have no inventory tracker set either, so this does not change
  behavior, but flagging that it is an operational default I chose, not a
  fact I sourced.

## 4. New page URLs referenced elsewhere

`templates/page.petg.json` and `templates/page.how-it-works.json` (this same
S5 step) expect to be assigned to pages with the handles `petg` and
`how-it-works` exactly, since both pages link to each other by that path and
`templates/llms.txt.liquid` now advertises
`{shop}/pages/petg` and `{shop}/pages/how-it-works` under a new "Resources"
section. Until you create those 2 pages in Admin and assign the templates,
those 2 URLs in llms.txt will 404. That is a real, small cost of shipping the
llms.txt change ahead of the admin work; sequence the page creation soon
after merge.

## 5. Every fact in this CSV is sourced

Full source citations, per-product metafield values, and the complete list of
things I could not source (left blank rather than guessed) are in
`content/import/metafields-and-seo.md` in this same folder.
