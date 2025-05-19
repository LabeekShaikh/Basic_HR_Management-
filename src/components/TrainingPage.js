import React, { useState } from 'react';

const TrainingPage = () => {
  const [trainings, setTrainings] = useState([
    { id: 1, title: 'React Basics', date: '2025-06-01', description: 'Introduction to React.js' },
    { id: 2, title: 'Effective Communication', date: '2025-06-10', description: 'Improve communication skills' },
  ]);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);

  const validateForm = () => {
    if (!title.trim()) return 'Training title is required';
    if (!date) return 'Training date is required';
    if (!description.trim()) return 'Description is required';
    return '';
  };

  const handleAddOrUpdateTraining = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');

    if (editId) {
      setTrainings(trainings.map(t => (t.id === editId ? { id: editId, title, date, description } : t)));
      setEditId(null);
    } else {
      setTrainings([...trainings, { id: Date.now(), title, date, description }]);
    }

    clearForm();
  };

  const handleEditTraining = (id) => {
    const training = trainings.find(t => t.id === id);
    if (training) {
      setTitle(training.title);
      setDate(training.date);
      setDescription(training.description);
      setEditId(id);
      setError('');
    }
  };

  const handleDeleteTraining = (id) => {
    if (window.confirm('Are you sure you want to delete this training session?')) {
      setTrainings(trainings.filter(training => training.id !== id));
      if (editId === id) clearForm();
    }
  };

  const clearForm = () => {
    setTitle('');
    setDate('');
    setDescription('');
    setEditId(null);
    setError('');
  };

  return (
    <div
      style={{
        maxWidth: '1562px',
        margin: '64px auto',
        padding: 32,
        backgroundColor: '#f9f9fb',
        borderRadius: 10,
        boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 20, color: '#3f51b5' }}>Training Sessions</h2>

      <div style={{ marginBottom: 30 }}>
        <input
          type="text"
          placeholder="Training Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: 10,
            width: '100%',
            marginBottom: 12,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: 10,
            width: '100%',
            marginBottom: 12,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            padding: 10,
            width: '100%',
            marginBottom: 12,
            minHeight: 80,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
            resize: 'vertical',
          }}
        />
        {error && <p style={{ color: 'red', marginBottom: 10 }}>{error}</p>}

        {/* ✅ Updated button layout */}
        <div style={{ display: 'flex', gap: '988px' }}>
          <button
            onClick={handleAddOrUpdateTraining}
            style={{
              flex: '1 1 0%',
              padding: '12px 0px',
              backgroundColor: '#3f51b5',
              color: 'white',
              border: 'none',
              borderRadius: '42px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#303f9f')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#3f51b5')}
          >
            {editId ? 'Update Training' : 'Add Training'}
          </button>
          <button
            onClick={clearForm}
            style={{
              flex: '1 1 0%',
              padding: '12px 0px',
              backgroundColor: '#f50057',
              color: 'white',
              border: 'none',
              borderRadius: '42px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#ab003c')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#f50057')}
          >
            Clear
          </button>
        </div>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {trainings.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#555' }}>No training sessions scheduled.</p>
        ) : (
          trainings.map(({ id, title, date, description }) => (
            <li
              key={id}
              style={{
                backgroundColor: 'white',
                padding: 20,
                marginBottom: 15,
                borderRadius: 8,
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.1)')}
            >
              <h3 style={{ marginBottom: 8, color: '#333' }}>{title}</h3>
              <p style={{ margin: '6px 0', color: '#666' }}>
                <strong>Date:</strong> {date}
              </p>
              <p style={{ marginBottom: 12, color: '#444' }}>{description}</p>
              <div>
                <button
                  onClick={() => handleEditTraining(id)}
                  style={{
                    marginRight: 12,
                    padding: '8px 16px',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: 42,
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#0d47a1')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#1976d2')}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTraining(id)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    borderRadius: 42,
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#9a0007')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#d32f2f')}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TrainingPage;
