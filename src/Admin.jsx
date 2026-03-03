import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'
import { Monitor } from 'lucide-react'

// Basic copies of services and courses data for the admin dashboard.
// If you update services in App.jsx, you may also want to update this list.
const services = [
  {
    id: 'pan-card',
    title: 'PAN Card',
    description:
      'New PAN card application and corrections through NSDL/UTI portals with full document support.'
  },
  {
    id: 'aadhar-services',
    title: 'Aadhar Services',
    description:
      'Aadhar enrollment help, address / mobile / photo update guidance and download of e-Aadhar.'
  },
  {
    id: 'ration-card',
    title: 'Ration Card',
    description:
      'New ration card registration, member addition/removal and address updates as per portal.'
  },
  {
    id: 'voter-id',
    title: 'Voter ID (EPIC)',
    description:
      'New voter ID registration (Form 6), corrections and address change for your constituency.'
  },
  {
    id: 'driving-license',
    title: 'Driving License (DL)',
    description:
      'Online learning license, permanent license, renewal and slot booking via Parivahan portal.'
  },
  {
    id: 'passport',
    title: 'Passport Services',
    description:
      'Online passport application, appointment booking and document checklist guidance.'
  },
  {
    id: 'exam-form',
    title: 'Exam / Admission Forms',
    description:
      'Online form fill-up for school, college, government and competitive exams with fee payment.'
  },
  {
    id: 'scholarship',
    title: 'Scholarship & Portal Updates',
    description: 'NSP, state scholarship forms, renewal and tracking with upload support.'
  },
  {
    id: 'gst-registration',
    title: 'GST Registration',
    description:
      'New GST registration, amendments and basic GST portal guidance for business owners.'
  },
  {
    id: 'company-registration',
    title: 'Company / MSME Registration',
    description:
      'Udyam (MSME), Shop Act and basic business registration assistance with document guidance.'
  },
  {
    id: 'property-id',
    title: 'Property ID & Revenue Records',
    description:
      'Online property ID search, mutation status check and basic revenue record downloads.'
  },
  {
    id: 'printing-scanning',
    title: 'Printing, Scanning & Lamination',
    description:
      'High quality print, scan, photocopy, lamination and PDF creation from mobile or pen drive.'
  }
]

const courses = [
  { title: 'Basic Computer', level: 'Beginner', duration: '3 months' },
  { title: 'Excel & Advanced Excel', level: 'Intermediate', duration: '2 months' },
  { title: 'Tally Prime', level: 'Professional', duration: '2 months' },
  { title: 'Python', level: 'Intermediate', duration: '4 months' },
  { title: 'Web Development', level: 'Advanced', duration: '6 months' },
  { title: 'MySQL', level: 'Advanced', duration: '2 months' }
]

