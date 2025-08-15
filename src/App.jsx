// CLEANUP: Removed unused imports and files (Contact.jsx, Contact.css, SplitText.jsx)
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './pages/Resume'
import CPProfiles from './pages/CPProfiles'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'
import TextType from './components/TextType'
import TechnicalStack from './components/TechnicalStack'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onFinish={handleLoadingFinish} />;
  }
  
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cp" element={<CPProfiles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

function HomePage() {
  // EmailJS Configuration
  // IMPORTANT: Replace these with your actual EmailJS credentials from emailjs.com
  // 1. Go to https://www.emailjs.com/ and create an account
  // 2. Create an Email Service (Gmail, Outlook, etc.)
  // 3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}
  // 4. Replace the values below with your actual credentials:
  const EMAILJS_SERVICE_ID = 'service_5oxd2ik' // Replace with your actual Service ID
  const EMAILJS_TEMPLATE_ID = 'template_sg0rm4f' // Replace with your actual Template ID
  const EMAILJS_PUBLIC_KEY = '00iGvwPMgWA0heiBl' // Replace with your actual Public Key

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    // Check if EmailJS credentials are set up
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setSubmitStatus('error')
      setIsSubmitting(false)
      alert('Please set up your EmailJS credentials first! Check the console for instructions.')
      console.log('EmailJS Setup Required:')
      console.log('1. Go to https://www.emailjs.com/ and create an account')
      console.log('2. Create an Email Service (Gmail)')
      console.log('3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}')
      console.log('4. Replace the placeholder values in App.jsx with your actual credentials')
      return
    }
    
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">ADITYA TIPPANNA</h1>
            <TextType 
              text={["Welcome to Aadi's Codeverse!", "Debug your boredom — run the script of creativity!"]}
              typingSpeed={75}
              pauseDuration={1500}
            />
            <button 
              className="cta-button" 
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I'm a passionate developer who loves creating beautiful and functional digital experiences. With expertise in modern web technologies, I bring ideas to life through code and design.</p>
        </div>
      </section>

      {/* Technical Stack Section */}
      <TechnicalStack />

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Description of your amazing project</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Description of your amazing project</p>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Description of your amazing project</p>
            </div>
            <div className="project-card">
              <h3>Project 4</h3>
              <p>Description of your amazing project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Ready to work together? Get in touch!</p>
          <div className="contact-links">
            <a href="mailto:adityatippanna1708@gmail.com" className="contact-link">Email</a>
            <a href="https://www.linkedin.com/in/aditya-tippanna-1bbb60328/" className="contact-link">LinkedIn</a>
            <a href="https://github.com/bixu1708" className="contact-link">GitHub</a>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="contact-form-card">
              <h3 className="form-title">Leave a Message</h3>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'error-input' : ''}`}
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'error-input' : ''}`}
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-textarea ${errors.message ? 'error-input' : ''}`}
                    placeholder="Tell me about your project or question..."
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message}</div>}
                </div>

                <button 
                  type="submit" 
                  className={`send-btn ${isSubmitting ? 'sending' : ''}`}
                  disabled={isSubmitting}
                >
                  <svg className="send-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  <span className="btn-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="status-message success">
                    ✅ Your message has been sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="status-message error">
                    ❌ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  )
}

export default App
