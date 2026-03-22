-- Create reminders table to store user reminder settings
create table if not exists public.reminders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  interval_minutes integer not null default 15,
  reminder_message text not null default 'Time to check on your kids!',
  notification_type text not null default 'browser',
  is_active boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create reminder_logs table to track when reminders were sent and acknowledged
create table if not exists public.reminder_logs (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  reminder_id uuid references public.reminders(id) on delete cascade not null,
  sent_at timestamp with time zone default timezone('utc'::text, now()) not null,
  acknowledged_at timestamp with time zone,
  response_time_seconds integer
);

-- Enable RLS (Row Level Security)
alter table public.reminders enable row level security;
alter table public.reminder_logs enable row level security;

-- Create policies for reminders table
create policy "Users can view their own reminders" on public.reminders
  for select using (auth.uid() = user_id);

create policy "Users can insert their own reminders" on public.reminders
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own reminders" on public.reminders
  for update using (auth.uid() = user_id);

create policy "Users can delete their own reminders" on public.reminders
  for delete using (auth.uid() = user_id);

-- Create policies for reminder_logs table
create policy "Users can view their own reminder logs" on public.reminder_logs
  for select using (auth.uid() = user_id);

create policy "Users can insert their own reminder logs" on public.reminder_logs
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own reminder logs" on public.reminder_logs
  for update using (auth.uid() = user_id);

-- Create function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create trigger for reminders table
create trigger on_reminders_updated
  before update on public.reminders
  for each row execute procedure public.handle_updated_at();