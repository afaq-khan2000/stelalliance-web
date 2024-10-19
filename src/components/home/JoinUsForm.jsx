import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { fileDb, db } from "../../firebase"; // Assuming Firebase setup exists
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";

function JoinUsForm() {
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); // Ref for file input

  const initialValues = {
    file: null,
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "",
  };

  const validationSchema = Yup.object({
    file: Yup.mixed()
      .required("File is required")
      .test(
        "fileSize",
        "File size exceeds 1 MB",
        (value) => value && value.size <= 1024 * 1024
      )
      .test(
        "fileType",
        "Invalid file type. Only PDF and DOCX files are allowed",
        (value) =>
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
    interest: Yup.string().required("This field is required"),
  });

  const uploadFile = async (file) => {
    try {
      const fileRef = ref(fileDb, `files/${v4()}-${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      return downloadURL;
    } catch (error) {
      throw new Error(`Error uploading file: ${error.message}`);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!values.file) {
        toast.error("Please select a file");
        return;
      }

      try {
        setLoading(true);
        const fileUrl = await uploadFile(values.file);
        // delete values.file; // Remove file from form data

        const docData = {
          name: values.name,
          phone: values.phone,
          email: values.email,
          message: values.message,
          interest: values.interest,
          fileUrl: {
            url: fileUrl,
            fileName: values.file.name,
          },
          timestamp: new Date(),
        };

        await addDoc(collection(db, "UserData"), docData);
        toast.success("Thank you for submitting!");

        // Reset form
        resetForm();
        setLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } catch (error) {
        toast.error(`Error: ${error.message}`);
        setLoading(false);
      }
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5" gutterBottom>
        Join Us
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
              label="Phone Number"
              placeholder="Insert your phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
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
              id="email"
              name="email"
              label="Email"
              placeholder="Insert your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              id="interest"
              name="interest"
              select
              label="Your Area of Interest"
              value={formik.values.interest}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.interest && Boolean(formik.errors.interest)}
              helperText={formik.touched.interest && formik.errors.interest}
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
              <MenuItem value="Artificial intelligence">
                {" "}
                Artificial intelligence{" "}
              </MenuItem>
              <MenuItem value="Web Development"> Web Development </MenuItem>
              <MenuItem value="Custom Software Development">
                {" "}
                Custom Software Development{" "}
              </MenuItem>
              <MenuItem value="UI/UX Designer"> UI/UX Designers </MenuItem>
              <MenuItem value="Software as a Service Developer">
                {" "}
                Software as a Service Developer{" "}
              </MenuItem>
              <MenuItem value="Project Manager"> Project Manager </MenuItem>
              <MenuItem value="Other"> Other </MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              placeholder="Insert your message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              required
              multiline
              rows={4}
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

          <Grid item xs={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* add a button as label to input file */}
              <input
                hidden
                type="file"
                id="file"
                name="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required
                onChange={(event) => {
                  formik.setFieldValue("file", event.currentTarget.files[0]);
                }}
                ref={fileInputRef}
                sx={{ display: "none" }}
              />
              <label htmlFor="file">
                <Button
                  component="span"
                  variant="outlined"
                  sx={{
                    borderRadius: "20px 80px 20px 20px",
                    backgroundColor: "primary.background",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "primary.background",
                    },
                  }}
                >
                  Upload Resume
                </Button>
              </label>
              {
                // Display file name if selected
                formik.values.file && (
                  <Typography
                    variant="normal"
                    sx={{
                      color: "primary.main",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {formik.values.file.name}
                  </Typography>
                )
              }
              {
                // Display error message if file is not selected
                formik.touched.file && formik.errors.file && (
                  <Typography
                    variant="normal"
                    sx={{
                      color: "error.main",
                      fontSize: "12px",
                      fontWeight: 400,
                      mt: 1,
                    }}
                  >
                    {formik.errors.file}
                  </Typography>
                )
              }
            </Box>
          </Grid>
        </Grid>

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

export default JoinUsForm;
