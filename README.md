# Projectjob

Responsive Government + Private job portal built with Next.js 15, React 19, TypeScript and Supabase. Includes state/city/education/job-type filters, vacancy detail pages, and an allowlisted admin workspace. No free-text search box.

## Setup
1. Supabase database schema and RLS policies are installed on the connected project. `supabase/schema.sql` is a reference for the main tables.
2. Create an admin user in Supabase Dashboard → Authentication → Users. Copy its UUID, then add it to the allowlist with SQL: `insert into public.admin_users(user_id,email,active) values('AUTH-USER-UUID','your-email@example.com',true);`. Replace sample values. No public sign-up is implemented.
3. Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` using the project URL and publishable/anon key from Supabase settings. Never use a service-role/secret key in a NEXT_PUBLIC variable.
4. Run `npm install`, then `npm run dev`; visit http://localhost:3000 and /admin.
5. For Netlify, configure the same two public Supabase environment variables in Site configuration → Environment variables, then trigger a new deploy. The GitHub Actions workflow checks the production build on pushes to main.
6. For Vercel, import this repository and add the same two environment variables to the deployment. Add your deployment domain in Supabase Auth URL Configuration.

## Security
RLS is enabled on jobs, locations and admin_users. Visitors read published jobs and active locations only. Only active UUIDs in admin_users can create/change jobs and locations. The existing SECURITY DEFINER function public.rls_auto_enable() has EXECUTE revoked from PUBLIC, anon and authenticated; its internal event trigger remains enabled. The security advisor returned no remaining security lints after hardening.

Review all recruitment dates and official URLs before publishing. AdSense monetisation requires separate approval and is not guaranteed by this code.
