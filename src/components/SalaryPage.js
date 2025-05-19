// SalaryPage.jsx
import React, { useState } from 'react';
import './SalaryPage.css';

const SalaryPage = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', position: 'Developer', basicSalary: 3000, bonus: 500, deductions: 200 },
    { id: 2, name: 'Jane Smith', position: 'Designer', basicSalary: 2800, bonus: 300, deductions: 100 },
    { id: 3, name: 'Alex Johnson', position: 'Manager', basicSalary: 5000, bonus: 800, deductions: 400 },
    { id: 4, name: 'Emily Davis', position: 'QA Engineer', basicSalary: 2600, bonus: 200, deductions: 50 },
    { id: 5, name: 'Chris Martin', position: 'HR', basicSalary: 3200, bonus: 250, deductions: 150 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    basicSalary: '',
    bonus: '',
    deductions: '',
  });

  const [activeTab, setActiveTab] = useState('view');
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.position.trim() !== '' &&
      Number(formData.basicSalary) > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill in valid required fields.');
      return;
    }

    const newEmp = {
      name: formData.name.trim(),
      position: formData.position.trim(),
      basicSalary: Number(formData.basicSalary),
      bonus: Number(formData.bonus) || 0,
      deductions: Number(formData.deductions) || 0,
    };

    if (editIndex !== null) {
      const updated = [...employees];
      updated[editIndex] = { ...updated[editIndex], ...newEmp };
      setEmployees(updated);
      setEditIndex(null);
    } else {
      const newId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) + 1 : 1;
      setEmployees(prev => [...prev, { id: newId, ...newEmp }]);
    }

    setFormData({ name: '', position: '', basicSalary: '', bonus: '', deductions: '' });
    setActiveTab('view');
  };

  const handleEdit = (index) => {
    const emp = employees[index];
    setFormData({
      name: emp.name,
      position: emp.position,
      basicSalary: emp.basicSalary,
      bonus: emp.bonus,
      deductions: emp.deductions,
    });
    setEditIndex(index);
    setActiveTab('edit');
  };

  const netSalaries = employees.map(emp => emp.basicSalary + emp.bonus - emp.deductions);
  const totalNetSalary = netSalaries.reduce((sum, s) => sum + s, 0);
  const averageSalary = employees.length ? totalNetSalary / employees.length : 0;
  const highestSalary = Math.max(...netSalaries);

  return (
    <div className="salary-dashboard">
      <aside className="sidebar" role="navigation" aria-label="Main sidebar">
        <div className="logo" aria-label="Company Logo">💼</div>
        <ul>
          <li
            className={activeTab === 'view' ? 'active' : ''}
            onClick={() => setActiveTab('view')}
            tabIndex={0}
            role="button"
            aria-pressed={activeTab === 'view'}
            onKeyDown={e => e.key === 'Enter' && setActiveTab('view')}
            title="View Employees"
          >
            <i className="fas fa-table" aria-hidden="true"></i>
          </li>
          <li
            className={activeTab === 'add' ? 'active' : ''}
            onClick={() => { setActiveTab('add'); setEditIndex(null); }}
            tabIndex={0}
            role="button"
            aria-pressed={activeTab === 'add'}
            onKeyDown={e => e.key === 'Enter' && (setActiveTab('add'), setEditIndex(null))}
            title="Add Employee"
          >
            <i className="fas fa-user-plus" aria-hidden="true"></i>
          </li>
        </ul>
      </aside>

      <main className="main-content" role="main">
        <header className="header">
          <h2>
            {activeTab === 'add' ? 'Add Employee' : activeTab === 'edit' ? 'Edit Employee' : 'Salary Dashboard'}
          </h2>
        </header>

        {activeTab === 'view' && (
          <>
            <section className="dashboard-overview" aria-label="Salary summary">
              <div className="overview-box">
                <i className="fas fa-users icon" aria-hidden="true"></i>
                <div>
                  <h4>Total Employees</h4>
                  <p>{employees.length}</p>
                </div>
              </div>
              <div className="overview-box">
                <i className="fas fa-dollar-sign icon" aria-hidden="true"></i>
                <div>
                  <h4>Total Salary Paid</h4>
                  <p>{totalNetSalary.toFixed(2)} $</p>
                </div>
              </div>
              <div className="overview-box">
                <i className="fas fa-chart-line icon" aria-hidden="true"></i>
                <div>
                  <h4>Average Salary</h4>
                  <p>{averageSalary.toFixed(2)} $</p>
                </div>
              </div>
              <div className="overview-box">
                <i className="fas fa-trophy icon" aria-hidden="true"></i>
                <div>
                  <h4>Highest Net Salary</h4>
                  <p>{highestSalary.toFixed(2)} $</p>
                </div>
              </div>
            </section>

            <section className="salary-table-section" aria-label="Employee salary table">
              <h3>Employee Salaries</h3>
              <table className="salary-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Basic ($)</th>
                    <th>Bonus ($)</th>
                    <th>Deductions ($)</th>
                    <th>Net Salary ($)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, index) => {
                    const net = emp.basicSalary + emp.bonus - emp.deductions;
                    return (
                      <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.position}</td>
                        <td>{emp.basicSalary.toFixed(2)}</td>
                        <td>{emp.bonus.toFixed(2)}</td>
                        <td>{emp.deductions.toFixed(2)}</td>
                        <td>
                          <strong className={net >= 3000 ? 'high-salary' : 'low-salary'}>
                            {net.toFixed(2)}
                          </strong>
                        </td>
                        <td>
                          <button
                            onClick={() => handleEdit(index)}
                            aria-label={`Edit employee ${emp.name}`}
                            className="edit-btn"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>
          </>
        )}

        {(activeTab === 'add' || activeTab === 'edit') && (
          <section className="add-employee-form" aria-label={activeTab === 'edit' ? 'Edit employee form' : 'Add employee form'}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Employee Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="position"
                placeholder="Position"
                aria-label="Employee Position"
                value={formData.position}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="basicSalary"
                placeholder="Basic Salary"
                aria-label="Basic Salary"
                value={formData.basicSalary}
                onChange={handleChange}
                required
                min="0"
              />
              <input
                type="number"
                name="bonus"
                placeholder="Bonus (optional)"
                aria-label="Bonus"
                value={formData.bonus}
                onChange={handleChange}
                min="0"
              />
              <input
                type="number"
                name="deductions"
                placeholder="Deductions (optional)"
                aria-label="Deductions"
                value={formData.deductions}
                onChange={handleChange}
                min="0"
              />
              <div className="form-buttons" style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="submit" disabled={!isFormValid()}>
                  {activeTab === 'edit' ? 'Update Employee' : 'Add Employee'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ name: '', position: '', basicSalary: '', bonus: '', deductions: '' });
                    setActiveTab('view');
                    setEditIndex(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        )}
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

      </main>
    </div>
    
  );
};

export default SalaryPage;
