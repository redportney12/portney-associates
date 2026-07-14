# Logo assets

Place the approved Portney & Associates logo files here, using these exact names
(referenced across the codebase and structured data):

- portney-associates-logo-transparent.png  (horizontal, transparent — light backgrounds)
- portney-associates-logo-navy.jpg          (for navy backgrounds / print)
- portney-associates-monogram-transparent.png (compact / mobile)
- portney-associates-favicon.png            (favicon, square, 512×512 recommended)
- portney-associates-black.png              (single-color fallback)

Until these are added, components/ui/logo.tsx renders a typographic fallback.
When the assets are in place, swap the fallback for the commented <Image> block
in components/ui/logo.tsx.
