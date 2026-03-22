# KidWatch Reminder

An automated timer system that sends regular reminders to check on children at configurable intervals. Perfect for parents and caregivers who want to maintain awareness of their kids' activities and safety through consistent prompting.

## Features

- **Configurable Timers**: Set reminder intervals from 1-60 minutes
- **Multiple Notification Types**: Browser notifications, sound alerts, and visual cues
- **Pause/Resume Functionality**: Easy timer controls for when you need flexibility
- **Custom Messages**: Personalize your reminder messages
- **Simple Interface**: Clean, user-friendly dashboard

## Problem Solved

Parents can get absorbed in work, household tasks, or other activities and lose track of time, potentially missing important moments or safety checks with their children. KidWatch Reminder helps maintain consistent awareness through gentle, regular prompts.

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kidwatch-reminder
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Fill in your Supabase project details in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key

4. Set up the database:
Run the migration in `supabase/migrations/001_initial.sql` in your Supabase SQL editor.

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Sign Up**: Create an account on the homepage
2. **Configure Timer**: Set your preferred reminder interval (1-60 minutes)
3. **Customize Message**: Enter a personalized reminder message
4. **Start Timer**: Click "Start Timer" to begin receiving notifications
5. **Manage Timer**: Use pause/resume or stop controls as needed

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Supabase (Authentication, Database)
- **Database**: PostgreSQL (via Supabase)
- **Deployment**: Vercel (recommended)

## Success Metrics

- Timer reliability (99%+ uptime)
- User engagement (daily active usage)
- Reminder response rate (user acknowledges within 2 minutes)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.