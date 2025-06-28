import { useState, useEffect } from 'react'
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

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

  const services = [
    { icon: FileText, title: "Pan Card", description: "Quick PAN card application and updates" },
    { icon: CreditCard, title: "Ration Card", description: "New ration card registration and modifications" },
    { icon: CreditCard, title: "Aadhar Card", description: "Aadhar enrollment and updates" },
    { icon: Car, title: "Driving License", description: "DL application and renewal services" },
    { icon: Calculator, title: "GST Registration", description: "Complete GST registration assistance" },
    { icon: Building, title: "Company Registration", description: "Business registration and compliance" },
    { icon: FileText, title: "Property ID", description: "Property documentation services" },
    { icon: FileText, title: "PF Form", description: "Provident fund related services" }
  ]

  const courses = [
    { icon: Monitor, title: "Basic Computer", level: "Beginner", duration: "3 months" },
    { icon: Calculator, title: "Excel & Advanced Excel", level: "Intermediate", duration: "2 months" },
    { icon: Calculator, title: "TDS", level: "Advanced", duration: "1 month" },
    { icon: Calculator, title: "ADC", level: "Advanced", duration: "2 months" },
    { icon: Calculator, title: "Tally ERP 9 with GST", level: "Professional", duration: "3 months" },
    { icon: Calculator, title: "Tally Prime", level: "Professional", duration: "2 months" },
    { icon: BookOpen, title: "All Accounting Works", level: "Expert", duration: "4 months" },
    { icon: Code, title: "Python", level: "Intermediate", duration: "4 months" },
    { icon: Code, title: "C & C++ Language", level: "Intermediate", duration: "3 months" },
    { icon: Database, title: "MySQL", level: "Advanced", duration: "2 months" },
    { icon: Globe, title: "Web Development", level: "Advanced", duration: "6 months" }
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Mahakaal Cyber Cafe</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#institute" className="hover:text-primary transition-colors">Institute</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <Button 
                className="btn-primary"
                onClick={() => {
                  const message = encodeURIComponent('I want to get in touch with you.');
                  const phone = '7550507540';
                  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                }}
              >
                Get in Touch
              </Button>
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
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#institute" className="hover:text-primary transition-colors">Institute</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                <Button 
                  className="btn-primary w-full"
                  onClick={() => {
                    const message = encodeURIComponent('I want to get in touch with you.');
                    const phone = '7550507540';
                    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                  }}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative">
        {/* Floating Elements */}
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your One-Stop Destination for
              <span className="gradient-text block mt-2">Digital Services & Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From essential online services to career-boosting professional courses, 
              we have you covered with modern facilities and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-3"
                onClick={() => {
                  const section = document.getElementById('services');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary text-lg px-8 py-3"
                onClick={() => {
                  const section = document.getElementById('institute');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Courses
              </Button>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Digital Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick and reliable online services for all your government and official documentation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="service-card bg-card/80 hover-lift">
                <CardHeader className="text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Mahakaal Institute</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering you with in-demand skills for a brighter future through professional courses
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
      <section className={`py-20 bg-card/30 section-reveal ${isVisible.testimonials ? 'revealed' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
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
              <div className="flex items-center space-x-2 mb-4">
                <Monitor className="h-6 w-6 text-primary" />
                <span className="font-bold">Mahakaal Cyber Cafe</span>
              </div>
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
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mahakaal Cyber Cafe & Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

