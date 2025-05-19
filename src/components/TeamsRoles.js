import React, { useState } from 'react';
import './TeamsRoles.css';

const TeamsRoles = () => {
  const [teams, setTeams] = useState([
    { team: 'Development', role: 'Frontend Developer' },
    { team: 'Marketing', role: 'Content Strategist' },
    { team: 'HR', role: 'Recruiter' }
  ]);

  const [teamInput, setTeamInput] = useState('');
  const [roleInput, setRoleInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleAddOrUpdate = () => {
    if (!teamInput.trim() || !roleInput.trim()) {
      alert('Please enter both team and role.');
      return;
    }

    const newEntry = { team: teamInput.trim(), role: roleInput.trim() };

    if (editIndex !== null) {
      const updatedTeams = [...teams];
      updatedTeams[editIndex] = newEntry;
      setTeams(updatedTeams);
      setEditIndex(null);
      setMessage('Entry updated successfully.');
    } else {
      setTeams([...teams, newEntry]);
      setMessage('New entry added successfully.');
    }

    setTeamInput('');
    setRoleInput('');

    setTimeout(() => setMessage(''), 3000);
  };

  const handleEdit = (index) => {
    setTeamInput(teams[index].team);
    setRoleInput(teams[index].role);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setTeams(teams.filter((_, i) => i !== index));
      setMessage('Entry deleted.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleCancelEdit = () => {
    setTeamInput('');
    setRoleInput('');
    setEditIndex(null);
  };

  const handleClearAll = () => {
    if (window.confirm('This will remove all entries. Are you sure?')) {
      setTeams([]);
      setMessage('All entries cleared.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleExportCSV = () => {
    const csvRows = [['Team', 'Role'], ...teams.map(({ team, role }) => [team, role])];
    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'teams_roles.csv';
    a.click();
  };

  const filteredTeams = teams.filter(
    (item) =>
      item.team.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`teams-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="teams-heading">Teams and Roles</h2>
      <p className="teams-description">
        Manage your organizational teams and their roles effectively.
      </p>

     

      {message && <div className="info-msg">{message}</div>}

      <div className="add-form">
        <input
          type="text"
          placeholder="Team Name"
          value={teamInput}
          onChange={(e) => setTeamInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={roleInput}
          onChange={(e) => setRoleInput(e.target.value)}
        />
        <button className="btn add-btn" onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
        {editIndex !== null && (
          <button className="btn cancel-btn" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>

      <div className="search-clear">
        <input
          type="text"
          placeholder="Search by team or role..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn clear-all-btn" onClick={handleClearAll}>
          Clear All
        </button>
        <button className="btn export-btn" onClick={handleExportCSV}>
          Export CSV
        </button>
      </div>

      <div className="summary">
        <p>Total Entries: <strong>{teams.length}</strong></p>
        <p>Filtered Results: <strong>{filteredTeams.length}</strong></p>
      </div>

      {filteredTeams.length === 0 ? (
        <p className="no-data-msg">No teams or roles found.</p>
      ) : (
        <table className="teams-table">
          <thead>
            <tr>
              <th>Team</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.map((item, index) => (
              <tr key={index}>
                <td>{item.team}</td>
                <td>{item.role}</td>
                <td>
                  <button className="btn edit-btn" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn delete-btn" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamsRoles;
