import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", contactRoutes);

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend running");
});

/* 403 ERROR TEST */
app.get("/forbidden", (req, res) => {
  res.status(403).json({
    success: false,
    message: "Forbidden Access"
  });
});

/* 500 ERROR TEST */
app.get("/error", (req, res, next) => {
  next(new Error("Test Server Error"));
});


/* 404 ERROR HANDLER */
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found"
  });
});



/* 500 ERROR HANDLER */
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});

export default app;