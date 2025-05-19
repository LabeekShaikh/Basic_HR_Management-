import React, { useState, useEffect } from 'react';

const ShiftScheduling = () => {
  const [shifts, setShifts] = useState(() => {
    const saved = localStorage.getItem('shifts');
    return saved
      ? JSON.parse(saved)
      : [
          { employee: 'John Doe', date: '2025-05-20', shift: 'Morning' },
          { employee: 'Jane Smith', date: '2025-05-21', shift: 'Evening' },
        ];
  });

  const [employeeInput, setEmployeeInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [shiftInput, setShiftInput] = useState('Morning');
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    localStorage.setItem('shifts', JSON.stringify(shifts));
  }, [shifts]);

  const validateShift = (newShift, skipIndex = null) => {
    if (!newShift.employee.trim() || !newShift.date || !newShift.shift) {
      setError('Please fill all fields');
      return false;
    }

    const duplicate = shifts.some((shift, idx) => {
      if (skipIndex !== null && idx === skipIndex) return false;
      return (
        shift.employee.toLowerCase() === newShift.employee.toLowerCase() &&
        shift.date === newShift.date &&
        shift.shift === newShift.shift
      );
    });

    if (duplicate) {
      setError('This shift already exists for the employee on the selected date and time.');
      return false;
    }

    setError('');
    return true;
  };

  const handleAddOrUpdate = () => {
    const newShift = {
      employee: employeeInput.trim(),
      date: dateInput,
      shift: shiftInput,
    };

    if (!validateShift(newShift, editIndex)) return;

    if (editIndex !== null) {
      const updatedShifts = [...shifts];
      updatedShifts[editIndex] = newShift;
      setShifts(updatedShifts);
      setEditIndex(null);
    } else {
      setShifts([...shifts, newShift]);
    }

    setEmployeeInput('');
    setDateInput('');
    setShiftInput('Morning');
  };

  const handleEdit = (index) => {
    setEmployeeInput(shifts[index].employee);
    setDateInput(shifts[index].date);
    setShiftInput(shifts[index].shift);
    setEditIndex(index);
    setError('');
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this shift?')) {
      setShifts(shifts.filter((_, i) => i !== index));
      if (editIndex === index) {
        handleCancelEdit();
      }
    }
  };

  const handleCancelEdit = () => {
    setEmployeeInput('');
    setDateInput('');
    setShiftInput('Morning');
    setEditIndex(null);
    setError('');
  };

  const filteredShifts = shifts.filter(({ employee, date }) => {
    const term = searchTerm.toLowerCase();
    return employee.toLowerCase().includes(term) || date.includes(term);
  });

  const sortedShifts = [...filteredShifts].sort((a, b) => {
    if (!sortKey) return 0;
    const valA = a[sortKey];
    const valB = b[sortKey];
    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  return (
    <div
      style={{
        maxWidth: 1604,
        margin: '40px auto',
        padding: 50,
        backgroundColor: 'rgba(158, 153, 255, 0.13)',
        borderRadius: 36,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2>Shift Scheduling</h2>

      <div
        style={{
          marginBottom: 20,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          alignItems: 'center',
        }}
      >
        <input
          type="text"
          aria-label="Employee Name"
          placeholder="Employee Name"
          value={employeeInput}
          onChange={(e) => setEmployeeInput(e.target.value)}
          style={{ padding: 8, width: 200 }}
        />
        <input
          type="date"
          aria-label="Shift Date"
          value={dateInput}
          onChange={(e) => setDateInput(e.target.value)}
          style={{ padding: 8 }}
        />
        <select
          aria-label="Shift Time"
          value={shiftInput}
          onChange={(e) => setShiftInput(e.target.value)}
          style={{ padding: 8 }}
        >
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>

        <button
          onClick={handleAddOrUpdate}
          disabled={!employeeInput.trim() || !dateInput.trim() || !shiftInput.trim()}
          style={{
            padding: '8px 16px',
            cursor:
              !employeeInput.trim() || !dateInput.trim() || !shiftInput.trim()
                ? 'not-allowed'
                : 'pointer',
            backgroundColor: editIndex !== null ? '#4CAF50' : '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: 4,
          }}
        >
          {editIndex !== null ? 'Update Shift' : 'Add Shift'}
        </button>

        {editIndex !== null && (
          <button
            onClick={handleCancelEdit}
            style={{
              padding: '8px 16px',
              marginLeft: 10,
              cursor: 'pointer',
              backgroundColor: '#ccc',
              border: 'none',
              borderRadius: 4,
            }}
          >
            Cancel
          </button>
        )}
      </div>

      {error && (
        <p style={{ color: 'red', marginBottom: 10 }} role="alert">
          {error}
        </p>
      )}

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search by Employee or Date (YYYY-MM-DD)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: 8, width: '100%' }}
          aria-label="Search shifts"
        />
      </div>

      {sortedShifts.length === 0 ? (
        <p>No shifts scheduled.</p>
      ) : (
        <table
          style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
          }}
          aria-label="Shift Schedule Table"
        >
          <thead>
            <tr style={{ 
              backgroundColor: '#4a47a3', // dark purple-blue header 
              color: 'white', 
              cursor: 'pointer' 
            }}>
              <th
                style={{ padding: 12, border: '1px solid #3a3873' }}
                onClick={() => toggleSort('employee')}
                aria-sort={sortKey === 'employee' ? sortDirection : 'none'}
                scope="col"
              >
                Employee {sortKey === 'employee' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th
                style={{ padding: 12, border: '1px solid #3a3873' }}
                onClick={() => toggleSort('date')}
                aria-sort={sortKey === 'date' ? sortDirection : 'none'}
                scope="col"
              >
                Date {sortKey === 'date' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th
                style={{ padding: 12, border: '1px solid #3a3873' }}
                onClick={() => toggleSort('shift')}
                aria-sort={sortKey === 'shift' ? sortDirection : 'none'}
                scope="col"
              >
                Shift {sortKey === 'shift' ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th style={{ padding: 12, border: '1px solid #3a3873' }} scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedShifts.map((shift, idx) => {
              const originalIndex = shifts.findIndex(
                (s) =>
                  s.employee === shift.employee &&
                  s.date === shift.date &&
                  s.shift === shift.shift
              );
              const isEditingRow = originalIndex === editIndex;
              const isEvenRow = idx % 2 === 0;

              return (
                <tr
                  key={originalIndex}
                  style={{ 
                    backgroundColor: isEditingRow 
                      ? '#d4f8d4'  // bright green for edit row 
                      : isEvenRow 
                        ? '#f7f7f7'  // light grey for even rows
                        : 'white',  // white for odd rows
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isEditingRow) e.currentTarget.style.backgroundColor = '#e0e7ff'; // light blue hover
                  }}
                  onMouseLeave={e => {
                    if (!isEditingRow)
                      e.currentTarget.style.backgroundColor = isEvenRow ? '#f7f7f7' : 'white';
                  }}
                >
                  <td style={{ padding: 12, border: '1px solid #ddd' }}>{shift.employee}</td>
                  <td style={{ padding: 12, border: '1px solid #ddd' }}>{shift.date}</td>
                  <td style={{ padding: 12, border: '1px solid #ddd' }}>{shift.shift}</td>
                  <td style={{ padding: 12, border: '1px solid #ddd' }}>
                    <button
                      onClick={() => handleEdit(originalIndex)}
                      style={{ marginRight: 10, cursor: 'pointer' }}
                      aria-label={`Edit shift for ${shift.employee} on ${shift.date} (${shift.shift})`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(originalIndex)}
                      style={{ cursor: 'pointer', color: 'red' }}
                      aria-label={`Delete shift for ${shift.employee} on ${shift.date} (${shift.shift})`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShiftScheduling;
