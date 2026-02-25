import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Loader2, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSubmitInquiry } from '@/hooks/useQueries';
import { ProductCategory } from '@/backend';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  productInterest: string;
  message: string;
}

// Map sublimation product display names to backend ProductCategory enum values
const productOptions: { label: string; value: ProductCategory }[] = [
  { label: 'Custom T-Shirts', value: ProductCategory.clothing },
  { label: 'Custom Mugs', value: ProductCategory.appliances },
  { label: 'Photo Frames', value: ProductCategory.furniture },
  { label: 'Cushions & Pillows', value: ProductCategory.furniture },
  { label: 'Keychains & Accessories', value: ProductCategory.electronics },
  { label: 'Other / Multiple Products', value: ProductCategory.electronics },
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email Us', value: 'hello@sublicraftstudio.com' },
  { icon: <Phone className="w-5 h-5" />, label: 'Call Us', value: '+1 (555) 123-4567' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Visit Us', value: '123 Print Lane, Creative City' },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const selectedProduct = watch('productInterest');

  const onSubmit = async (data: FormValues) => {
    const option = productOptions.find((o) => o.label === data.productInterest);
    const category = option?.value ?? ProductCategory.electronics;

    try {
      await submitInquiry.mutateAsync({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        productInterest: category,
        message: data.message,
      });
      setSubmitted(true);
      reset();
    } catch {
      // error handled by mutation state
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-brand-orange mb-3">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Ready to Create Something{' '}
            <span className="text-gradient-warm">Amazing?</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with a personalized quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-3xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-2">Let's Talk!</h3>
              <p className="font-body text-white/80 text-sm leading-relaxed mb-8">
                We're here to help you create the perfect sublimation products. Reach out through any channel.
              </p>
              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-body text-xs text-white/60 mb-0.5">{info.label}</div>
                      <div className="font-body text-sm font-medium text-white">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick note */}
            <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-5">
              <div className="font-body text-sm font-semibold text-brand-teal mb-1">⚡ Quick Turnaround</div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Most orders are processed within 2–3 business days. Rush orders available upon request.
              </p>
            </div>

            {/* Order info */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-warm-sm">
              <div className="font-body text-sm font-semibold text-foreground mb-3">📦 What to Include</div>
              <ul className="space-y-2">
                {[
                  'Product type & quantity',
                  'Design files or ideas',
                  'Preferred colors & sizes',
                  'Delivery deadline',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-card border border-border rounded-3xl p-10 flex flex-col items-center justify-center text-center min-h-[400px] shadow-warm-sm">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                  Inquiry Sent Successfully!
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
                  Thank you for reaching out! Our team will review your inquiry and get back to you within 24 hours with a personalized quote.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white font-body font-semibold rounded-full px-6"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-card border border-border rounded-3xl p-8 shadow-warm-sm space-y-5"
              >
                <div className="mb-2">
                  <h3 className="font-display font-bold text-xl text-foreground">Request a Quote</h3>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Fill in the details below and we'll prepare a custom quote for you.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="font-body text-sm font-medium text-foreground">
                    Full Name <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="font-body rounded-xl border-border focus:ring-brand-orange"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="font-body text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="font-body text-sm font-medium text-foreground">
                      Email <span className="text-brand-orange">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="font-body rounded-xl border-border"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="font-body text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="font-body text-sm font-medium text-foreground">
                      Phone Number <span className="text-brand-orange">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="font-body rounded-xl border-border"
                      {...register('phoneNumber', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[+]?[\d\s\-().]{7,20}$/,
                          message: 'Enter a valid phone number',
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <p className="font-body text-xs text-destructive">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Product Interest */}
                <div className="space-y-1.5">
                  <Label className="font-body text-sm font-medium text-foreground">
                    Product Interest <span className="text-brand-orange">*</span>
                  </Label>
                  <Select
                    onValueChange={(val) => setValue('productInterest', val, { shouldValidate: true })}
                    value={selectedProduct}
                  >
                    <SelectTrigger className="font-body rounded-xl border-border w-full">
                      <SelectValue placeholder="Select a product category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((opt) => (
                        <SelectItem key={opt.label} value={opt.label} className="font-body">
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <input
                    type="hidden"
                    {...register('productInterest', { required: 'Please select a product' })}
                  />
                  {errors.productInterest && (
                    <p className="font-body text-xs text-destructive">{errors.productInterest.message}</p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="font-body text-sm font-medium text-foreground">
                    Message <span className="text-brand-orange">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project — quantity, design ideas, colors, deadline..."
                    rows={4}
                    className="font-body rounded-xl border-border resize-none"
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                    })}
                  />
                  {errors.message && (
                    <p className="font-body text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Error state */}
                {submitInquiry.isError && (
                  <p className="font-body text-sm text-destructive bg-destructive/10 rounded-xl px-4 py-3">
                    Something went wrong. Please try again.
                  </p>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={submitInquiry.isPending}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-body font-bold py-3 rounded-full shadow-warm-sm hover:shadow-warm-md transition-all duration-200 text-base"
                >
                  {submitInquiry.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>

                <p className="font-body text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours on business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
