"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('kaisier_auth', 'true');
      router.push('/');
    } else {
      alert('Username atau Password salah! (Default: admin / admin123)');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-[#E5D3B3] text-[#4A6278] font-black text-2xl rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            K
          </div>
          <h1 className="text-2xl font-black tracking-wider text-white">KAISIER</h1>
          <p className="text-xs text-slate-400">Masuk untuk mengelola kas toko Mas</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">USERNAME</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-[#E5D3B3]"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">PASSWORD</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-[#E5D3B3]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E5D3B3] text-[#4A6278] py-3 rounded-2xl font-bold text-xs shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Masuk Kasir <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-[10px] text-center text-slate-500">
          Default Login: <span className="text-slate-300 font-mono">admin</span> / <span className="text-slate-300 font-mono">admin123</span>
        </p>
      </div>
    </div>
  );
}
