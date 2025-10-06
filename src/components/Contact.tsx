import { useState } from 'react';
import { Mail, MapPin, Send, Github,Linkedin } from 'lucide-react'; // Original import

// 1. Import the Telegram icon (using the 'Send' icon from lucide-react as a common convention for Telegram)
// Since 'Send' is already imported, we'll reuse it, but a specific Telegram icon might be better if available in lucide-react or another library.
// If lucide-react had a 'Telegram' icon, you'd add it here:
// import { ... , Telegram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate an API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real application, you'd perform the API call here and set success/error based on the response.
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              I'm currently available for freelance work and full-time opportunities. Let's build something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="mailto:developer@example.com"
                    className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Email</p>
                      <p className="text-white font-medium">kenaabebee@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">Location</p>
                      <p className="text-white font-medium">Ethiopa Addis,Ababaa</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800">
                  <p className="text-slate-400 text-sm mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/kenaabebe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>                  

                    {/* 2. Add Telegram Link (reusing Send icon for Telegram) */}
                    <a
                      href="https://t.me/therealpablos" // Replace with your actual Telegram link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label="Telegram"
                    >
                      <Send className="w-5 h-5" /> 
                    </a>
                      <a
                      href="https://www.linkedin.com/in/kena-abebe11" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label="linkedin"
                    >
                      <Linkedin className="w-5 h-5" /> 
                    </a>



                    <a
                      href="mailto:kenaababee@gmail.com"
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                <p className="text-blue-400 font-medium mb-2">Current Status</p>
                <p className="text-white text-lg">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for new projects
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400">Oops! Something went wrong. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}