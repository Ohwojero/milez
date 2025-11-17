# Fix Navbar Scrolling on Mobile Devices

## Problem
Navbar links do not scroll to sections properly on small devices (mobile). Clicking links in the mobile menu doesn't trigger scrolling.

## Root Cause
- Default anchor link behavior may not work reliably on mobile due to touch events or viewport issues.
- Fixed navbar height (pt-20 on hero) causes sections to be hidden behind the navbar when scrolled to.
- No custom scroll handling implemented.

## Solution Plan
- [x] Add custom click handlers to navbar links (both desktop and mobile).
- [x] Implement smooth scroll with offset to account for navbar height.
- [x] Use `scrollIntoView` or `window.scrollTo` with calculated offset.
- [x] Ensure mobile menu closes after clicking link.
- [x] Test on mobile viewport.

## Files to Edit
- [x] `components/navbar.tsx`: Add scroll logic to nav links.

## Followup Steps
- [x] Run the development server.
- [x] Test scrolling on mobile (use browser dev tools to simulate mobile).
- [x] Verify all sections scroll correctly with proper offset.
