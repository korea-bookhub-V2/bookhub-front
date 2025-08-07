import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Cell,
} from "recharts";
import { parseISO, getWeekOfMonth, lastDayOfMonth } from "date-fns";
import { getWeeklySalesQuantity } from "@/apis/statistics/salesQuantityStatistics/SalesQuantityStatistics";

type ChartData = { name: string; total: number };

function WeeklySalesQuantity() {
  const [cookies] = useCookies(["accessToken"]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const thisYear = new Date().getFullYear();
  const yearRange = Array.from({ length: 5 }, (_, i) => thisYear - 4 + i).sort(
    (a, b) => b - a
  );

  const [selectedYear, setSelectedYear] = useState<number>(thisYear);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  const token = cookies.accessToken as string;

  const onFetchChart = async () => {
    if (!token) return;
    setLoading(true);

    const response = await getWeeklySalesQuantity(
      selectedYear,
      selectedMonth,
      token
    );
    const { code, message, data } = response;

    if (code != "SU") {
      alert(`${message}`);
      setLoading(false);
      return;
    }

    if (!Array.isArray(data)) {
      setChartData([]);
      setLoading(false);
      return;
    }

    const newChartData = data.map((item: any) => {
      const weekNum = String(item.yearWeek).slice(-2);
      const start = item.weekStartDate?.slice(5);
      const end = item.weekEndDate?.slice(5);
      const name = `${weekNum}주차 (${start}~${end})`;
      return {
        name,
        total: item.totalSales,
      };
    });

    setChartData(newChartData);
    setLoading(false);
  };

  useEffect(() => {
    onFetchChart();
  }, [selectedMonth]);

  return (
    <div
      style={{ width: "100%", maxWidth: 600, margin: "0 auto", padding: 10 }}
    >
      <h4>주간 통계</h4>

      <div style={{ display: "flex", gap: 12, margin: 16 }}>
        <select
          className="input-search"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          style={{ width: 150 }}
        >
          {yearRange.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
        <select
          className="input-search"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          style={{ width: 150 }}
        >
          {[...Array(12)].map((_, idx) => (
            <option key={idx + 1} value={idx + 1}>
              {idx + 1}월
            </option>
          ))}
        </select>
        <div>
          <button onClick={onFetchChart} className="searchBtn" style={{ margin: 10 }}>
            새로고침
          </button>
        </div>
      </div>

      {loading ? (
        <div>불러오는 중...</div>
      ) : (
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" interval={0} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" barSize={40}>
              {chartData.map((data, idx) => (
                <Cell key={idx} cursor="pointer" fill="#00C49F" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default WeeklySalesQuantity;
