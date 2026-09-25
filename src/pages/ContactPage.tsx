import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPANY } from '../config/company';

interface FormData {
  name: string;
  company: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  currentStage: string;
  description: string;
  existingTech: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  projectType: '',
  budget: '',
  timeline: '',
  currentStage: '',
  description: '',
  existingTech: '',
  additionalInfo: '',
};

const projectTypes = [
  'New SaaS',
  'Web Application',
  'Mobile Application',
  'AI Product',
  'AI Automation',
  'API/Backend',
  'Cloud/DevOps',
  'Legacy Modernization',
  'Other',
];

const budgetRanges = [
  '<$5k',
  '$5k–$15k',
  '$15k–$30k',
  '$30k–$75k',
  '$75k+',
];

const timelineOptions = [
  'ASAP',
  '1–2 months',
  '2–4 months',
  '4–6 months',
  '6+ months',
  'Not sure yet',
];

const stageOptions = [
  'Just an idea',
  'Requirements defined',
  'Design ready',
  'Existing codebase',
  'Looking to rebuild',
  'Need to scale',
];

interface FieldErrors {
  [key: string]: string;
}

/**
 * Abstracted form submission handler.
 * Now configured to use Web3Forms for submission.
 */
async function submitProjectInquiry(data: FormData): Promise<{ success: boolean }> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "ae4f1e30-253a-413e-9e9c-df2fe26d7d61",
        ...data,
      }),
    });

    const result = await response.json();
    if (result.success) {
      return { success: true };
    } else {
      throw new Error(result.message || "Failed to submit form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
}

function validateForm(data: FormData): FieldErrors {
  const errors: FieldErrors = {};

  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!data.projectType) errors.projectType = 'Please select a project type';
  if (!data.description.trim()) errors.description = 'Please describe what you\'re building';

  return errors;
}

const inputClasses =
  'w-full px-4 py-3 bg-bg-card border border-border-primary rounded-lg text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors';

const selectClasses =
  'w-full px-4 py-3 bg-bg-card border border-border-primary rounded-lg text-sm text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors appearance-none cursor-pointer';

const labelClasses = 'block text-sm font-medium text-text-secondary mb-2';

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitProjectInquiry(formData);
      setIsSubmitted(true);
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO title="Thank You" canonical="/contact" />
        <section className="pt-32 pb-section md:pt-40 min-h-screen flex items-center">
          <div className="container-main text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-accent-green/10 border border-accent-green/20 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-accent-green" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                We've received your inquiry.
              </h1>
              <p className="text-text-secondary leading-relaxed">
                Thank you for reaching out. We'll review your project details and get back to you
                within 1–2 business days with our initial thoughts.
              </p>
            </motion.div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact"
        description={`Tell us about your project. ${COMPANY.name} will help turn your idea into a practical engineering plan.`}
        canonical="/contact"
      />

      <section className="pt-32 pb-section-sm md:pt-40 md:pb-section">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase text-accent-blue bg-accent-blue/10 border border-accent-blue/20 rounded-full">
                  Start a Project
                </span>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-text-primary mb-5">
                  Tell us what you're building.
                </h1>
                <p className="text-text-secondary leading-relaxed mb-8">
                  Share your project details and we'll respond with our initial thoughts,
                  a rough architecture outline, and how we'd approach the work.
                </p>

                <div className="space-y-4 text-sm text-text-tertiary">
                  <div>
                    <p className="font-medium text-text-secondary mb-1">Email</p>
                    <a href={`mailto:${COMPANY.projectEmail}`} className="hover:text-accent-blue transition-colors">
                      {COMPANY.projectEmail}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-text-secondary mb-1">Response time</p>
                    <p>1–2 business days</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className={labelClasses}>Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`${inputClasses} ${errors.name ? 'border-red-500/50' : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClasses}>Company</label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className={inputClasses}
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={labelClasses}>Work email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`${inputClasses} ${errors.email ? 'border-red-500/50' : ''}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
                </div>

                {/* Project Type & Budget */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-type" className={labelClasses}>Project type *</label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => handleChange('projectType', e.target.value)}
                      className={`${selectClasses} ${errors.projectType ? 'border-red-500/50' : ''} ${!formData.projectType ? 'text-text-muted' : ''}`}
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.projectType && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.projectType}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-budget" className={labelClasses}>Estimated budget</label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className={`${selectClasses} ${!formData.budget ? 'text-text-muted' : ''}`}
                    >
                      <option value="">Select range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timeline & Stage */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-timeline" className={labelClasses}>Timeline</label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className={`${selectClasses} ${!formData.timeline ? 'text-text-muted' : ''}`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-stage" className={labelClasses}>Current stage</label>
                    <select
                      id="contact-stage"
                      value={formData.currentStage}
                      onChange={(e) => handleChange('currentStage', e.target.value)}
                      className={`${selectClasses} ${!formData.currentStage ? 'text-text-muted' : ''}`}
                    >
                      <option value="">Select stage</option>
                      {stageOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="contact-description" className={labelClasses}>What are you trying to build? *</label>
                  <textarea
                    id="contact-description"
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    className={`${inputClasses} min-h-[120px] resize-y ${errors.description ? 'border-red-500/50' : ''}`}
                    placeholder="Describe the product, the problem it solves, and what you need help with..."
                  />
                  {errors.description && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={12} />{errors.description}</p>}
                </div>

                {/* Existing Tech */}
                <div>
                  <label htmlFor="contact-tech" className={labelClasses}>Existing technology / system</label>
                  <input
                    id="contact-tech"
                    type="text"
                    value={formData.existingTech}
                    onChange={(e) => handleChange('existingTech', e.target.value)}
                    className={inputClasses}
                    placeholder="e.g. React, Node.js, PostgreSQL, AWS..."
                  />
                </div>

                {/* Additional */}
                <div>
                  <label htmlFor="contact-additional" className={labelClasses}>Additional information</label>
                  <textarea
                    id="contact-additional"
                    value={formData.additionalInfo}
                    onChange={(e) => handleChange('additionalInfo', e.target.value)}
                    className={`${inputClasses} min-h-[80px] resize-y`}
                    placeholder="Anything else we should know..."
                  />
                </div>

                {/* Submit */}
                {errors.submit && (
                  <p className="text-sm text-red-400 flex items-center gap-1.5">
                    <AlertCircle size={14} />{errors.submit}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent-blue text-white rounded-lg font-medium text-sm hover:bg-accent-blue/90 transition-all shadow-lg shadow-accent-blue/20 disabled:opacity-50 disabled:cursor-not-allowed focus-ring cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Project Inquiry
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
