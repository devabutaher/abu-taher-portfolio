/**
 * Mock blog / article data.
 * Replace with your real posts — or wire up to a CMS / MDX pipeline.
 *
 * Fields:
 *  id          — unique key
 *  slug        — URL-safe identifier (reserved for future routing)
 *  title       — article title
 *  excerpt     — 1–2 sentence teaser shown on the card
 *  coverColor  — gradient stop used when no coverImg is present
 *  tags        — array of category strings
 *  readingTime — estimated minutes
 *  date        — publish date string
 *  content     — JSX / rich-text content rendered inside the modal.
 *                Use plain strings or React elements.
 */

export const BLOGS = [
  {
    id: "blog-01",
    slug: "react-server-components-explained",
    title: "React Server Components: The Mental Model You Need",
    excerpt:
      "Server Components flip the default from client to server, enabling zero-bundle-size data fetching. Here's how to actually think about them.",
    coverColor: "#61dafb",
    tags: ["React", "Next.js", "Performance"],
    readingTime: 7,
    date: "May 2024",
    content: [
      {
        type: "paragraph",
        text: "React Server Components (RSC) arrived as part of Next.js 13's App Router and have fundamentally changed how we think about data-fetching and component boundaries. The core idea is elegantly simple: some components run only on the server and ship zero JavaScript to the client.",
      },
      {
        type: "heading",
        text: "The boundary between server and client",
      },
      {
        type: "paragraph",
        text: "Every component in the App Router is a Server Component by default. The moment you need interactivity — onClick, useState, useEffect — you opt into a Client Component with the 'use client' directive at the top of the file.",
      },
      {
        type: "code",
        language: "tsx",
        text: `// Server Component — runs only on server, no JS sent to client
async function ProductList() {
  const products = await db.query('SELECT * FROM products');
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}

// Client Component — ships JavaScript, enables interactivity
'use client';
function AddToCart({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);
  return <button onClick={() => setLoading(true)}>Add to cart</button>;
}`,
      },
      {
        type: "paragraph",
        text: "The key insight is that you can compose these freely. A Server Component can import and render a Client Component — but not vice versa (without passing it as a prop). This composability is what makes the pattern so powerful in practice.",
      },
      {
        type: "heading",
        text: "Performance implications",
      },
      {
        type: "paragraph",
        text: "Because Server Components are rendered to a special wire format on the server (not HTML — React's own streaming format), they can be streamed incrementally. Paired with Suspense boundaries, this means your user sees meaningful content almost immediately, even before all data has resolved.",
      },
    ],
  },
  {
    id: "blog-02",
    slug: "css-container-queries-2024",
    title: "CSS Container Queries Are Better Than You Think",
    excerpt:
      "Media queries respond to the viewport. Container queries respond to the parent element. This distinction changes everything about how we build reusable components.",
    coverColor: "#06b6d4",
    tags: ["CSS", "Frontend", "Design"],
    readingTime: 5,
    date: "Apr 2024",
    content: [
      {
        type: "paragraph",
        text: "For years, CSS developers dreamed of a way to style components based on their own dimensions rather than the viewport. Container queries finally deliver exactly that, and browser support is now excellent across Chrome, Firefox, and Safari.",
      },
      {
        type: "heading",
        text: "Setting up a container",
      },
      {
        type: "paragraph",
        text: "You first declare a containment context on the parent, then write rules that respond to that container's inline size rather than the viewport width.",
      },
      {
        type: "code",
        language: "css",
        text: `.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`,
      },
      {
        type: "paragraph",
        text: "This means your Card component can lay out differently depending on whether it is placed in a sidebar (narrow) or a main content area (wide) — without any JavaScript, without any prop drilling, and without any media query that couples the component to the page layout.",
      },
    ],
  },
  {
    id: "blog-03",
    slug: "nextjs-app-router-patterns",
    title: "5 Patterns Every Next.js App Router Project Should Use",
    excerpt:
      "From parallel routes to intercepting routes and server actions, the App Router introduces primitives that solve real architectural problems in ways Pages Router never could.",
    coverColor: "#ffffff",
    tags: ["Next.js", "Architecture", "TypeScript"],
    readingTime: 9,
    date: "Mar 2024",
    content: [
      {
        type: "paragraph",
        text: "The App Router is more than a new file-system convention. It introduces a collection of primitives that, used together, enable UI architectures that were previously painful or impossible to build.",
      },
      {
        type: "heading",
        text: "1. Parallel Routes for complex dashboards",
      },
      {
        type: "paragraph",
        text: "Parallel Routes let you render multiple pages simultaneously in the same layout. The classic use-case is a dashboard with an always-visible analytics panel alongside a main content area — both with their own loading states and error boundaries.",
      },
      {
        type: "code",
        language: "text",
        text: `app/
  dashboard/
    layout.tsx          ← receives @analytics and @main as props
    @analytics/
      page.tsx
      loading.tsx
    @main/
      page.tsx
      loading.tsx`,
      },
      {
        type: "heading",
        text: "2. Intercepting Routes for modals",
      },
      {
        type: "paragraph",
        text: "Intercepting Routes let a route render in the context of another layout. The canonical example is a photo grid — clicking a photo shows a modal with the full photo, but navigating directly to /photos/123 shows a full page. Same component, two rendering contexts.",
      },
    ],
  },
  {
    id: "blog-04",
    slug: "typescript-generics-deep-dive",
    title: "TypeScript Generics: From Confused to Confident",
    excerpt:
      "Generics are the feature that makes TypeScript's type system Turing-complete. Once they click, you'll never write type-unsafe utility functions again.",
    coverColor: "#3178c6",
    tags: ["TypeScript", "JavaScript", "Developer Experience"],
    readingTime: 11,
    date: "Feb 2024",
    content: [
      {
        type: "paragraph",
        text: "Generics are TypeScript's mechanism for writing code that works across many types while retaining full type safety. Think of them as type-level functions — they take type parameters and return new types.",
      },
      {
        type: "heading",
        text: "A concrete motivating example",
      },
      {
        type: "paragraph",
        text: "Suppose you want a function that returns the first element of any array. Without generics, you either lose type information or write a separate function for each type.",
      },
      {
        type: "code",
        language: "typescript",
        text: `// ❌ Without generics — loses type information
function first(arr: any[]): any {
  return arr[0];
}

// ✅ With generics — type flows through
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

const name = first(['Alice', 'Bob']); // type: string | undefined
const score = first([98, 87, 92]);    // type: number | undefined`,
      },
      {
        type: "paragraph",
        text: "The type parameter T is inferred automatically from the argument — you rarely need to specify it explicitly. TypeScript figures out that passing string[] means T = string, so the return type is string | undefined.",
      },
    ],
  },
  {
    id: "blog-05",
    slug: "web-performance-core-web-vitals",
    title: "Chasing Green: A Practical Guide to Core Web Vitals",
    excerpt:
      "LCP, INP, and CLS are the metrics that determine whether Google sees your site as fast. Here's how to diagnose and fix each one in a Next.js application.",
    coverColor: "#f59e0b",
    tags: ["Performance", "SEO", "Next.js"],
    readingTime: 8,
    date: "Jan 2024",
    content: [
      {
        type: "paragraph",
        text: "Core Web Vitals are Google's attempt to quantify the user experience of a page. Passing all three is a ranking signal, but more importantly, they correlate with real-world user satisfaction and conversion rates.",
      },
      {
        type: "heading",
        text: "LCP — Largest Contentful Paint",
      },
      {
        type: "paragraph",
        text: "LCP measures when the largest visible element finishes painting. In most portfolios and landing pages this is the hero image or a large heading. The two biggest levers are image optimisation (next/image does most of this automatically) and ensuring the element is not behind a lazy-loaded component.",
      },
      {
        type: "code",
        language: "tsx",
        text: `// ✅ Mark your hero image as priority — disables lazy loading
<Image
  src={hero}
  alt="Hero"
  priority          // ← preloads the image
  placeholder="blur"
  sizes="100vw"
/>`,
      },
      {
        type: "heading",
        text: "INP — Interaction to Next Paint",
      },
      {
        type: "paragraph",
        text: "INP replaced FID in 2024. It measures the latency of all interactions throughout the page lifetime, not just the first one. Long JavaScript tasks are the primary culprit — use code splitting, defer non-critical scripts, and keep event handlers lean.",
      },
    ],
  },
  {
    id: "blog-06",
    slug: "building-design-systems",
    title: "Building a Design System That Developers Actually Use",
    excerpt:
      "A design system that lives in Figma but not in code is just documentation. Here is the stack and workflow that keeps both in sync without heroic effort.",
    coverColor: "#8b5cf6",
    tags: ["Design Systems", "CSS", "Frontend"],
    readingTime: 6,
    date: "Dec 2023",
    content: [
      {
        type: "paragraph",
        text: "The graveyard of design systems is full of beautifully-documented component libraries that no one adopted. The failure mode is almost always the same: the system optimises for the happy path and makes edge cases harder, so developers route around it.",
      },
      {
        type: "heading",
        text: "Start with tokens, not components",
      },
      {
        type: "paragraph",
        text: "Design tokens are named, platform-agnostic values for colour, spacing, typography, and motion. They are the contract between design and engineering. Everything else — components, patterns, documentation — is built on top of them.",
      },
      {
        type: "code",
        language: "css",
        text: `:root {
  /* Colour tokens */
  --color-brand-500: #8b5cf6;
  --color-brand-400: #a78bfa;

  /* Semantic aliases — components use these, not raw values */
  --color-interactive: var(--color-brand-500);
  --color-interactive-hover: var(--color-brand-400);

  /* Spacing scale */
  --space-4: 1rem;
  --space-8: 2rem;
}`,
      },
      {
        type: "paragraph",
        text: "By separating raw values from semantic aliases, you can theme the entire system — dark mode, high contrast, seasonal — by swapping aliases without touching a single component.",
      },
    ],
  },
];
