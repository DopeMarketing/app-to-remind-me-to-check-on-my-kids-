import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            KidWatch Reminder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Never lose track of time again. Get gentle reminders to check on your children 
            while you're busy with work, household tasks, or other activities.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-semibold mb-2">Configurable Timers</h3>
              <p className="text-gray-600">Set custom intervals from 1-60 minutes to match your schedule</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔔</div>
              <h3 className="text-lg font-semibold mb-2">Multiple Notifications</h3>
              <p className="text-gray-600">Choose from sound alerts, visual notifications, or mobile push</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-lg font-semibold mb-2">Simple Controls</h3>
              <p className="text-gray-600">Easy start/stop and pause/resume functionality</p>
            </div>
          </div>
          
          <div className="space-x-4">
            <Link 
              href="/signup" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/login" 
              className="inline-block bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Sign In
            </Link>
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">For Busy Parents</h2>
            <p className="text-lg text-gray-600 mb-4">
              Whether you're working from home, doing chores, or handling other responsibilities, 
              KidWatch Reminder helps you maintain awareness of your children's safety and activities.
            </p>
            <p className="text-lg text-gray-600">
              Set customizable reminder messages and intervals that work for your family's routine. 
              Never worry about losing track of time again.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}