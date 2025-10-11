# Liberty Ridge Training Grounds - Firearms Training Platform

## Project Mission

The core mission of this platform is to promote safe, professional, and comprehensive firearms training. We aim to build a community of responsible gun owners in Pasco, WA, and the greater Pacific Northwest by providing personalized, one-on-one instruction rooted in real-world military experience.

## Project Description

This repository contains the source code for the official website of Liberty Ridge Training Grounds. The platform is designed for instructor Zach, an Army veteran, to connect with individuals seeking expert firearms training. The website&apos;s primary goal is to convert visitors into scheduled consultations and seamlessly manage those leads through an integrated CRM system. The official domain for this project is [www.libertyridgetraininggrounds.com](https://www.libertyridgetraininggrounds.com).

## Core Features

### Interactive Consultation Scheduling

A dedicated page featuring an integrated calendar where potential clients can select an available date and time for their initial consultation.

### CRM Integration

All consultation signups will be seamlessly piped into a HighLevel CRM workflow to manage client communication, follow-ups, and marketing automation.

### Dynamic Media Galleries

Dedicated sections for showcasing high-quality photos and videos, managed through a simple admin interface.

### Admin Content Management

A secure, password-protected admin dashboard for Zach to upload new media via drag-and-drop and manage his consultation schedule.

### Persistent UI Elements

A floating/sticky header containing a dark/light mode toggle and a hamburger menu that remains visible on scroll for constant access to navigation and user preferences.

### Persistent FAQ Chatbot

A basic, transparent chatbot is readily available to the user as they scroll and navigate the site. Its main objective is to answer common questions and guide users toward the consultation scheduling page without being intrusive.

## Design and Aesthetics

- **Color Palette**: A professional black, white, and grayscale theme with a corresponding light mode
- **Typography**: Roboto font family, utilizing various weights to establish a clean visual hierarchy
- **Iconography**: Material Icons for all UI elements to ensure a modern and consistent look
- **Layout**: A minimalist, spacious, and media-first design that is fully responsive across all devices

## Technology & Infrastructure Stack

This project utilizes a modern, serverless architecture for optimal performance, security, and scalability.

### 1. Frontend

- HTML5
- CSS3 (with variables for easy theme switching)
- JavaScript (ES6+)

### 2. Backend & Database

- **Firebase Authentication**: Secure login for the admin dashboard
- **Cloud Firestore**: NoSQL database for scheduled appointments, media metadata, and chatbot FAQ data
- **Cloud Storage for Firebase**: Hosting for all user-uploaded photos and videos

### 3. Deployment & Security

- **Firebase Hosting**: Primary hosting platform for the static website assets
- **Cloudflare**: Serves as the primary DNS manager and sits in front of Firebase Hosting. Provides:
  - Global CDN for faster load times
  - SSL/TLS encryption
  - Basic DDoS mitigation and security

### 4. Marketing & CRM

- **HighLevel**: The core CRM for lead management. The website will integrate via API or webhooks to pass new consultation data directly into client management workflows

## Configuration & Deployment Notes

### Domain & DNS

The domain `libertyridgetraininggrounds.com` is registered. DNS records must be configured within Cloudflare to point to the Firebase Hosting instance.

### Firebase Setup

Initialize a Firebase project and enable Authentication, Firestore, and Cloud Storage. Add the Firebase config keys to the project&apos;s environment variables.

### HighLevel Integration

An API key or webhook URL from the target HighLevel account will be required to create the connection for the consultation form. This should be stored securely.

### Local Development

The Firebase Emulator Suite should be used for local testing of backend functions and database interactions without affecting live data.