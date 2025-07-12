"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface FormData {
  company: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comments: string;
}

interface FormErrors {
  company?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Add URL params handling for service parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("service") && urlParams.get("service") === "smarturl") {
      // Handle smarturl service parameter if needed
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.company.trim()) {
      newErrors.company = "Company cannot be empty.";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name cannot be empty.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone cannot be empty.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Create form data for Zoho submission
      const submitFormData = new FormData();

      // Add Zoho required fields
      submitFormData.append(
        "xnQsjsdp",
        "f83f38eb0c4db7a144a78e13d057b8dbeb52261b672f9ed4b77ef4fcfe1908c7"
      );
      submitFormData.append(
        "xmIwtLD",
        "8607b9e561c549fb5037f4185d54d9a0bfda976ddfff0688b1d1972bc8af41d730440f1f4ef4468d1295b3fc13dc3a97"
      );
      submitFormData.append("actionType", "TGVhZHM=");
      submitFormData.append("returnURL", "null");
      submitFormData.append("aG9uZXlwb3Q", "");

      // Add form data
      submitFormData.append("Company", formData.company);
      submitFormData.append("First Name", formData.firstName);
      submitFormData.append("Last Name", formData.lastName);
      submitFormData.append("Phone", formData.phone);
      submitFormData.append("Email", formData.email);
      submitFormData.append("LEADCF36", formData.comments);

      // Add service parameter if present in URL
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has("service") && urlParams.get("service") === "smarturl") {
        submitFormData.append("service", "smarturl");
      }

      console.log("submitFormData", submitFormData);

      // Submit to Zoho
      await fetch("https://crm.zoho.com/crm/WebToLeadForm", {
        method: "POST",
        body: submitFormData,
        mode: "no-cors", // Required for cross-origin Zoho submission
      });

      // Since we're using no-cors, we can't check the response status
      // Assume success and show confirmation
      setIsSubmitted(true);
      setFormData({
        company: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        comments: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        email: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      company: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      comments: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        className="zcwf_lblLeft crmWebToEntityForm"
        style={{ backgroundColor: "white", color: "black", maxWidth: "600px" }}
      >
        <div
          className="success-message"
          style={{ padding: "20px", textAlign: "center" }}
        >
          <h3 style={{ color: "green", marginBottom: "10px" }}>Thank you!</h3>
          <p>
            Your message has been submitted successfully. We'll get back to you
            soon.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="zcwf_button"
            style={{ marginTop: "15px" }}
          >
            Submit Another Message
          </button>
        </div>
      </div>
    );
  }
  return (
    <div id="crmWebToEntityForm">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        acceptCharset="UTF-8"
        className="max-w-xl mx-auto py-8 my-4"
      >
        <div className="zcwf_row mb-4">
          <Label htmlFor="company">
            Company
            <span style={{ color: "red" }}>*</span>
          </Label>
          <div className="zcwf_col_fld">
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              aria-required="true"
              aria-label="Company"
              maxLength={200}
              style={{
                borderColor: errors.company ? "red" : undefined,
                width: "100%",
              }}
            />
            {errors.company && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "11px", marginTop: "2px" }}
              >
                {errors.company}
              </div>
            )}
          </div>
        </div>

        <div className="zcwf_row mb-4">
          <Label htmlFor="firstName">
            First Name
            <span style={{ color: "red" }}>*</span>
          </Label>
          <div className="zcwf_col_fld">
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              aria-required="true"
              aria-label="First Name"
              maxLength={40}
              style={{
                borderColor: errors.firstName ? "red" : undefined,
                width: "100%",
              }}
            />
            {errors.firstName && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "11px", marginTop: "2px" }}
              >
                {errors.firstName}
              </div>
            )}
          </div>
        </div>

        <div className="zcwf_row">
          <Label htmlFor="lastName">
            Last Name
            <span style={{ color: "red" }}>*</span>
          </Label>
          <div className="zcwf_col_fld">
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              aria-required="true"
              aria-label="Last Name"
              maxLength={80}
              style={{
                borderColor: errors.lastName ? "red" : undefined,
                width: "100%",
              }}
            />
            {errors.lastName && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "11px", marginTop: "2px" }}
              >
                {errors.lastName}
              </div>
            )}
          </div>
        </div>

        <div className="zcwf_row">
          <Label htmlFor="phone">
            Phone
            <span style={{ color: "red" }}>*</span>
          </Label>
          <div className="zcwf_col_fld">
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              aria-required="true"
              aria-label="Phone"
              maxLength={30}
              style={{
                borderColor: errors.phone ? "red" : undefined,
                width: "100%",
              }}
            />
            {errors.phone && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "11px", marginTop: "2px" }}
              >
                {errors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="zcwf_row">
          <Label htmlFor="email">
            Email
            <span style={{ color: "red" }}>*</span>
          </Label>
          <div className="zcwf_col_fld">
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              aria-required="true"
              aria-label="Email"
              maxLength={100}
              style={{
                borderColor: errors.email ? "red" : undefined,
                width: "100%",
              }}
            />
            {errors.email && (
              <div
                className="error-message"
                style={{ color: "red", fontSize: "11px", marginTop: "2px" }}
              >
                {errors.email}
              </div>
            )}
          </div>
        </div>

        <div className="zcwf_row">
          <Label htmlFor="comments">Comments</Label>
          <div className="zcwf_col_fld">
            <Textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              aria-label="Comments"
              style={{
                fontFamily: "Arial, sans-serif",
                width: "100%",
                minHeight: "80px",
              }}
            />
          </div>
        </div>

        <div className="zcwf_row">
          <div className="flex flex-row gap-2 items-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              aria-label="Submit"
              title="Submit"
              variant="default"
              size="default"
              style={{
                opacity: isSubmitting ? 0.6 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              aria-label="Reset"
              title="Reset"
              variant="outline"
              size="default"
            >
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ContactForm), { ssr: false });
