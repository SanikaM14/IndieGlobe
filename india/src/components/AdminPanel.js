import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [feedback, setFeedback] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/feedback')
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setFeedback(data))
      .catch(() => {});
    fetch('http://localhost:5000/api/content')
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setContent(data))
      .catch(() => {});
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <section className="mb-6">
        <h2 className="font-semibold mb-2">Recent Feedback</h2>
        <ul className="list-disc pl-5">
          {feedback.map((f) => (
            <li key={f.id}>[{f.rating}] {f.comments}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="font-semibold mb-2">Content</h2>
        <ul className="list-disc pl-5">
          {content.map((c) => (
            <li key={c.id}>{c.category} - {c.title}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
