create table public.contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  company text,
  message text not null,
  status text default 'new' check (status in ('new', 'contacted', 'resolved')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.contacts enable row level security;

-- Only authenticated users (admins) can view contacts
create policy "Allow authenticated users to read contacts" on public.contacts
  for select
  to authenticated
  using (true);

-- Anyone can insert a new contact request (service role is used in API, but let's allow it anyway)
create policy "Allow anonymous users to insert contacts" on public.contacts
  for insert
  to anon
  with check (true);
