"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/hooks/use-toast";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
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
      title: t("form.successToastTitle"),
      description: t("form.successToastDescription"),
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = t.raw("contactInfo") as {
    icon: any;
    title: string;
    content: string;
  }[];

  // Assign icons for contact info dynamically
  const contactInfoWithIcons = [
    { ...contactInfo[0], icon: MapPin },
    { ...contactInfo[1], icon: Phone },
    { ...contactInfo[2], icon: Mail },
    { ...contactInfo[3], icon: Clock },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            {t("pageTitle")}
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground px-4">
            {t("pageSubtitle")}
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-2">
          <Card className="animate-fade-in shadow-lg">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-primary">
                {t("form.sectionTitle")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("form.name")}
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    placeholder={t("form.namePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("form.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange("email")}
                    placeholder={t("form.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("form.phone")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange("phone")}
                    placeholder={t("form.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {t("form.message")}
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange("message")}
                    placeholder={t("form.messagePlaceholder")}
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
                  {t("form.submitButton")}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <Card className="shadow-lg bg-linear-to-br from-primary to-primary/90 text-primary-foreground">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">
                  {t("contactSectionTitle")}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfoWithIcons.map((info) => (
                    <div
                      key={info.title}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="flex h-12 w-12 sm:h-15 sm:w-15 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                        <info.icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="mb-1 text-sm sm:text-base font-semibold">
                          {info.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-primary-foreground/80 wrap-break-word">
                          {info.title === t("contactInfo.1.title") ? (
                            <>
                              {info.content.split(",").map((num, idx) => (
                                <span key={num.trim()}>
                                  <a
                                    href={`tel:${num.trim()}`}
                                    className="underline transition-colors"
                                  >
                                    {num.trim()}
                                  </a>
                                  {idx < info.content.split(",").length - 1 && (
                                    <span className="mx-2">|</span>
                                  )}
                                </span>
                              ))}
                            </>
                          ) : info.title === t("contactInfo.2.title") ? (
                            <a
                              href={`mailto:${info.content}`}
                              className="underline transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            info.content
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <div className="relative h-48 sm:h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.363832760679!2d74.8754234750749!3d12.884310687423136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzAzLjUiTiA3NMKwNTInNDAuOCJF!5e0!3m2!1sen!2sin!4v1761201916439!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pragathi Co-operative Society, Kulshekar Location"
                />
              </div>
            </Card>

            <Card className="border-accent/30 bg-accent/10">
              <CardContent className="p-4 sm:p-6">
                <h3 className="mb-3 text-sm sm:text-base font-semibold text-primary">
                  {t("visitSectionTitle")}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {t("visitDescription")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
