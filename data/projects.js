import img from "/assets/projects/ecotrack.png";

export const PROJECTS = [
  {
    title: "EcoTrack",
    imgSrc: img,
    code: "https://github.com/devabutaher/",
    projectLink: "https://ecotrack-demo.vercel.app",
    tech: ["NextJS", "Tailwind", "Supabase", "Chart.js"],
    description:
      "A personal carbon footprint tracker that visualizes daily consumption habits through interactive dashboards.",
    modalContent: (
      <>
        <p>
          EcoTrack helps users monitor and reduce their environmental impact.
          The application features complex data visualization and real-time
          tracking.
        </p>
        <p>
          The frontend is built with Next.js and Tailwind CSS for a sleek,
          responsive UI. I used Supabase for authentication and database
          management, allowing for instant updates across devices.
        </p>
      </>
    ),
  },
  {
    title: "StreamSync",
    imgSrc: "/assets/projects/streamsync.png",
    code: "https://github.com/devabutaher/",
    projectLink: "https://streamsync-live.com",
    tech: ["React", "Socket.io", "WebRTC", "Node"],
    description:
      "A real-time watch party platform where users can sync video playback and video chat simultaneously.",
    modalContent: (
      <>
        <p>
          StreamSync solves the problem of "3-2-1-Play" by automating
          synchronization between users watching the same content.
        </p>
        <p>
          I implemented Socket.io for low-latency state synchronization and used
          WebRTC for the peer-to-peer video calling feature. The backend is a
          highly scalable Node.js server designed to handle thousands of
          concurrent rooms.
        </p>
      </>
    ),
  },
  {
    title: "ArchiVault",
    imgSrc: "/assets/projects/archivault.png",
    code: "https://github.com/devabutaher/",
    projectLink: "https://archivault.io",
    tech: ["TypeScript", "GraphQL", "Prisma", "Docker"],
    description:
      "An enterprise-grade document management system with automated indexing and advanced search capabilities.",
    modalContent: (
      <>
        <p>
          ArchiVault was built to handle high volumes of PDF documentation for
          engineering firms, featuring a robust permission system.
        </p>
        <p>
          The project utilizes a GraphQL API for efficient data fetching and
          Prisma as the ORM to interact with a PostgreSQL database. The entire
          environment is containerized using Docker for seamless deployment and
          scaling.
        </p>
      </>
    ),
  },
];
