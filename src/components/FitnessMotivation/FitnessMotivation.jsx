import React, { useEffect, useState } from "react";
import "./FitnessMotivation.css";

const defaultTasks = [
  { id: 1, title: "🏃 Walk 5,000 steps", points: 20, done: false },
  { id: 2, title: "🧘 Stretch 10 mins", points: 15, done: false },
  { id: 3, title: "💧 Drink 2L Water", points: 10, done: false },
];

const FitnessMotivation = () => {
  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];
  const monthKey = todayKey.slice(0, 7);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || defaultTasks
  );
  const [points, setPoints] = useState(
    Number(localStorage.getItem("points")) || 0
  );
  const [streak, setStreak] = useState(
    Number(localStorage.getItem("streak")) || 0
  );
  const [completedDates, setCompletedDates] = useState(
    JSON.parse(localStorage.getItem("completedDates")) || []
  );

  const [newTask, setNewTask] = useState("");
  const [menuOpen, setMenuOpen] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  // 🔹 POPUP STATES
  const [showBadge, setShowBadge] = useState(false);
  const [showPoints, setShowPoints] = useState(false);
  const [showStreak, setShowStreak] = useState(false);

  /* 🌙 DAILY RESET */
  useEffect(() => {
    const lastDate = localStorage.getItem("lastDate");
    if (lastDate !== todayKey) {
      setTasks(prev => prev.map(t => ({ ...t, done: false })));
      localStorage.setItem("lastDate", todayKey);
    }
  }, [todayKey]);

  /* ✅ COMPLETE TASK */
  const completeTask = (id) => {
    let updated = false;

    const updatedTasks = tasks.map(task => {
      if (task.id === id && !task.done) {
        setPoints(p => p + task.points);
        updated = true;
        return { ...task, done: true };
      }
      return task;
    });

    setTasks(updatedTasks);

    if (updated && updatedTasks.every(t => t.done)) {
      if (!completedDates.includes(todayKey)) {
        setCompletedDates([...completedDates, todayKey]);
        setStreak(s => s + 1);
      }
    }
  };

  /* ➕ ADD TASK */
  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask, points: 10, done: false }
    ]);
    setNewTask("");
  };

  /* ✏ EDIT TASK */
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.title);
    setMenuOpen(null);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    setTasks(tasks.map(t => t.id === id ? { ...t, title: editText } : t));
    setEditingId(null);
  };

  /* 🗑 DELETE TASK */
  const requestDelete = (id) => {
    setConfirmDeleteId(id);
    setMenuOpen(null);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter(t => t.id !== confirmDeleteId));
    setConfirmDeleteId(null);
  };

  /* 🏅 BADGE LOGIC */
  const badge =
    streak >= 500 ? "💎 Diamond" :
    streak >= 365 ? "🥇 Gold" :
    streak >= 30 ? "🥈 Silver" :
    streak >= 7 ? "🥉 Bronze" : "—";

  /* 📊 MONTHLY PROGRESS */
  const monthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const completedThisMonth = completedDates.filter(d => d.startsWith(monthKey)).length;
  const monthlyProgress = Math.round((completedThisMonth / monthDays) * 100);

  /* 💾 SAVE */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("points", points);
    localStorage.setItem("streak", streak);
    localStorage.setItem("completedDates", JSON.stringify(completedDates));
  }, [tasks, points, streak, completedDates]);

  return (
    <div className="fitness-wrapper">
      <div className="fitness-container">

        <h1 className="title">🔥 Fitness Motivation</h1>
        <p className="date">{today.toDateString()}</p>

        {/* STATS */}
        <div className="stats">
          <div className="stat-card" onClick={() => setShowPoints(true)}>
            ⭐ Points <span>{points}</span>
          </div>

          <div className="stat-card" onClick={() => setShowStreak(true)}>
            🔥 Streak <span>{streak} days</span>
          </div>

          <div className="stat-card" onClick={() => setShowBadge(true)}>
            🏅 Badge <span>{badge}</span>
          </div>
        </div>

        {/* MONTHLY */}
        <div className="monthly">
          <h2>📆 Monthly Progress</h2>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${monthlyProgress}%` }} />
          </div>
          <p>{completedThisMonth}/{monthDays} days</p>
        </div>

        {/* TASKS */}
<div className="task-box">
  {tasks.map(task => (
    <div
      key={task.id}
      className={`task-card ${task.done ? "done" : ""}`}
      onClick={() => {
  if (editingId !== task.id) {
    completeTask(task.id);
  }
}}
    >
      <div className="task-content">
        {editingId === task.id ? (
          <input
  className="task-edit-input"
  value={editText}
  onChange={e => setEditText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") saveEdit(task.id);
    if (e.key === "Escape") setEditingId(null);
  }}
  onClick={e => e.stopPropagation()}
  autoFocus
/>
        ) : (
          <span className="task-title">{task.title}</span>
        )}

        <span className="task-points">+{task.points}</span>
      </div>

      <div
        className="task-menu-wrapper"
        onClick={e => e.stopPropagation()}
      >
        <span
          className="dots-btn"
          onClick={() =>
            setMenuOpen(menuOpen === task.id ? null : task.id)
          }
        >
          ⋮
        </span>

        {menuOpen === task.id && (
          <div className="task-menu modern">
            <button
  onClick={(e) => {
    e.stopPropagation();
    startEdit(task);
  }}
>
  ✏ Edit
</button>

<button
  className="danger"
  onClick={(e) => {
    e.stopPropagation();
    requestDelete(task.id);
  }}
>
  🗑 Delete
</button>
          </div>
        )}
      </div>
    </div>
  ))}
</div>

        {/* ADD TASK */}
        <div className="add-task">
          <input
            placeholder="Add new task"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      {/* DELETE CONFIRMATION */}
      {confirmDeleteId && (
        <div className="overlay" onClick={() => setConfirmDeleteId(null)}>
          <div className="popup" onClick={e => e.stopPropagation()}>
            <h2>🗑 Delete Task?</h2>
            <p>This action cannot be undone.</p>
            <div className="confirm-actions">
              <button className="cancel-btn" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
              <button className="delete-btn" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* INFO POPUPS */}
      {(showBadge || showPoints || showStreak) && (
        <div className="overlay" onClick={() => {
          setShowBadge(false);
          setShowPoints(false);
          setShowStreak(false);
        }}>
          <div className="popup" onClick={e => e.stopPropagation()}>

            {showBadge && (
              <>
                <h2>🏅 Badge System</h2>
                <ul>
                  <li>🥉 Bronze – 7 days</li>
                  <li>🥈 Silver – 30 days</li>
                  <li>🥇 Gold – 365 days</li>
                  <li>💎 Diamond – 500 days</li>
                </ul>
              </>
            )}

            {showPoints && (
              <>
                <h2>⭐ Points</h2>
                <p>Earn points by completing tasks.</p>
              </>
            )}

            {showStreak && (
              <>
                <h2>🔥 Streak</h2>
                <p>Complete all tasks daily to maintain streak.</p>
              </>
            )}

            <div
  className="back-icon"
  title="Back"
  onClick={() => {
    setShowBadge(false);
    setShowPoints(false);
    setShowStreak(false);
  }}
>
  ←
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitnessMotivation;