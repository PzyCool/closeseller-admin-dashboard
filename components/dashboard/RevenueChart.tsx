"use client";

import { useState } from "react";

const ranges = ["7 Days", "30 Days", "90 Days"] as const;

const chartPoints = {
  "7 Days": "20,250 95,210 170,215 245,205 295,185 330,110 385,70 455,58 540,62",
  "30 Days": "20,235 95,220 170,198 245,188 295,165 330,142 385,112 455,92 540,76",
  "90 Days": "20,260 95,230 170,238 245,200 295,212 330,172 385,150 455,118 540,96",
};

export function RevenueChart() {
  const [activeRange, setActiveRange] = useState<(typeof ranges)[number]>("7 Days");
  // Mocked series keep the component interactive until real analytics data is connected.
  const points = chartPoints[activeRange];

  return (
    <section className="h-[424px] rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-foreground">Revenue Overview</h2>
        <div className="flex gap-2">
          {ranges.map((label) => (
            <button
              key={label}
              onClick={() => setActiveRange(label)}
              className={`h-8 rounded-[8px] px-4 text-[14px] font-medium ${
                activeRange === label ? "bg-brand text-white" : "bg-surface-soft text-muted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 h-80">
        <svg viewBox="0 0 600 320" className="h-full w-full">
          <defs>
            <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#5B3A99" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#5B3A99" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4, 5].map((line) => (
            <line
              key={line}
              x1="55"
              x2="570"
              y1={45 + line * 45}
              y2={45 + line * 45}
              stroke="#E8E6E2"
              strokeWidth="1"
            />
          ))}
          <path d={`M ${points} L 540 285 L 20 285 Z`} fill="url(#revenueFill)" />
          <polyline points={points} fill="none" stroke="#5B3A99" strokeWidth="4" strokeLinecap="round" />
          {points.split(" ").map((point) => {
            const [cx, cy] = point.split(",");
            return <circle key={point} cx={cx} cy={cy} r="4" fill="#5B3A99" stroke="#fff" strokeWidth="2" />;
          })}
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <text key={day} x={72 + index * 78} y="308" fill="#6B6B6B" fontSize="12" textAnchor="middle">
              {day}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}
