# Create responsive `/memberships` page (Updated)

We will create a very clean, simple, and high-quality gateway page at `/memberships` that displays exactly two options: Individual Membership and Corporate Membership. The layout will display them side-by-side on desktop and stacked on mobile/tablet.

We will also update the Mobile bottom navigation, the floating popup, and the Browse Top Quick Actions link to redirect to this new `/memberships` page.

## User Review Required

> [!NOTE]
> * The `/memberships` page is optimized to be extremely simple and compact, focusing on the two large clickable plan cards.
> * The Individual Membership container, image, title, and button will link to `/individual-membership-plans`.
> * The Corporate Membership container, image, title, and button will link to `/buy-corporate-membership`.
> * The existing bottom navigation of `Navbar.js` will have its fourth option (Membership) updated to point to `/memberships`.

## Open Questions

None. All constraints are clear.

## Proposed Changes

### Memberships Page

#### [NEW] [page.js](file:///d:/Code/Misiion-100-/app/memberships/page.js)
* Create `app/memberships/page.js` with:
  * A compact heading area at the top: "Choose Your Membership" and subtitle "Select a membership plan to continue."
  * Balanced side-by-side columns on desktop (lg and up), and stacked rows on mobile/tablet.
  * Individual Membership card with `/individual-plans.png`, title "Individual Membership", and CTA "View Individual Plans".
  * Corporate Membership card with `/corporate-plans.png`, title "Corporate Membership", and CTA "View Corporate Plans".
  * Wrap each container completely in Next.js `Link` components so that the entire card is clickable and navigates to its respective destination.

### Components

#### [MODIFY] [Navbar.js](file:///d:/Code/Misiion-100-/components/Navbar.js)
* Update the Mobile Bottom Navigation's fourth option (Membership) `href` from `/individual-membership-plans` to `/memberships`.

#### [MODIFY] [WhatsAppButton.js](file:///d:/Code/Misiion-100-/components/WhatsAppButton.js)
* Point the floating slide-in "Membership Plans" popup link to `/memberships` instead of `/individual-membership-plans`.

#### [MODIFY] [AboutUs.js](file:///d:/Code/Misiion-100-/components/AboutUs.js)
* Update the "Membership Plans" quick action under "Browse Top Quick Actions" to point to `/memberships` instead of `/individual-membership-plans`.

---

## Verification Plan

### Automated Tests
* Run `npm run build` to verify the build completes successfully without errors.

### Manual Verification
* Verify `/memberships` displays the two options side-by-side on desktop, stacked on mobile/tablet.
* Verify both images (`/individual-plans.png`, `/corporate-plans.png`) load successfully.
* Verify clicking any part of the Individual Membership card routes to `/individual-membership-plans`.
* Verify clicking any part of the Corporate Membership card routes to `/buy-corporate-membership`.
* Verify the mobile bottom navigation Membership link navigates to `/memberships`.
* Verify the floating popup links navigate to `/memberships`.
* Verify the "Browse Top Quick Actions" → "Membership Plans" link navigates to `/memberships`.
