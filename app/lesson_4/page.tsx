'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Lesson1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 text-teal-950 font-sans pb-20">
      <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-emerald-500 font-bold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Trang chủ
          </Link>
          <span className="font-bold text-emerald-600 uppercase tracking-widest text-sm">Bài tập 03</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* 1. TIÊU ĐỀ & MỤC TIÊU */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h1 className="text-3xl font-black text-teal-900 mb-4 uppercase tracking-tight">Đang cập nhật ...</h1>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
            <span className="text-xl">🎯</span> Mục tiêu:
          </div>
          <p className="text-teal-800/80 leading-relaxed font-medium">
            Đang cập nhật ...
          </p>
        </div>
      </main>
    </div>
  );
}