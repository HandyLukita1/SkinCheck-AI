# SkinCheckAI

An intelligent web platform designed for automated skin lesion analysis and multi-class dermatological screening using deep learning.

## Project Overview

SkinCheckAI evaluates dermatological images to classify conditions into four distinct categories: **Abnormal Mole**, **Normal Skin**, **Normal Mole**, and **Rash**. Built upon a fine-tuned MobileNetV2 architecture, the application delivers rapid, real-time predictions through a lightweight Flask API connected to an interactive React interface.

* **Model Architecture:** MobileNetV2 (Pre-trained on ImageNet with custom classification layers)
* **Supported Classes:** `abnormal_mole`, `normal`, `normal_mole`, `rash`
* **Input Specifications:** 224x224 RGB image
* **Inference Focus:** Optimized for low-latency CPU processing

---

## Technical Stack

### Core Technologies
* **AI & Machine Learning:** TensorFlow, Keras, NumPy
* **Backend API:** Python 3.10+, Flask, Flask-CORS, Flask-Limiter, Pillow
* **Frontend Application:** React 19, TypeScript, Vite, Axios, CSS Modules / Modern CSS

---

## Local Development Setup

### System Prerequisites
Ensure you have the following installed on your machine:
* Python `3.10` or higher
* Node.js `18.x` or higher
* npm (comes with Node.js)

---

### Step 1: Backend Configuration

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   * **Windows (PowerShell/CMD):**
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```
   * **Linux / macOS:**
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Launch the API server:
   ```bash
   python app.py
   ```
   *The Flask service will start running at `http://127.0.0.1:5000`.*

---

### Step 2: Frontend Configuration

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install Node modules:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The application UI will be accessible at `http://localhost:5173`.*

---

## API Documentation

### Predict Endpoint

Analyzes an uploaded skin image file and returns prediction results across all target categories.

* **URL:** `/predict` (or `/api/predict`)
* **HTTP Method:** `POST`
* **Request Format:** `multipart/form-data`
* **Form Field:** `file` *(Supported extensions: `.jpg`, `.jpeg`, `.png`)*
* **Rate Limits:** 10 requests / minute

#### Sample Successful Response (`200 OK`)
```json
{
  "status": "success",
  "prediction": "abnormal_mole",
  "confidence": "96.25%",
  "scores": {
    "abnormal_mole": 0.9625,
    "normal": 0.0120,
    "normal_mole": 0.0180,
    "rash": 0.0075
  }
}
```

#### Sample Error Response (`400 Bad Request`)
```json
{
  "error": "Invalid file format. Please upload a PNG or JPG image."
}
```

---

## Project Structure

```text
SkinCheckAI/
├── ai-model/
│   └── training-model.py      # Data preprocessing & MobileNetV2 training script
├── backend/
│   ├── app.py                 # Flask server endpoints & inference logic
│   ├── skin_model.h5          # Trained TensorFlow model weights
│   └── requirements.txt       # Python environment dependencies
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI elements (Layout, Navbar, etc.)
│   │   ├── pages/             # View pages (Home, Scan, etc.)
│   │   ├── App.tsx            # App routing logic
│   │   └── main.tsx           # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
└── README.md
```

---

## Medical Disclaimer

> **IMPORTANT:** SkinCheckAI is developed strictly for educational, research, and technical demonstration purposes. It is **not** an accredited medical diagnostic device and is not intended to diagnose, treat, or replace professional evaluation by a licensed dermatologist or medical practitioner. Always consult a healthcare professional for any medical concerns regarding skin lesions.