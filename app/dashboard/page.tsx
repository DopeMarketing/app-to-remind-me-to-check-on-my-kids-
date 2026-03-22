'use client'

import { useState, useEffect } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [timerActive, setTimerActive] = useState(false)
  const [timerInterval, setTimerInterval] = useState(15)
  const [reminderMessage, setReminderMessage] = useState('Time to check on your kids!')
  const router = useRouter()
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    
    getUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const startTimer = () => {
    setTimerActive(true)
    // Timer logic would be implemented here
  }

  const stopTimer = () => {
    setTimerActive(false)
    // Stop timer logic would be implemented here
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                KidWatch Reminder Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Timer Settings</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reminder Interval (minutes)
              </label>
              <select
                value={timerInterval}
                onChange={(e) => setTimerInterval(Number(e.target.value))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                disabled={timerActive}
              >
                <option value={1}>1 minute</option>
                <option value={5}>5 minutes</option>
                <option value={10}>10 minutes</option>
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reminder Message
              </label>
              <input
                type="text"
                value={reminderMessage}
                onChange={(e) => setReminderMessage(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter custom reminder message"
                disabled={timerActive}
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            {!timerActive ? (
              <button
                onClick={startTimer}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Timer
              </button>
            ) : (
              <div className="space-x-4">
                <button
                  onClick={stopTimer}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Stop Timer
                </button>
                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                  Timer Active - {timerInterval} min intervals
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How it works</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Set your preferred reminder interval (1-60 minutes)</li>
            <li>• Customize your reminder message</li>
            <li>• Click "Start Timer" to begin receiving notifications</li>
            <li>• Use "Stop Timer" to pause reminders when not needed</li>
            <li>• Browser notifications will alert you when it's time to check on your kids</li>
          </ul>
        </div>
      </main>
    </div>
  )
}