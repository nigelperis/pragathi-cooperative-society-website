'use client';

import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange =
    (field: "name" | "email" | "phone" | "message") =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message Sent!",
      description:
        "We will get back to you soon. Thank you for contacting Pragathi Co-operative.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office Address",
      content: "Kulshekar, Mangalore - 575016, Karnataka, India",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 824 XXXXXXX",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@pragathicoop.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Saturday: 9:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-5xl font-bold text-primary">Get in Touch</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            We are here to help. Reach out to us for any inquiries or support.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <Card className="animate-fade-in shadow-lg">
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold text-primary">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 cursor-pointer"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <Card className="shadow-lg bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{info.title}</h3>
                        <p className="text-primary-foreground/80">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="flex h-64 items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <p className="font-medium text-muted-foreground">
                    Google Map Location
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Click to view our location
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border-accent/30 bg-accent/10">
              <CardContent className="p-6">
                <h3 className="mb-3 font-semibold text-primary">Visit Us</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Walk into any of our seven branches across Mangalore. Our
                  friendly staff is ready to assist you with all your banking
                  needs. No appointment necessary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
