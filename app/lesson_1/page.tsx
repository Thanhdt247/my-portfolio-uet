'use client';
import { useState } from 'react';
import Link from 'next/link';

const steps = [
  { id: 1, title: 'Mở File Explorer', detail: 'Nhấn Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.', hotkey: 'Win + E', images: ['/Lesson1/1.png'] },
  { id: 2, title: 'Truy cập ổ đĩa/thư mục', detail: 'Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:).', hotkey: 'Double Click', images: ['/Lesson1/2.png'] },
  { id: 3, title: 'Tạo thư mục mới', detail: 'Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA).', hotkey: 'Ctrl + Shift + N', images: ['/Lesson1/3.png', '/Lesson1/4.png'] },
  { id: 4, title: 'Vào thư mục vừa tạo', detail: 'Nhấp đúp vào thư mục ThucHanh_hotensinhvien để bắt đầu làm việc bên trong nó.', hotkey: 'Enter', images: ['/Lesson1/4.png'] },
  { id: 5, title: 'Tạo tệp tin văn bản', detail: 'Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là Ghi Chu.txt.', hotkey: 'New -> Text Doc', images: ['/Lesson1/5.png', '/Lesson1/6.png'] },
  { id: 6, title: 'Đổi tên tệp tin', detail: 'Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChu Quan Trong.txt.', hotkey: 'F2', images: ['/Lesson1/7.png', '/Lesson1/8.png'] },
  { id: 7, title: 'Tạo thư mục con', detail: 'Trong thư mục ThucHanh, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.', hotkey: 'New Folder', images: ['/Lesson1/9.png', '/Lesson1/10.png'] },
  { id: 8, title: 'Sao chép tệp tin (Copy & Paste)', detail: 'Nhấp chuột phải vào tệp GhiChu QuanTrong.txt -> Copy. Vào thư mục TaiLieu, nhấp chuột phải -> Paste.', hotkey: 'Ctrl + C -> Ctrl + V', images: ['/Lesson1/11.png', '/Lesson1/12.png', '/Lesson1/13.png'] },
  { id: 9, title: 'Di chuyển tệp tin (Cut & Paste)', detail: 'Tạo tệp mới tên DiChuyen.txt. Nhấp chuột phải -> Cut. Vào TaiLieu -> Paste. Tệp gốc sẽ biến mất.', hotkey: 'Ctrl + X -> Ctrl + V', images: ['/Lesson1/14.png', '/Lesson1/15.png', '/Lesson1/16.png'] },
  { id: 10, title: 'Xóa tệp tin', detail: 'Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChu Quan Trong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác.', hotkey: 'Delete', images: ['/Lesson1/17.png', '/Lesson1/18.png'] },
  { id: 11, title: 'Xóa vĩnh viễn', detail: 'Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.', hotkey: 'Shift + Delete', images: ['/Lesson1/20.png'] },
  { id: 12, title: 'Khôi phục từ Thùng rác', detail: 'Tìm Recycle Bin trên màn hình, mở lên. Nhấp chuột phải vào tệp đã xóa và chọn Restore. Tệp sẽ quay lại vị trí cũ.', hotkey: 'Right Click -> Restore', images: [ '/Lesson1/21.png'] },
];

export default function InteractiveLesson() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 text-teal-950 font-sans pb-12">
      {/* Header - Glassmorphism */}
      <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-20 border-b border-emerald-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-teal-600 hover:text-emerald-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-teal-900 flex items-center gap-2">
              <span className="text-2xl">🌿</span> Bài tập 01: Thao tác cơ bản với tệp tin & thư mục
            </h1>
          </div>
          <div className="text-sm font-bold text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-4 py-2 rounded-full uppercase tracking-wider hidden md:block">
            Tiến độ: <span className="text-emerald-600">{currentStep + 1}</span> / {steps.length}
          </div>
        </div>
        
        {/* Progress Bar (Nature Theme) */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-[100px] max-h-[calc(100vh-120px)]">
          {/* Menu các bước */}
          <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-grow pb-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all border-2 text-left backdrop-blur-sm ${
                  currentStep === index 
                  ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-200/50 scale-[1.02] z-10 relative' 
                  : 'bg-white/60 border-transparent text-teal-800 hover:border-emerald-200 hover:bg-white/90'
                }`}
              >
                <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow-sm ${currentStep === index ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700'}`}>
                  {step.id < 10 ? `0${step.id}` : step.id}
                </span>
                <span className="font-bold text-sm leading-tight">{step.title}</span>
              </button>
            ))}
          </div>

          {/* KHU VỰC TẢI PDF CHO GIÁO VIÊN */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] border-2 border-emerald-200 shadow-sm shrink-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center text-2xl shadow-sm border border-red-100">
                📄
              </div>
              <div>
                <h4 className="font-bold text-teal-900">File báo cáo (.pdf)</h4>
                <p className="text-xs font-medium text-teal-600">Dành cho giảng viên chấm điểm</p>
              </div>
            </div>
            
            {/* Thuộc tính download sẽ tải file thay vì mở sang tab mới */}
            <a 
              href="Lesson1/Thuchanh_NguyenVanThanh.pdf" 
              download="Thuchanh_NguyenVanThanh.pdf"
              className="w-full flex justify-center items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-3 rounded-xl transition-colors border border-emerald-200 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Tải xuống bài tập
            </a>
          </div>
        </aside>

        {/* Content Area */}
        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 shadow-sm border-2 border-emerald-100">
            {/* Step Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Bước {steps[currentStep].id}</span>
                <h2 className="text-3xl font-black text-teal-900 mt-4 tracking-tight">{steps[currentStep].title}</h2>
              </div>
              <div className="bg-sky-50 text-sky-800 px-4 py-2 rounded-2xl border-2 border-sky-100 flex items-center gap-2 flex-shrink-0 shadow-sm">
                <span className="text-lg">⌨️</span>
                <span className="font-mono font-bold text-sm">{steps[currentStep].hotkey}</span>
              </div>
            </div>

            <p className="text-teal-800/80 text-lg font-medium leading-relaxed mb-8 border-l-4 border-emerald-300 pl-5">
              {steps[currentStep].detail}
            </p>

            {/* Images Area */}
            <div className="space-y-6 bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100/50">
              <h3 className="font-bold text-teal-700 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">🖼️</span> Hình minh họa thực tế
              </h3>
              
              {steps[currentStep].images.map((imgSrc, idx) => (
                <div key={idx} className="relative rounded-2xl overflow-hidden shadow-sm border-2 border-white bg-white group">
                  <img 
                    src={imgSrc} 
                    alt={`Minh họa bước ${steps[currentStep].id} - Ảnh ${idx + 1}`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-10 pt-8 border-t-2 border-emerald-50">
              <button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="px-6 py-3 rounded-xl font-bold text-teal-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all disabled:opacity-0"
              >
                ← Bước trước
              </button>
              <button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg border-b-4 border-emerald-700 active:translate-y-1 active:border-b-0 active:mt-1"
              >
                {currentStep === steps.length - 1 ? '🎉 Hoàn thành' : 'Bước tiếp theo →'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}