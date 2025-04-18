import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CircularProgressBar({
  percentage = 75,
  size = 200,
  strokeWidth = 10,
  duration = 1.5,
  trackColor = "#e6e6e6",
  progressColor = "#4f46e5",
  textColor = "#333333",
}) {
  const progressRef = useRef(null);
  const percentageRef = useRef(null);
  const prevPercentageRef = useRef(percentage);

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (
      progressRef.current &&
      percentageRef.current &&
      prevPercentageRef.current !== percentage
    ) {
      // Animation for the circle
      gsap.to(progressRef.current, {
        strokeDashoffset: circumference - (percentage / 100) * circumference,
        duration: duration,
        ease: "power2.out",
      });

      // Animation for the percentage text
      gsap.to(percentageRef.current, {
        textContent: Math.round(percentage),
        duration: duration,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function () {
          percentageRef.current.textContent = `${Math.round(
            gsap.getProperty(percentageRef.current, "textContent")
          )}%`;
        },
      });

      prevPercentageRef.current = percentage;
    }
  }, [percentage, circumference, duration]);

  // Set initial values
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.setAttribute("stroke-dasharray", circumference);
      progressRef.current.setAttribute(
        "stroke-dashoffset",
        circumference - (percentage / 100) * circumference
      );
    }

    if (percentageRef.current) {
      percentageRef.current.textContent = `${percentage}%`;
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center relative"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          className="transition-all"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          ref={progressRef}
          cx={center}
          cy={center}
          r={radius}
          className="transition-all"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </svg>
      <div className="absolute flex flex-col justify-center items-center">
        <span
          ref={percentageRef}
          className="text-2xl font-bold"
          style={{ color: textColor }}
        >
          0%
        </span>
      </div>
    </div>
  );
}
