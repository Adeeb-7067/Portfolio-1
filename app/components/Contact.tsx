'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  // Simple validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your service ID, template ID, and public key
      // You need to sign up at emailjs.com and create these
      const serviceId = 'service_d1i1dph';
      const templateId = 'template_go6395s';
      const publicKey = 'Ogh-Isldh0NIGWlQN';
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      
      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
            <h2 className="text-xl font-bold text-white mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 bg-opacity-20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-400">adeebkhan3463@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 bg-opacity-20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-medium">Social Media</h3>
                  <div className="flex space-x-3 mt-2">
                    <a href="https://github.com/Adeeb-7067" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">GitHub</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/adeeb-khan-a53468324/" className="text-gray-400 hover:text-white transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2 bg-black bg-opacity-30 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
            <h2 className="text-xl font-bold text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-white border-opacity-20'
                  } text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-white border-opacity-20'
                  } text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border ${
                    errors.subject ? 'border-red-500' : 'border-white border-opacity-20'
                  } text-black focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 bg-white bg-opacity-5 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-white border-opacity-20'
                  } text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-gray-400">
                    {formData.message.length} characters (min 10)
                  </span>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                } text-white font-semibold`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500 bg-opacity-10 border border-green-500 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black">Your message has been sent successfully! I'll respond as soon as possible.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500 bg-opacity-10 border border-red-500 rounded-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-black">There was an error sending your message. Please try again later.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}