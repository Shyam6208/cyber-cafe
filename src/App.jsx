import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Menu, 
  X, 
  Monitor, 
  FileText, 
  CreditCard, 
  Car, 
  Building, 
  Calculator,
  BookOpen,
  Code,
  Database,
  Globe,
  Users,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock
} from 'lucide-react'
import './App.css'
import digitalServicesImg from './assets/digital-services.jpg';
import heroBgImg from './assets/hero-bg.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const [results, setResults] = useState([])
  const [isResultsLoading, setIsResultsLoading] = useState(true)
  const [resultsError, setResultsError] = useState(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [trackId, setTrackId] = useState('')
  const [requestName, setRequestName] = useState('')
  const [requestPhone, setRequestPhone] = useState('')
  const [requestService, setRequestService] = useState('')
  const [requestNotes, setRequestNotes] = useState('')
  const [requestImages, setRequestImages] = useState([])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('.section-reveal')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Show "back to top" button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fetch latest results from backend API (placeholder)
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsResultsLoading(true)
        setResultsError(null)

        const response = await fetch('/api/results')

        if (!response.ok) {
          throw new Error('Failed to load results')
        }

        const data = await response.json()

        // Expecting array of { id, title, link, date, source }
        if (Array.isArray(data)) {
          setResults(data)
        } else {
          throw new Error('Unexpected results format')
        }
      } catch (error) {
        console.error('Error loading results:', error)
        setResultsError('Currently unable to load live results.')

        // Optional: fallback example data so UI is not empty
        setResults([
          {
            id: 1,
            title: 'Example: SSC CGL 2026 Result',
            date: '02 Mar 2026',
            link: '#',
            source: 'Sample Data'
          }
        ])
      } finally {
        setIsResultsLoading(false)
      }
    }

    fetchResults()

    // Optional: refresh every 5 minutes
    const intervalId = setInterval(fetchResults, 5 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [])

  const services = [
    {
      id: 'pan-card',
      icon: FileText,
      title: 'PAN Card',
      description: 'New PAN card application and corrections through NSDL/UTI portals with full document support.',
      startingPrice: 199
    },
    {
      id: 'aadhar-services',
      icon: CreditCard,
      title: 'Aadhar Services',
      description: 'Aadhar enrollment help, address / mobile / photo update guidance and download of e-Aadhar.',
      startingPrice: 149
    },
    {
      id: 'ration-card',
      icon: CreditCard,
      title: 'Ration Card',
      description: 'New ration card registration, member addition/removal and address updates as per portal.',
      startingPrice: 249
    },
    {
      id: 'voter-id',
      icon: FileText,
      title: 'Voter ID (EPIC)',
      description: 'New voter ID registration (Form 6), corrections and address change for your constituency.',
      startingPrice: 149
    },
    {
      id: 'driving-license',
      icon: Car,
      title: 'Driving License (DL)',
      description: 'Online learning license, permanent license, renewal and slot booking via Parivahan portal.',
      startingPrice: 299
    },
    {
      id: 'passport',
      icon: Globe,
      title: 'Passport Services',
      description: 'Online passport application, appointment booking and document checklist guidance.',
      startingPrice: 399
    },
    {
      id: 'exam-form',
      icon: FileText,
      title: 'Exam / Admission Forms',
      description: 'Online form fill-up for school, college, government and competitive exams with fee payment.',
      startingPrice: 149
    },
    {
      id: 'scholarship',
      icon: BookOpen,
      title: 'Scholarship & Portal Updates',
      description: 'NSP, state scholarship forms, renewal and tracking with upload support.',
      startingPrice: 149
    },
    {
      id: 'gst-registration',
      icon: Calculator,
      title: 'GST Registration',
      description: 'New GST registration, amendments and basic GST portal guidance for business owners.',
      startingPrice: 499
    },
    {
      id: 'company-registration',
      icon: Building,
      title: 'Company / MSME Registration',
      description: 'Udyam (MSME), Shop Act and basic business registration assistance with document guidance.',
      startingPrice: 399
    },
    {
      id: 'property-id',
      icon: FileText,
      title: 'Property ID & Revenue Records',
      description: 'Online property ID search, mutation status check and basic revenue record downloads.',
      startingPrice: 199
    },
    {
      id: 'printing-scanning',
      icon: Monitor,
      title: 'Printing, Scanning & Lamination',
      description: 'High quality print, scan, photocopy, lamination and PDF creation from mobile or pen drive.',
      startingPrice: 10
    }
  ]

  const courses = [
    { icon: Monitor, title: "Basic Computer", level: "Beginner", duration: "3 months" },
    { icon: Calculator, title: "Excel & Advanced Excel", level: "Intermediate", duration: "2 months" },
    { icon: Calculator, title: "Tally Prime", level: "Professional", duration: "2 months" },
    { icon: Code, title: "Python", level: "Intermediate", duration: "4 months" },
    { icon: Globe, title: "Web Development", level: "Advanced", duration: "6 months" },
    { icon: Database, title: "MySQL", level: "Advanced", duration: "2 months" }
  ]

  const testimonials = [
    {
      name: "Priya S.",
      text: "Very helpful staff and fast internet. Got my documents printed and scanned in no time!",
      rating: 5
    },
    {
      name: "Rahul M.",
      text: "Best place for online services and learning computer courses. Highly recommended!",
      rating: 5
    },
    {
      name: "Sunita K.",
      text: "Clean environment and great teachers. My English improved a lot!",
      rating: 5
    }
  ]

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "20+", label: "Courses Offered" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Success Rate" }
  ]

  const featurePoints = [
    {
      icon: Shield,
      title: 'Secure Govt. Portals',
      description: 'All services processed through official government websites with OTP verification and safe handling of your data.'
    },
    {
      icon: Zap,
      title: 'Fast, Guided Support',
      description: 'Step‑by‑step assistance for forms, uploads, and payments so you never get stuck in the process.'
    },
    {
      icon: Clock,
      title: 'Transparent Timelines',
      description: 'Clear expected timelines and WhatsApp updates so you always know the status of your application.'
    }
  ]

  const formatFilesList = (files) => {
    if (!files || files.length === 0) return '-'
    return files.map((f) => f.name).join(', ')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              type="button"
              className="flex items-center space-x-2 group"
              onClick={() => {
                const section = document.getElementById('home')
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <Monitor className="h-8 w-8 text-primary group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold gradient-text">Mahakaal Cyber Cafe</span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
              <a href="#institute" className="text-sm hover:text-primary transition-colors">Institute</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <Link
                to="/admin"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Admin
              </Link>
              <div className="flex items-center space-x-3 ml-4">
                <Button
                  variant="outline"
                  className="btn-secondary text-xs px-3 py-2"
                  onClick={() => {
                    const section = document.getElementById('track');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Track Application
                </Button>
                <Button 
                  className="btn-primary text-xs px-4 py-2"
                  onClick={() => {
                    const section = document.getElementById('request');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Service
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-card/95 backdrop-blur-lg rounded-lg mt-2 p-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#institute" className="hover:text-primary transition-colors">Institute</a>
                <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                <Link
                  to="/admin"
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Admin
                </Link>
                <Button 
                  variant="outline"
                  className="btn-secondary w-full text-sm"
                  onClick={() => {
                    const section = document.getElementById('track');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Track Application
                </Button>
                <Button 
                  className="btn-primary w-full text-sm"
                  onClick={() => {
                    const section = document.getElementById('request');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Service
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative">
        {/* Hero Background Image */}
        <img 
          src={heroBgImg} 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0" 
          style={{ pointerEvents: 'none' }}
        />
        {/* Floating Elements */}
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              Mahakaal Cyber Cafe
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your One-Stop Destination for Digital Services & Education
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From essential online services to professional courses, we deliver secure and fast support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => {
                  const section = document.getElementById('track');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Track Application
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary text-lg px-8 py-3"
                onClick={() => {
                  const section = document.getElementById('request');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights (like "features" strip) */}
      <section className="py-10 bg-card/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {featurePoints.map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-6 flex items-start gap-4 hover-lift"
              >
                <div className="mt-1">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Results Section */}
      <section className="py-6 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Badge className="px-3 py-1 text-xs md:text-sm">Latest Govt. Results</Badge>
            </div>
            <div className="flex-1 text-sm space-y-2">
              {isResultsLoading && (
                <p className="text-muted-foreground">Loading latest results...</p>
              )}
              {!isResultsLoading && resultsError && (
                <p className="text-xs text-red-500">{resultsError}</p>
              )}
              {!isResultsLoading && results && results.length > 0 && (
                <ul className="space-y-1">
                  {results.map((item) => (
                    <li
                      key={item.id}
                      className="flex flex-wrap items-center gap-2 text-xs md:text-sm"
                    >
                      {item.date && (
                        <span className="text-muted-foreground">{item.date}</span>
                      )}
                      <span className="font-medium">{item.title}</span>
                      {item.source && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {item.source}
                        </span>
                      )}
                      {item.link && item.link !== '#' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline"
                        >
                          View
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {!isResultsLoading && (!results || results.length === 0) && !resultsError && (
                <p className="text-muted-foreground text-xs">
                  No results available right now. Please check back later.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary stat-number">
                  {stat.number}
                </div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Application Section */}
      <section id="track" className={`py-16 section-reveal ${isVisible.track ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Application</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Enter your mobile number or tracking ID to quickly follow up on your application status via WhatsApp.
              </p>
              <p className="text-sm text-muted-foreground">
                After submitting, we&apos;ll open WhatsApp with your details pre-filled so our team can respond with the latest update.
              </p>
            </div>
            <div>
              <Card className="bg-card/80">
                <CardHeader>
                  <CardTitle>Get Status Update</CardTitle>
                  <CardDescription>We usually reply within working hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Mobile number or tracking ID"
                    value={trackId}
                    onChange={(e) => setTrackId(e.target.value)}
                  />
                  <Button
                    className="btn-primary w-full"
                    disabled={!trackId.trim()}
                    onClick={() => {
                      const trimmed = trackId.trim()
                      if (!trimmed) return
                      const message = encodeURIComponent(
                        `Namaste, mujhe apni application ka status track karna hai.\n\nTracking / Mobile: ${trimmed}\n\nKripya current status batayein.`
                      )
                      const phone = '7550507540'
                      window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
                    }}
                  >
                    Track on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 section-reveal ${isVisible.about ? 'revealed' : ''}`}> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">Mahakaal Cyber Cafe</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mahakaal Cyber Cafe & Institute is dedicated to providing reliable digital services 
                and quality education. With years of experience, we help our community access 
                government services, learn new skills, and grow professionally.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Expert Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Fast Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Secure Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Quick Turnaround</span>
                </div>
              </div>
              <Button className="btn-primary">Learn More</Button>
            </div>
            <div className="relative">
              <div className="glass-effect p-8 rounded-2xl hover-lift">
                <img 
                  src={digitalServicesImg} 
                  alt="Digital Services" 
                  className="rounded-xl mb-6 shadow-lg w-full object-cover max-h-56" 
                />
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold">Friendly Staff</h3>
                    <p className="text-sm text-muted-foreground">Professional and helpful team</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold">Modern Facilities</h3>
                    <p className="text-sm text-muted-foreground">Latest technology and equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 bg-card/30 section-reveal ${isVisible.services ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reliable digital help for government, student, and business needs.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                className="btn-primary"
                onClick={() => {
                  const message = encodeURIComponent('I want to request a service. Please share details and required documents.');
                  const phone = '7550507540';
                  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                }}
              >
                Request a Service
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="service-card bg-card/80 hover-lift">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <service.icon className="h-10 w-10 text-primary" />
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-end">
                    <Button
                      className="btn-secondary"
                      variant="outline"
                      onClick={() => {
                        const message = encodeURIComponent(`I want to apply for: ${service.title}. Please tell me the process and required documents.`);
                        const phone = '7550507540';
                        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Institute Section */}
      <section id="institute" className={`py-20 section-reveal ${isVisible.institute ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Institute</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical professional courses to build skills and career confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="service-card bg-card/80 hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <course.icon className="h-8 w-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>Duration: {course.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full btn-secondary"
                    onClick={() => {
                      const message = encodeURIComponent(`I want to enroll in ${course.title}`);
                      const phone = '7550507540';
                      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                    }}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 bg-card/30 section-reveal ${isVisible.testimonials ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Families, students, and professionals trust our process every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: "100%", height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112216.53601859121!2d77.27182527712564!3d28.486570311687547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd2d3a50c215%3A0xb99673333d4b103c!2sMahakaal%20cyber%20cafe!5e0!3m2!1sen!2sin!4v1751384086522!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahakaal Cyber Cafe Location"
          ></iframe>
        </div>
      </div>

      {/* Request Service Section */}
      <section id="request" className={`py-20 bg-card/40 section-reveal ${isVisible.request ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Request a Service</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Share your details and service requirement. We&apos;ll confirm documents, fees, and timelines on WhatsApp.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card/80">
              <CardHeader>
                <CardTitle>Service Request Form</CardTitle>
                <CardDescription>Fields marked * are important so we can respond correctly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Full Name *"
                  value={requestName}
                  onChange={(e) => setRequestName(e.target.value)}
                />
                <Input
                  placeholder="WhatsApp Number *"
                  value={requestPhone}
                  onChange={(e) => setRequestPhone(e.target.value)}
                />
                <div className="space-y-2">
                  <select
                    className="w-full rounded-md bg-background border border-border px-3 py-2 text-sm"
                    value={requestService}
                    onChange={(e) => setRequestService(e.target.value)}
                  >
                    <option value="">Select Service *</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <Textarea
                  placeholder="Additional details (documents you have, preferred time, etc.)"
                  rows={4}
                  value={requestNotes}
                  onChange={(e) => setRequestNotes(e.target.value)}
                />

                <div className="space-y-2">
                  <label className="text-sm font-medium">Attach images (optional)</label>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || [])
                      setRequestImages(files)
                    }}
                  />
                  <p className="text-xs text-muted-foreground">
                    Note: Images can&apos;t be auto-attached to WhatsApp from the website. After WhatsApp opens,
                    please attach these images in the chat.
                  </p>

                  {requestImages.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-2">
                      {requestImages.map((file, idx) => (
                        <div
                          key={`${file.name}-${idx}`}
                          className="rounded-md overflow-hidden border border-border bg-card/60"
                          title={file.name}
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-16 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  className="btn-primary w-full"
                  disabled={!requestName.trim() || !requestPhone.trim() || !requestService}
                  onClick={() => {
                    if (!requestName.trim() || !requestPhone.trim() || !requestService) return
                    const message = encodeURIComponent(
                      `Namaste, mai ek nayi service request karna chahta/chahti hoon.\n\nNaam: ${requestName}\nWhatsApp: ${requestPhone}\nService: ${requestService}\n\nExtra details:\n${requestNotes || '-'}\n\nImages selected (I will attach in WhatsApp):\n${formatFilesList(requestImages)}\n\nKripya required documents, fees aur expected time batayein.`
                    )
                    const phone = '7550507540'
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
                  }}
                >
                  Submit & Open WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 section-reveal ${isVisible.contact ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Contact Us</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help. Reach out to us for any inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="https://wa.me/7550507540" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">7550507540</a>,
                  <a href="https://wa.me/9621822051" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">9621822051</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:mahakaalcybercafe@gmail.com" className="hover:text-primary transition-colors">mahakaalcybercafe@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Gali no. 02, Bharat colony, Kacha Khedi Road, [Faridabad]</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <Card className="bg-card/80">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button 
                    className="btn-primary"
                    onClick={() => {
                      const message = encodeURIComponent('I want to get in touch with you.');
                      const phone = '7550507540';
                      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                    }}
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <button
                type="button"
                className="flex items-center space-x-2 mb-4 hover:text-primary transition-colors"
                onClick={() => {
                  const section = document.getElementById('home')
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
              >
                <Monitor className="h-6 w-6 text-primary" />
                <span className="font-bold">Mahakaal Cyber Cafe</span>
              </button>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for digital services and professional education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Government Services</li>
                <li>Document Processing</li>
                <li>Online Applications</li>
                <li>Printing & Scanning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Computer Basics</li>
                <li>Programming</li>
                <li>Accounting Software</li>
                <li>Web Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="https://wa.me/7550507540" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">7550507540</a>,
                  <a href="https://wa.me/9621822051" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">9621822051</a>
                </li>
                <li>
                  <a href="mailto:mahakaalcybercafe@gmail.com" className="hover:text-primary transition-colors">mahakaalcybercafe@gmail.com</a>
                </li>
                <li>Gali no. 02, Bharat colony, Kacha Khedi Road, [Faridabad]</li>
                <li>Mon-Sat: 9AM-8PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 Mahakaal Cyber Cafe & Institute. All rights reserved.</p>
            <p className="text-xs md:text-sm">
              Designed & Developed with <span className="text-primary">Mahakaal Cyber Cafe</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Scroll to Top Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <button
          aria-label="Chat on WhatsApp"
          className="rounded-full shadow-lg btn-primary flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
          onClick={() => {
            const message = encodeURIComponent('Namaste, mujhe aapki services ke baare mein jankari chahiye.');
            const phone = '7550507540';
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
          }}
        >
          <Phone className="h-5 w-5 text-primary-foreground" />
        </button>

        {showScrollTop && (
          <button
            aria-label="Back to top"
            className="rounded-full bg-card/90 border border-border shadow-lg flex items-center justify-center w-10 h-10 text-xs text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            ↑
          </button>
        )}
      </div>
    </div>
  )
}

export default App

