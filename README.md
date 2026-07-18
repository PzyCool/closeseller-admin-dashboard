# CloseSeller Admin Dashboard

Admin dashboard implementation for the CloseSeller marketplace.

## Scope

- Admin dashboard shell
- Sidebar and topbar navigation
- Dashboard overview page
- Users page
- Products page
- Responsive mobile sidebar
- Placeholder pages for out-of-scope sidebar modules

## Routes

- `/` - Dashboard overview
- `/users` - Users table and user stats
- `/products` - Products table and product stats
- `/orders`, `/payments`, `/escrow`, `/pending-actions`, `/analytics`, `/settings` - placeholder pages

## Project Structure

- `app/` - Next.js App Router pages and root layout
- `components/layout/` - dashboard shell, sidebar, topbar, placeholder page
- `components/dashboard/` - overview page sections
- `components/tables/` - reusable table and pagination components
- `components/ui/` - shared UI primitives
- `lib/` - mock data and navigation config
- `public/` - exported Figma assets

## Commands

```bash
npm run dev
npm run lint
npm run build
```

The implementation currently uses mock data from `lib/data.ts`. It is structured so API data can replace the mock arrays later without changing the page layout.
