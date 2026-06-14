"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./stats-cards.module.scss";
import { Reveal } from "@/components/utils/Reveal";

export const StatsCards = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    commits: 0,
    teams: 0,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      });
    }, observerOptions);

    const element = document.querySelector(`.${styles.statsGrid}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { projects: 10, commits: 3000, teams: 3 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        projects: Math.floor(targets.projects * progress),
        commits: Math.floor(targets.commits * progress),
        teams: Math.floor(targets.teams * progress),
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(timer);
      }
    }, stepDuration);
  };

  const stats = [
    { value: counters.projects, label: "Projects Completed", icon: "📁" },
    { value: counters.commits, label: "Github Commits", icon: "🚀" },
    { value: counters.teams, label: "Team Projects", icon: "👥" },
  ];

  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <Reveal
          key={index}
          direction="up"
          delay={0.2 + index * 0.15}
          clipOverflow={false}
        >
          <div className={styles.statCard}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statContent}>
              <h3 className={styles.statValue}>{stat.value}+</h3>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
