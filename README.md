# Next.js 14 SaaS Boilerplate

A production-ready SaaS boilerplate built with the latest technologies. 

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth & Database:** Supabase
- **Payments:** Stripe
- **Email:** Resend
- **Language:** TypeScript (Strict Mode)

## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
npm install
```

### 2. Environment Variables
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in the necessary values from your Supabase, Stripe, and Resend dashboards.

### 3. Database Setup (Supabase)
Navigate to your Supabase project's SQL Editor and run the SQL queries located in `supabase/migrations/001_profiles.sql` and `supabase/migrations/002_subscriptions.sql`.

### 4. Supabase Webhook (for Resend)
To send welcome emails automatically:
1. Go to **Database** -> **Webhooks** in Supabase.
2. Create a new webhook on `INSERT` for the `profiles` table.
3. Point it to `https://your-domain.com/api/webhooks/supabase` (or use Ngrok for local development).
4. Add an `Authorization` header with the value `Bearer <YOUR_SUPABASE_SERVICE_ROLE_KEY>`.

### 5. Stripe Webhook
Use the Stripe CLI to listen to local webhooks during development:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```
Add the generated Webhook Secret to your `.env.local`.

### 6. Run the application
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License
MIT
