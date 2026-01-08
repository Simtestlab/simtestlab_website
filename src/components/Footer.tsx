import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useViewportSection, useFitToViewport } from '@/hooks/useViewportSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, CheckCircle, AlertCircle, Send, Mail, Phone, MapPin } from 'lucide-react';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string()
    .optional()
    .refine((val) => {
      if (!val || val.trim() === '') return true;
      try {
        return isValidPhoneNumber(val);
      } catch {
        return false;
      }
    }, 'Please enter a valid phone number'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Footer = () => {
  const [status, setStatus] = useState<{ type: 'idle' | 'sending' | 'success' | 'error'; msg?: string }>({ type: 'idle' });

  // Use package-based viewport management
  const { ref: viewportRef } = useViewportSection({
    threshold: 0.2,
    rootMargin: '0px 0px 0px 0px'
  });
  const { ref: containerRef, adjustedHeight } = useFitToViewport(600);

  // Combine refs
  const setCombinedRefs = (element: HTMLElement | null) => {
    viewportRef(element);
    containerRef(element);
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setStatus({ type: 'sending' });

    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({ type: 'success', msg: 'Message sent — we will contact you shortly.' });
        form.reset();
      } else {
        // Provide a clearer message for common development misconfigurations
        if (res.status === 404) {
          setStatus({ type: 'error', msg: 'Function not found (404). Make sure you opened the app via the Netlify dev URL printed in the terminal (not Vite). Restart `netlify dev` and open that URL.' });
        } else {
          const errorData = await res.json().catch(() => ({}));
          setStatus({ type: 'error', msg: errorData?.error || `Error sending message (status ${res.status})` });
        }
      }
    } catch (err) {
      // Network error often means Netlify dev isn't reachable from the origin
      console.error('Contact form network error:', err);
      setStatus({ type: 'error', msg: 'Error sending Mail.' });
    }
  };

  return (
    <footer 
      ref={setCombinedRefs}
      className="bg-background scroll-mt-12 md:scroll-mt-17 flex flex-col justify-center" 
      id="contact"
      style={{ minHeight: adjustedHeight }}
    >
      {/* CTA Section */}
      <motion.section 
        className="py-6 md:py-8 px-4 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's Build the Future of Energy. Together.
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you're developing a new product, scaling your energy infrastructure, or building a more sustainable supply chain, our team is ready to help.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.div 
        className="bg-background/60 border border-border rounded-lg shadow-lg -mt-4 md:-mt-6 mb-3 md:mb-4 overflow-hidden max-w-5xl mx-auto px-4 md:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <Card className="bg-background w-full border-0 shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Get In Touch
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Send us a message and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your full name" 
                              {...field} 
                              className="transition-all duration-200 focus:scale-[1.02]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              type="email" 
                              {...field} 
                              className="transition-all duration-200 focus:scale-[1.02]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+91 9123 456 789" 
                              type="tel" 
                              {...field} 
                              className="transition-all duration-200 focus:scale-[1.02]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="How can we help you?" 
                              {...field} 
                              className="transition-all duration-200 focus:scale-[1.02]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project, requirements, or any questions you have..."
                            rows={4}
                            {...field} 
                            className="transition-all duration-200 focus:scale-[1.02] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <AnimatePresence mode="wait">
                    {status.type === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert className="border-green-200 bg-green-50 text-green-800">
                          <CheckCircle className="h-4 w-4" />
                          <AlertDescription>{status.msg}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                    {status.type === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{status.msg}</AlertDescription>
                        </Alert>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    disabled={status.type === 'sending' || status.type === 'success'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-md transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:hover:shadow-none"
                  >
                    {status.type === 'sending' ? (
                      <motion.div 
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </motion.div>
                    ) : status.type === 'success' ? (
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        Message Sent
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Branch Information */}
      <motion.div 
        className="bg-foreground text-background py-6 md:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-items-center">
            {/* Sweden Branch */}
            <motion.div 
              className="flex flex-col items-start text-left max-w-sm w-full p-4 rounded-lg bg-background/5 hover:bg-background/10 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <MapPin className="h-5 w-5 text-white" />
                <h4 className="text-lg font-semibold text-background">Main Branch</h4>
              </div>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background/90">
                <p><strong>Simtestlab Sweden AB</strong></p>
                <p>Org nr: 559386-6055</p>
                <p>VAT Number: SE559386605501</p>
                <p>SWEDEN (HQ) - Sprintergången 7</p>
                <div className="flex items-center gap-2 pt-2">
                  <Mail className="h-4 w-4" />
                  <p>support@simtestlab.se</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>+46 76 976 82 63</p>
                </div>
                <p className="pt-2 text-xs text-background/70">Copyright 2025. All Rights Reserved.</p>
              </div>
            </motion.div>
            
            {/* India Branch */}
            <motion.div 
              className="flex flex-col items-start text-left max-w-sm w-full p-4 rounded-lg bg-background/5 hover:bg-background/10 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <MapPin className="h-5 w-5 text-white" />
                <h4 className="text-lg font-semibold text-background">India Branch</h4>
              </div>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background/90">
                <p><strong>iGraph Technologies Pvt Ltd</strong></p>
                <p>Masagoundenchettipálayam Coimbatore</p>
                <p>Tamil Nadu, India - 641 107</p>
                <div className="flex items-center gap-2 pt-2">
                  <Mail className="h-4 w-4" />
                  <p>support@simtestlab.se</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>+91 95976 61235</p>
                </div>
                <p>GSTIN: 33AAHCI0407BF1ZQ</p>
              </div>
            </motion.div>

            {/* Battery Lab Facility */}
            <motion.div 
              className="flex flex-col items-start text-left max-w-sm w-full p-4 rounded-lg bg-background/5 hover:bg-background/10 transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <MapPin className="h-5 w-5 text-white" />
                <h4 className="text-lg font-semibold text-background">Battery Lab Facility</h4>
              </div>
              <div className="space-y-1.5 md:space-y-2 text-sm text-background/90">
                <p><strong>iGraph Technologies Pvt Ltd</strong></p>
                <p>Kolapalli, Cherangode, The Nilgiris</p>
                <p>Tamil Nadu, India - 643 253</p>
                <div className="flex items-center gap-2 pt-2">
                  <Mail className="h-4 w-4" />
                  <p>support@simtestlab.se</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <p>+91 95976 61235</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;