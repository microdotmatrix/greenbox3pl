"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { FormEvent, useEffect, useRef, useState } from "react";

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

const ZohoContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
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

  // Helper function to encapsulate Zoho's validation logic
  const checkZohoValidation = (): boolean => {
    const form = formRef.current;
    if (!form) return false;

    // --- Zoho's original validateEmail function logic ---
    const emailFld = form.querySelectorAll<HTMLInputElement>('[ftype="email"]');
    for (let i = 0; i < emailFld.length; i++) {
      const emailVal = emailFld[i].value;
      if (emailVal.replace(/^\s+|\s+$/g, "").length !== 0) {
        const atpos = emailVal.indexOf("@");
        const dotpos = emailVal.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert("Please enter a valid email address."); // Consider using a toast/modal
          emailFld[i].focus();
          return false;
        }
      }
    }

    // --- Zoho's original checkMandatory function logic ---
    const mndFileds = ["Company", "First Name", "Last Name", "Email", "Phone"];
    const fldLangVal = ["Company", "First Name", "Last Name", "Email", "Phone"];

    for (let i = 0; i < mndFileds.length; i++) {
      const fieldObj = form[mndFileds[i]] as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement; // Type assertion for form elements

      if (fieldObj) {
        if (fieldObj.value.replace(/^\s+|\s+$/g, "").length === 0) {
          if (fieldObj.type === "file") {
            alert("Please select a file to upload."); // Consider using a toast/modal
            fieldObj.focus();
            return false;
          }
          alert(`${fldLangVal[i]} cannot be empty.`); // Consider using a toast/modal
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName === "SELECT") {
          const selectField = fieldObj as HTMLSelectElement;
          if (
            selectField.options[selectField.selectedIndex].value === "-None-"
          ) {
            alert(`${fldLangVal[i]} cannot be none.`); // Consider using a toast/modal
            selectField.focus();
            return false;
          }
        } else if (fieldObj.type === "checkbox") {
          const checkboxField = fieldObj as HTMLInputElement; // Ensure it's treated as HTMLInputElement
          if (checkboxField.checked === false) {
            alert(`Please accept ${fldLangVal[i]}`); // Consider using a toast/modal
            checkboxField.focus();
            return false;
          }
        }
      }
    }

    // Add smarturl parameter if present
    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has("service") && urlparams.get("service") === "smarturl") {
      const smarturlfield = document.createElement("input");
      smarturlfield.setAttribute("type", "hidden");
      smarturlfield.setAttribute("value", urlparams.get("service") || ""); // Provide default empty string
      smarturlfield.setAttribute("name", "service");
      form.appendChild(smarturlfield);
    }

    // Disable submit button (this will happen naturally on form submission, but Zoho had it)
    // (
    //   form.querySelector('button[type="submit"]') as HTMLButtonElement
    // )?.setAttribute("disabled", "true");

    return true; // Validation passed
  };

  useEffect(() => {
    // Load Zoho's analytics script
    const script = document.createElement("script");
    script.id = "wf_anal";
    script.src =
      "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=fcf95f3c89e3567271e75ff5a696930a7b29187d35a69134438c8c13ea483f333d429515c8009d03664ad0dbac2bd88dgid366aa0c003d7ad04023a046fa3220dadc29a46f9ab9fae40ec6280eb83f713dagid424d2a1ef55964af098a5c6da6b71f81ca94b7f4f9a750b0d6382f916d497a81gid4e673c4275801119e3cd79c992cc6867be5c0faa90b176bf8a6b86cb4a35a37b&tw=11c5def64013080f1ae044632183746cdab7036bc9d1c4c5aabb2c73937bceb5";
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove analytics script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Handle form submission using React's onSubmit
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default browser submission initially

    setIsSubmitting(true);
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
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        email: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-black p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <form
        id="webform5279830000170702029"
        name="WebToLeads5279830000170702029"
        method="POST"
        onSubmit={handleSubmit} // Use React's onSubmit handler
        acceptCharset="UTF-8"
        ref={formRef}
      >
        {/* Hidden inputs from Zoho - keep these as they are vital for submission */}
        <input
          type="hidden"
          name="xnQsjsdp"
          value="f83f38eb0c4db7a144a78e13d057b8dbeb52261b672f9ed4b77ef4fcfe1908c7"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="hidden"
          name="xmIwtLD"
          value="8607b9e561c549fb5037f4185d54d9a0bfda976ddfff0688b1d1972bc8af41d730440f1f4ef4468d1295b3fc13dc3a97"
        />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />
        <input type="hidden" name="aG9uZXlwb3Q" value="" />

        {/* Form Fields using Shadcn components and Tailwind classes */}

        <div className="mb-4">
          <Label htmlFor="Company" className="text-sm font-medium leading-none">
            Company <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="Company"
            name="Company"
            maxLength={200} // Number type for maxLength
            aria-required="true"
            aria-label="Company"
            className="mt-1"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="First_Name"
            className="text-sm font-medium leading-none"
          >
            First Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="First_Name"
            name="First Name"
            maxLength={40}
            aria-required="true"
            aria-label="First Name"
            className="mt-1"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <Label
            htmlFor="Last_Name"
            className="text-sm font-medium leading-none"
          >
            Last Name <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="Last_Name"
            name="Last Name"
            maxLength={80}
            aria-required="true"
            aria-label="Last Name"
            className="mt-1"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="Phone" className="text-sm font-medium leading-none">
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            type="tel" // Changed to type="tel" for phone numbers
            id="Phone"
            name="Phone"
            maxLength={30}
            aria-required="true"
            aria-label="Phone"
            className="mt-1"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="Email" className="text-sm font-medium leading-none">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email" // Changed to type="email" for better native validation
            id="Email"
            name="Email"
            maxLength={100}
            aria-required="true"
            aria-label="Email"
            className="mt-1"
            value={formData.email}
            onChange={handleInputChange}
            ftype="email" // Keep Zoho's custom attribute for its internal validation
          />
        </div>

        <div className="mb-6">
          <Label
            htmlFor="LEADCF36"
            className="text-sm font-medium leading-none"
          >
            Comments
          </Label>
          <Textarea
            id="LEADCF36"
            name="LEADCF36"
            aria-required="false"
            aria-label="Comments"
            className="mt-1 min-h-[80px]" // Added min-height for textarea
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="reset" variant="outline">
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default ZohoContactForm;
