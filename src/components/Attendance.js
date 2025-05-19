import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const peopleData = {
  johnDoe: {
    name: 'John Doe',
    summary: {
      totalEmployees: 30,
      present: 26,
      absent: 3,
      lateComers: 5,
    },
    attendanceDetails: [
      { date: 'Apr 8', absent: 0, late: 1 },
      { date: 'Apr 9', absent: 1, late: 2 },
      { date: 'Apr 10', absent: 1, late: 1 },
      { date: 'Apr 11', absent: 0, late: 0 },
      { date: 'Apr 12', absent: 1, late: 1 },
      { date: 'Apr 13', absent: 0, late: 0 },
      { date: 'Apr 14', absent: 0, late: 1 },
    ],
  },
  janeSmith: {
    name: 'Jane Smith',
    summary: {
      totalEmployees: 28,
      present: 25,
      absent: 2,
      lateComers: 3,
    },
    attendanceDetails: [
      { date: 'Apr 8', absent: 0, late: 0 },
      { date: 'Apr 9', absent: 0, late: 1 },
      { date: 'Apr 10', absent: 1, late: 0 },
      { date: 'Apr 11', absent: 0, late: 1 },
      { date: 'Apr 12', absent: 0, late: 0 },
      { date: 'Apr 13', absent: 1, late: 1 },
      { date: 'Apr 14', absent: 0, late: 0 },
    ],
  },
  alexBrown: {
    name: 'Alex Brown',
    summary: {
      totalEmployees: 32,
      present: 29,
      absent: 2,
      lateComers: 4,
    },
    attendanceDetails: [
      { date: 'Apr 8', absent: 1, late: 1 },
      { date: 'Apr 9', absent: 0, late: 2 },
      { date: 'Apr 10', absent: 0, late: 1 },
      { date: 'Apr 11', absent: 0, late: 0 },
      { date: 'Apr 12', absent: 1, late: 0 },
      { date: 'Apr 13', absent: 0, late: 0 },
      { date: 'Apr 14', absent: 0, late: 0 },
    ],
  },
};

const Dashboard = () => {
  const [selectedPerson, setSelectedPerson] = useState('johnDoe');
  const data = peopleData[selectedPerson];

  return (
    <div
      style={{
        maxWidth: '1030px',
        margin: '10rem auto',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        color: 'rgb(0, 0, 0)',
        padding: '1px 2rem',
        height: '1226px',
        backgroundColor: '#9b72df1f',
        borderRadius: '35px',
        border: '2px solid #6a4bcf',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontWeight: '700',
          fontSize: '2.5rem',
          color: '#222',
          letterSpacing: '1.2px',
        }}
      >
        Attendance Dashboard - {data.name}
      </h2>

      {/* Person selector */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <label
          htmlFor="person-select"
          style={{
            marginRight: 12,
            fontWeight: '700',
            fontSize: '1.1rem',
            color: '#555',
          }}
        >
          Select Person:
        </label>
        <select
          id="person-select"
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
          style={{
            padding: '0.5rem 1.2rem',
            fontSize: '1.1rem',
            borderRadius: 8,
            border: '1.5px solid #4a90e2',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#50e3c2')}
          onBlur={(e) => (e.target.style.borderColor = '#4a90e2')}
        >
          {Object.entries(peopleData).map(([key, person]) => (
            <option key={key} value={key}>
              {person.name}
            </option>
          ))}
        </select>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <SummaryCard label="Total Employees" value={data.summary.totalEmployees} color="#4a90e2" />
        <SummaryCard label="Present" value={data.summary.present} color="#50e3c2" />
        <SummaryCard label="Absent" value={data.summary.absent} color="#f5a623" />
        <SummaryCard label="Late Comers" value={data.summary.lateComers} color="#d0021b" />
      </div>

      {/* Attendance Table */}
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: 12,
          overflow: 'hidden',
          marginBottom: '3rem',
        }}
      >
        <thead style={{ backgroundColor: '#4a90e2', color: 'white' }}>
          <tr>
            <th style={{ padding: '1rem', textAlign: 'left', fontSize: '1.1rem' }}>Date</th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem' }}>Absent</th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '1.1rem' }}>Late Comers</th>
          </tr>
        </thead>
        <tbody>
          {data.attendanceDetails.map(({ date, absent, late }) => (
            <tr
              key={date}
              style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #eee',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f8ff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
            >
              <td style={{ padding: '0.85rem 1rem' }}>{date}</td>
              <td
                style={{
                  padding: '0.85rem 1rem',
                  textAlign: 'center',
                  color: '#f5a623',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                }}
              >
                {absent}
              </td>
              <td
                style={{
                  padding: '0.85rem 1rem',
                  textAlign: 'center',
                  color: '#d0021b',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                }}
              >
                {late}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Charts */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Absent Bar Chart */}
        <section
          style={{
            flex: '1 1 45%',
            backgroundColor: 'white',
            padding: '1rem 1.5rem',
            borderRadius: 12,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            minWidth: 320,
          }}
        >
          <h3
            style={{
              marginBottom: '1rem',
              color: '#f5a623',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            Absentees - Last 7 Days
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.attendanceDetails} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="absent" fill="#f5a623" name="Absent" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Late Comers Bar Chart */}
        <section
          style={{
            flex: '1 1 45%',
            backgroundColor: 'white',
            padding: '1rem 1.5rem',
            borderRadius: 12,
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            minWidth: 320,
          }}
        >
          <h3
            style={{
              marginBottom: '1rem',
              color: '#d0021b',
              textAlign: 'center',
              fontWeight: '700',
            }}
          >
            Late Comers - Last 7 Days
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data.attendanceDetails} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="late" fill="#d0021b" name="Late Comers" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};
const SummaryCard = ({ label, value, color }) => (
  <div
    style={{
      maxWidth: '300px',
      margin: '0 auto',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: 'rgb(0, 0, 0)',
      padding: '14px 2rem',
      backgroundColor: 'rgba(219, 198, 254, 0.12)',
      borderRadius: '20px',
      border: '3px solid rgb(106, 75, 207)',
      textAlign: 'center',
      cursor: 'default',
      transition: 'transform 0.3s ease',
      userSelect: 'none',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    <div style={{ fontSize: '2.5rem', fontWeight: '800', color }}>{value}</div>
    <div style={{ fontSize: '1.25rem', fontWeight: '600', color: '#666', marginTop: 6 }}>{label}</div>
  </div>
);



export default Dashboard;
