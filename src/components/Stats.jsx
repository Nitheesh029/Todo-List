import React, { useState } from "react";
import { useTodo } from "../context";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CircularProgressBar from "./CircularProgressBar";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  const { todos } = useTodo();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(() => {
    gsap.from(".loading-animation", {
      y: 100,
      opacity: 0,
      duration: 0.75,
      ease: "power2.inOut",
    });

    gsap.from(".stat-card", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "back.out(1.7)",
      delay: 0.3,
    });

    gsap.from(".chart-container", {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const totalCount = todos.length;
  const completedPercentage = totalCount
    ? Math.round((completedCount / totalCount) * 100)
    : 0;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Todo Status",
        data: [completedCount, pendingCount],
        backgroundColor: ["#4ade80", "#60a5fa"],
        borderColor: ["#ffffff"],
        borderWidth: 3,
        hoverBackgroundColor: ["#86efac", "#93c5fd"],
        hoverBorderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#334155",
          font: {
            size: 14,
            weight: "600",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#1e293b",
        bodyColor: "#1e293b",
        borderColor: "#e2e8f0",
        borderWidth: 1,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        titleFont: {
          size: 14,
          weight: "600",
        },
        bodyFont: {
          size: 13,
        },
        padding: 12,
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            const percentage = totalCount
              ? Math.round((value / totalCount) * 100)
              : 0;
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
      duration: 1500,
    },
    onHover: (event, elements) => {
      if (elements && elements.length) {
        setHoveredIndex(elements[0].index);
      } else {
        setHoveredIndex(null);
      }
    },
  };

  const getStatCardClass = (index) => {
    const baseClass =
      "stat-card p-5 rounded-xl shadow-sm transition-all duration-300 cursor-default";
    if (hoveredIndex === index) {
      return index === 0
        ? `${baseClass} bg-gradient-to-br from-green-50 to-green-100 border-t-4 border-green-500 scale-[1.02] shadow-lg`
        : `${baseClass} bg-gradient-to-br from-blue-50 to-blue-100 border-t-4 border-blue-500 scale-[1.02] shadow-lg`;
    }
    return `${baseClass} bg-gradient-to-br from-white to-gray-50 border-t-4 border-gray-200`;
  };

  return (
    <div className="mx-auto w-[95%] max-w-4xl mt-8 sm:mt-12 md:mt-16 mb-16 sm:mb-20 bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 loading-animation">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
          Todo Analytics
        </h2>
        <p className="text-slate-500 text-sm sm:text-base">
          Track your productivity and task progress
        </p>
      </div>

      <div className="grid grid-rows-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-10">
        <div className={getStatCardClass(0)}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Completed
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-green-700 mt-2">
                {completedCount}
              </p>
            </div>
            <div className="bg-green-100/80 p-3 rounded-lg shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className={getStatCardClass(1)}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Pending
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-blue-700 mt-2">
                {pendingCount}
              </p>
            </div>
            <div className="bg-blue-100/80 p-3 rounded-lg shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="stat-card p-5 rounded-xl shadow-sm bg-gradient-to-br from-gray-50 to-gray-100 border-t-4 border-gray-300">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                Total Tasks
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2">
                {totalCount}
              </p>
            </div>
            <div className="bg-gray-200/80 p-3 rounded-lg shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="chart-container relative h-[280px] sm:h-[320px] bg-gray-50 rounded-2xl p-4 shadow-inner">
          <Doughnut data={data} options={options} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-slate-800">
                {totalCount}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Total Tasks
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center chart-container bg-gray-50 rounded-2xl p-6 shadow-inner">
          <div className="mb-5 text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Progress Overview
            </h3>
            <p className="text-sm text-slate-500">
              {completedPercentage}% of tasks completed
            </p>
          </div>
          <div className="relative">
            <CircularProgressBar
              percentage={completedPercentage}
              size={160}
              progressColor="#16a34a"
              trackColor="#e5e7eb"
              duration={2.5}
              strokeWidth={12}
              label={true}
              labelColor="#1e293b"
              labelSize="1.25rem"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
