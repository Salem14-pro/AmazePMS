# Amaze PMS

A property management system landing page built with modern web technologies.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (for contact form submissions)
- **Language:** TypeScript

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy the `.env.example` file to `.env.local` (or create one):
```bash
cp .env.example .env.local
```
Fill in the necessary values from your Supabase dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Required for the contact form to bypass RLS)

### 3. Database Setup (Supabase)
Navigate to your Supabase project's SQL Editor and run the SQL query located in `supabase/migrations/003_contacts.sql` to create the contacts table.

### 4. Run the Application
```bash
npm run dev
```

This is for hosting it locally, You'll most certainly be given on the web hosted one
