import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  TextField,
  MenuItem,
  Typography,
} from "@mui/material";
// import from react-hot-toast
import toast, { Toaster } from "react-hot-toast";

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    hearAboutUs: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    hearAboutUs: Yup.string().required("This field is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("hearAboutUs", values.hearAboutUs);
    formData.append("message", values.message);
    formData.append("access_key", "e6261afd-03e7-41c7-b3f0-249c6bb36b0f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
      } else {
        toast.error("Failed to send email!");
      }
      resetForm(); // Reset form after successful submission
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Form submission error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{
          mt: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name/Company Name"
              placeholder="Insert your name or company name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              required
              sx={{
                "& .MuiInputBase-input": {
                  color: "primary.main",
                },
                "& .MuiFormLabel-root": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "primary.background",
                  borderRadius: "20px 80px 20px 20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              required
              placeholder="Insert your phone number"
              sx={{
                "& .MuiInputBase-input": {
                  color: "primary.main",
                },
                "& .MuiFormLabel-root": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "primary.background",
                  borderRadius: "20px 80px 20px 20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              required
              placeholder="Insert your email"
              sx={{
                "& .MuiInputBase-input": {
                  color: "primary.main",
                },
                "& .MuiFormLabel-root": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "primary.background",
                  borderRadius: "20px 80px 20px 20px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="hearAboutUs"
              name="hearAboutUs"
              select
              label="How did you hear about us?"
              value={formik.values.hearAboutUs}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.hearAboutUs && Boolean(formik.errors.hearAboutUs)
              }
              helperText={
                formik.touched.hearAboutUs && formik.errors.hearAboutUs
              }
              required
              placeholder="Select an option"
              sx={{
                "& .MuiInputBase-input": {
                  color: "primary.main",
                },
                "& .MuiFormLabel-root": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "primary.background",
                  borderRadius: "20px 80px 20px 20px",
                },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      backgroundColor: "primary.background", // Background color of the menu
                      "& .MuiMenuItem-root": {
                        color: "primary.main", // Text color of the menu items
                      },
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "primary.background", // Background color on hover
                        color: "#fff", // Text color on hover
                      },
                    },
                  },
                },
              }}
            >
              <MenuItem value="Google">Google</MenuItem>
              <MenuItem value="Friend">Friend</MenuItem>
              <MenuItem value="Social Media">Social Media</MenuItem>
              <MenuItem value="Other">LinkedIn</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              required
              placeholder="Insert your message"
              sx={{
                "& .MuiInputBase-input": {
                  color: "primary.main",
                },
                "& .MuiFormLabel-root": {
                  color: "primary.main",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "primary.background",
                  borderRadius: "20px 80px 20px 20px",
                },
              }}
            />
          </Grid>
        </Grid>
        {/* Submit
Don’t like the form? Drop us a line via email.
Info@stelalliance.com */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Typography
            variant="normal"
            sx={{
              color: "secondary.main",
              fontSize: { sm: "12px", xs: "12px" },
              fontWeight: 400,
            }}
          >
            Don’t like the form? Drop us a line via email.
            <br />
            <a href="mailto:info@stelalliance.com">Info@stelalliance.com</a>
          </Typography>
          <Button
            type="submit"
            variant="primary"
            sx={{
              borderRadius: "10px 20px 10px 10px",
              width: "100px",
              fontSize: "16px",
              fontWeight: 400,
              height: "40px",
            }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Box>
      </Box>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
}

export default ContactForm;