function Admin() {
  const [adminKey, setAdminKey] = useState('')
  const [isAdminAuthed, setIsAdminAuthed] = useState(false)
  const [requests, setRequests] = useState([])
  const [newRequest, setNewRequest] = useState({
    trackingId: '',
    name: '',
    service: '',
    notes: ''
  })

  // Load saved requests from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('mahakaal-admin-requests')
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          setRequests(parsed)
        }
      }
    } catch (e) {
      console.error('Failed to load saved requests', e)
    }
  }, [])

  // Persist requests to localStorage whenever they change
  useEffect(() => {
    try {
      window.localStorage.setItem('mahakaal-admin-requests', JSON.stringify(requests))
    } catch (e) {
      console.error('Failed to save requests', e)
    }
  }, [requests])

  const handleAddRequest = () => {
    if (!newRequest.trackingId.trim() && !newRequest.name.trim()) return

    const entry = {
      id: Date.now(),
      trackingId: newRequest.trackingId.trim() || '-',
      name: newRequest.name.trim() || '-',
      service: newRequest.service.trim() || '-',
      notes: newRequest.notes.trim() || '',
      done: false
    }

    setRequests(prev => [entry, ...prev])
    setNewRequest({
      trackingId: '',
      name: '',
      service: '',
      notes: ''
    })
  }

  const toggleRequestDone = (id) => {
    setRequests(prev =>
      prev.map(r => (r.id === id ? { ...r, done: !r.done } : r)),
    )
  }

  const updateRequestNotes = (id, notes) => {
    setRequests(prev =>
      prev.map(r => (r.id === id ? { ...r, notes } : r)),
    )
  }

  const removeRequest = (id) => {
    if (!window.confirm('Remove this entry from the tracker?')) return
    setRequests(prev => prev.filter(r => r.id !== id))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple admin header */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Mahakaal Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Back to Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <section className="py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                  Internal panel for Mahakaal Cyber Cafe team. Review services and courses, and manage
                  your offline tracking sheet or register alongside this dashboard.
                </p>
              </div>
              {isAdminAuthed && (
                <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  Logged in as admin
                </span>
              )}
            </div>

            {!isAdminAuthed ? (
              <div className="max-w-md">
                <Card className="bg-card/80">
                  <CardHeader>
                    <CardTitle>Admin Login</CardTitle>
                    <CardDescription>
                      Basic front-end only login. Update the password in code before real deployment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <input
                      type="password"
                      placeholder="Enter admin password"
                      value={adminKey}
                      onChange={(e) => setAdminKey(e.target.value)}
                      className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm"
                    />
                    <Button
                      className="btn-primary w-full"
                      disabled={!adminKey.trim()}
                      onClick={() => {
                        if (adminKey === 'mahakaal-admin') {
                          setIsAdminAuthed(true)
                        } else {
                          alert('Incorrect admin password.')
                        }
                      }}
                    >
                      Login
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Default password:{' '}
                      <span className="font-mono">mahakaal-admin</span> (change in{' '}
                      <span className="font-mono">src/Admin.jsx</span>).
                    </p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="space-y-10">
                {/* Admin summary cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Digital Services</CardTitle>
                      <CardDescription>Total services listed on website</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">{services.length}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Courses</CardTitle>
                      <CardDescription>Active courses shown in institute section</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">{courses.length}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-sm text-muted-foreground">Tracking System</CardTitle>
                      <CardDescription>Manage your offline sheet / system</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        Use a Google Sheet or register book to log every request with a Tracking ID like{' '}
                        <span className="font-mono text-foreground">MCCF-0001</span>.
                      </p>
                      <p>
                        When customers use the website track form, search by mobile or Tracking ID in your
                        sheet and reply on WhatsApp.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Work tracker */}
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold">Work Tracker</h2>
                      <p className="text-xs text-muted-foreground">
                        Add each new work/request here. Tick the checkbox when it&apos;s completed.
                      </p>
                    </div>
                  </div>

                  {/* Add new request form */}
                  <div className="grid md:grid-cols-4 gap-3 rounded-xl border border-border bg-card/60 p-4">
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">Tracking / Mobile</label>
                      <input
                        className="w-full rounded-md bg-background border border-border px-2 py-1 text-xs"
                        placeholder="MCCF-0001 / 98xxxx"
                        value={newRequest.trackingId}
                        onChange={(e) =>
                          setNewRequest(prev => ({ ...prev, trackingId: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">Name</label>
                      <input
                        className="w-full rounded-md bg-background border border-border px-2 py-1 text-xs"
                        placeholder="Customer name"
                        value={newRequest.name}
                        onChange={(e) =>
                          setNewRequest(prev => ({ ...prev, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-muted-foreground">Service</label>
                      <input
                        className="w-full rounded-md bg-background border border-border px-2 py-1 text-xs"
                        placeholder="PAN, Aadhar, DL..."
                        value={newRequest.service}
                        onChange={(e) =>
                          setNewRequest(prev => ({ ...prev, service: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1 flex flex-col justify-end">
                      <Button
                        size="sm"
                        className="btn-primary w-full"
                        disabled={
                          !newRequest.trackingId.trim() && !newRequest.name.trim()
                        }
                        onClick={handleAddRequest}
                      >
                        Add Entry
                      </Button>
                    </div>
                    <div className="md:col-span-4 space-y-1">
                      <label className="text-xs text-muted-foreground">Notes (optional)</label>
                      <textarea
                        className="w-full rounded-md bg-background border border-border px-2 py-1 text-xs min-h-[50px]"
                        placeholder="Short note: documents missing, follow-up date, etc."
                        value={newRequest.notes}
                        onChange={(e) =>
                          setNewRequest(prev => ({ ...prev, notes: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  {/* Requests table */}
                  <div className="overflow-x-auto rounded-xl border border-border bg-card/60">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-card/80 border-b border-border">
                        <tr>
                          <th className="px-3 py-3 font-medium text-muted-foreground text-center">
                            Done
                          </th>
                          <th className="px-3 py-3 font-medium text-muted-foreground">
                            Tracking / Mobile
                          </th>
                          <th className="px-3 py-3 font-medium text-muted-foreground">Name</th>
                          <th className="px-3 py-3 font-medium text-muted-foreground">Service</th>
                          <th className="px-3 py-3 font-medium text-muted-foreground">Notes</th>
                          <th className="px-3 py-3 font-medium text-muted-foreground text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {requests.length === 0 ? (
                          <tr>
                            <td
                              colSpan={6}
                              className="px-4 py-4 text-xs text-muted-foreground text-center"
                            >
                              No entries yet. Use the form above when you receive a new work/request.
                            </td>
                          </tr>
                        ) : (
                          requests.map((req) => (
                            <tr key={req.id} className="border-t border-border/60">
                              <td className="px-3 py-3 text-center align-top">
                                <input
                                  type="checkbox"
                                  checked={req.done}
                                  onChange={() => toggleRequestDone(req.id)}
                                />
                              </td>
                              <td className="px-3 py-3 text-xs align-top">
                                <span
                                  className={
                                    req.done
                                      ? 'line-through text-muted-foreground'
                                      : 'font-medium'
                                  }
                                >
                                  {req.trackingId}
                                </span>
                              </td>
                              <td className="px-3 py-3 text-xs align-top">
                                <span
                                  className={
                                    req.done ? 'line-through text-muted-foreground' : ''
                                  }
                                >
                                  {req.name}
                                </span>
                              </td>
                              <td className="px-3 py-3 text-xs align-top">
                                <span
                                  className={
                                    req.done ? 'line-through text-muted-foreground' : ''
                                  }
                                >
                                  {req.service}
                                </span>
                              </td>
                              <td className="px-3 py-3 text-xs align-top">
                                <textarea
                                  className="w-full rounded-md bg-background border border-border px-2 py-1 text-xs min-h-[40px]"
                                  value={req.notes}
                                  onChange={(e) =>
                                    updateRequestNotes(req.id, e.target.value)
                                  }
                                  placeholder="Notes / follow-up info..."
                                />
                              </td>
                              <td className="px-3 py-3 text-xs align-top text-right">
                                <button
                                  className="text-[11px] text-red-400 hover:text-red-300"
                                  onClick={() => removeRequest(req.id)}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Services table */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">All Services</h2>
                    <p className="text-xs text-muted-foreground">
                      Tip: keep this list in sync with your offline sheet / register.
                    </p>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-border bg-card/60">
                    <table className="min-w-full text-left text-sm">
                      <thead className="bg-card/80 border-b border-border">
                        <tr>
                          <th className="px-4 py-3 font-medium text-muted-foreground">#</th>
                          <th className="px-4 py-3 font-medium text-muted-foreground">Service</th>
                          <th className="px-4 py-3 font-medium text-muted-foreground">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => (
                          <tr key={service.id} className="border-t border-border/60">
                            <td className="px-4 py-3 text-xs text-muted-foreground">{index + 1}</td>
                            <td className="px-4 py-3 text-sm font-medium">{service.title}</td>
                            <td className="px-4 py-3 text-xs text-muted-foreground">
                              {service.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Admin

