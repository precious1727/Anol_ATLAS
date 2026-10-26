import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
          Student Portal
        </Link>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link to="/" className="hover:text-red-400 transition-colors">Home</Link>
          <Link to="/students" className="hover:text-red-400 transition-colors">Students</Link>
          <Link to="/faculties" className="hover:text-red-400 transition-colors">Faculty</Link>
        </div>
      </div>
    </nav>
  );
}