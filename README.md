# InterviewPrep Hub

A full-stack interview preparation platform built with **Next.js 15**, **TypeScript**, **Shadcn UI**, **MongoDB**, and **NextAuth.js**. Users can browse coding questions, filter by category, view details, and add new questions (protected route).

## Features

- **Landing Page:** Navbar, Hero, Highlights, Footer  
- **Questions Page:** List of questions with dynamic category filter  
- **Question Details:** View full details of a selected question  
- **Add Question (Protected):** Add new questions after login  
- **Authentication:** Google login with NextAuth.js  
- **Dynamic Categories:** New categories automatically added when adding questions  
- **Polished UI:** Shadcn components, responsive, light/dark theme toggle  

## Tech Stack

- Next.js 15 (App Router)  
- TypeScript  
- Shadcn UI  
- Tailwind CSS  
- MongoDB Atlas  
- NextAuth.js (Google Authentication)  

## Installation

```bash
git clone https://github.com/md-zeon/InterviewPrep-Hub.git
cd InterviewPrep-Hub
npm install
```

## Add .env.local:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
MONGODB_URI=your_mongo_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

Run locally:
```bash
cd InterviewPrep-Hub
npm run dev
```

## Routes Summary

| Route                     | Access    | Description                         |
| ------------------------- | --------- | ----------------------------------- |
| `/`                       | Public    | Landing Page                        |
| `/login`                  | Public    | Google Login                        |
| `/questions`              | Public    | Questions List with category filter |
| `/questions/[id]`         | Public    | Question Details                    |
| `/dashboard/add-question` | Protected | Add new question                    |


Deployed on Vercel: 