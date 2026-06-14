import coldFlyer from "/assets/projects/cold_flyer.png";
import healthBook from "/assets/projects/health_book.png";
import speedXpress from "/assets/projects/speed_xpress.png";

export const PROJECTS = [
  {
    title: "HealthBook",
    imgSrc: healthBook,
    code: "https://github.com/devabutaher/health-book",
    projectLink: "https://healthbooksocial.vercel.app",
    tech: [
      "NextJS",
      "Tailwind",
      "Supabase",
      "Prisma",
      "Express",
      "RTK Query",
      "TypeScript",
      "PostgreSQL",
      "shadcn/ui",
      "Framer Motion",
    ],
    description:
      "HealthBook is a health social platform with real-time messaging, stories, reels, feed, health tracking, groups, and expert marketplace.",
    modalContent: (
      <>
        <p>
          Real-time messaging with Supabase Realtime, stories with view/like
          tracking, and reels with create/comment/like — all in one platform.
          The main feed supports posts, comments, likes, shares, and follows for
          full social interaction.
        </p>
        <p>
          5 smart health templates (Workout, Meal, Mood, Sleep, Water) power
          structured logging, displayed in a personal My Book dashboard. Groups
          offer invites, join requests, roles, and group feeds. Challenges
          include progress tracking, leaderboards, and community participation.
          Expert marketplace connects users with health professionals.
        </p>
        <p>
          Built with Next.js 16 App Router, TypeScript, Tailwind CSS, shadcn/ui,
          and Redux Toolkit + RTK Query on the frontend. Backend runs Express.js
          with Prisma ORM on Supabase PostgreSQL. Auth via Supabase, real-time
          via Supabase Realtime, media via Cloudinary. Monorepo managed with
          Turborepo and pnpm.
        </p>
      </>
    ),
  },
  {
    title: "Cold Flyer",
    imgSrc: coldFlyer,
    code: "https://github.com/devabutaher/cold-flyer",
    code_backend: "https://github.com/devabutaher/cold-flyer-server",
    projectLink: "",
    tech: [
      "Next.js",
      "React",
      "Tailwind",
      "shadcn/ui",
      "Framer Motion",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Tanstack Query",
      "Stripe",
      "SSLCOMMERZ",
      "Nodemailer",
    ],
    description:
      "Cold Flyer is a full-featured HVAC e-commerce platform for AC pr payment gateway, admin dashboard, and i18n support.",
    modalContent: (
      <>
        <p>
          Complete HVAC e-commerce platform with product catalog, servi booking,
          cart management, order tracking, and a full admin dashboard for
          managing products, orders, bookings, users, technicians, blogs,
          expenses, and more.
        </p>
        <p>
          Features dual payment gateway (Stripe + SSLCOMMERZ), Bengali/
          internationalization, dark mode, role-based access control, real-time
          attendance with GPS check-in/out, WhatsApp/SMS messaging, P&L
          reporting, and live worker location tracking.
        </p>
        <p>
          Built with Next.js 16 App Router, React 19, Tailwind CSS 4, s and
          Framer Motion on the frontend. Backend runs Express.js with Mongoose
          on MongoDB, JWT authentication, Cloudinary for media Zustand +
          Tanstack Query for state management.
        </p>
      </>
    ),
  },
  {
    title: "Speed Xpress",
    imgSrc: speedXpress,
    code: "https://github.com/devabutaher/speed-xpress",
    code_backend: "https://github.com/devabutaher/speed-xpress-server",
    projectLink: "https://speedxpress.vercel.app",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "NextUI",
      "Framer Motion",
      "Firebase",
      "Stripe",
      "TanStack Query",
      "Express.js",
      "MongoDB",
      "Nodemailer",
    ],
    description:
      "Speed Xpress is a full-featured parcel management system with multi-role dashboards, real-time tracking, Stripe payment, and Firebase authentication.",
    modalContent: (
      <>
        <p>
          Complete parcel management platform with dedicated dashboards for
          customers, merchants, admins, and riders. Create parcels, track
          shipments in real-time, manage shops and inventory, generate invoices,
          and oversee the entire delivery pipeline.
        </p>
        <p>
          Features role-based access control (Customer, Merchant, Admin, Rider),
          Stripe payment integration, Firebase authentication, real-time parcel
          tracking with unique Parcel ID, merchant shop management, invoicing
          system, profile management, and dark mode support. Riders can view
          assigned deliveries, track earnings, and manage completed deliveries.
        </p>
        <p>
          Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS,
          NextUI, and Framer Motion on the frontend. Backend runs Express.js
          with Mongoose on MongoDB, JWT authentication, Stripe payment
          processing, Nodemailer for email notifications, and Firebase for
          authentication.
        </p>
      </>
    ),
  },
];
