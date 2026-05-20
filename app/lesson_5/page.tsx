'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- CẤU HÌNH NỘI DUNG BÀI TẬP 5 ---
const LESSON_CONFIG = {
  number: "05",
  title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
  emoji: "🐳",
  pdfFile: "Lesson5/Thuchanh_NguyenVanThanh_5.pdf",
  downloadFile: "Thuchanh_NguyenVanThanh_5.pdf",
};

// Định nghĩa Type cho TypeScript khỏi báo lỗi khi build Vercel
type Step = {
  id: number;
  title: string;
  badge: string;
  detail: string;
  extraType: 'text' | 'list' | 'table';
  content?: string[]; 
  tableHeaders?: string[]; 
  tableRows?: string[][]; 
};

const steps: Step[] = [
  {
    id: 1,
    title: 'Tổng quan Lựa chọn Công cụ AI',
    badge: 'Hệ sinh thái',
    detail: 'Trong dự án "Bài thuyết trình về loài cá voi", để tối ưu hóa hiệu suất cá nhân, một hệ sinh thái gồm 3 công cụ AI chủ chốt đã được thiết lập và ứng dụng.',
    extraType: 'list',
    content: [
      'Công cụ AI tạo văn bản (Google Gemini): Hỗ trợ lên ý tưởng, cấu trúc và viết nội dung chi tiết cho các slide thuyết trình.',
      'Công cụ AI tạo hình ảnh (Midjourney): Chịu trách nhiệm sáng tạo hình ảnh minh họa và thiết kế giao diện trực quan cho slide.',
      'Công cụ AI hỗ trợ thiết kế (Canva AI): Đóng vai trò tổng hợp, lắp ghép nội dung và hình ảnh để thiết kế slide nhanh chóng.'
    ]
  },
  {
    id: 2,
    title: 'Tạo Văn bản với Google Gemini',
    badge: 'Text Gen',
    detail: 'Sử dụng kỹ thuật Prompt nhập vai để yêu cầu AI đóng vai chuyên gia, từ đó xuất ra nội dung có cấu trúc học thuật và chuyên sâu.',
    extraType: 'list',
    content: [
      'Prompt sử dụng: "Giả sử bạn là một nhà nghiên cứu sinh vật, hãy làm 10 slides thuyết trình về loài cá voi".',
      'Nội dung Slide 1-4: Giới thiệu tổng quan, Phân loại học (Cá voi tấm sừng vs Cá voi có răng), Nguồn gốc tiến hóa và Những con số khổng lồ.',
      'Nội dung Slide 5-7: Giải phẫu (Lớp mỡ Blubber, Echolocation), Tập tính xã hội thông minh (săn mồi lưới bong bóng) và Chu kỳ di cư vĩ đại.',
      'Nội dung Slide 8-10: Vai trò Kỹ sư hệ sinh thái (Whale Pump), Các mối đe dọa (biến đổi khí hậu, rác thải nhựa) và Thông điệp kêu gọi bảo vệ.'
    ]
  },
  {
    id: 3,
    title: 'Sáng tạo Hình ảnh với Midjourney',
    badge: 'Image Gen',
    detail: 'Chuyển hóa các ý tưởng thành tài nguyên đồ họa thông qua công cụ tạo ảnh từ văn bản.',
    extraType: 'text',
    content: [
      'Prompt sử dụng: "Create a cartoon-style whale image".',
      'Cách thực hiện: Thông qua bot Midjourney (Imagine Art), câu lệnh được đưa vào để render ra các hình ảnh cá voi mang phong cách hoạt hình (cartoon-style), tạo cảm giác thân thiện, sinh động cho người xem.',
      'Các hình ảnh này sau đó được tải về để làm nguyên liệu chính cho phần giao diện hình ảnh của bài thuyết trình.'
    ]
  },
  {
    id: 4,
    title: 'Thiết kế Trực quan bằng Canva AI',
    badge: 'Design',
    detail: 'Giai đoạn lắp ghép các tài nguyên đã được AI khởi tạo thành một sản phẩm thuyết trình hoàn chỉnh.',
    extraType: 'text',
    content: [
      'Cách sử dụng: Đưa toàn bộ phần nội dung văn bản 10 slide (do Google Gemini soạn thảo) và các hình ảnh minh họa (do Midjourney tạo ra) vào nền tảng Canva.',
      'Sử dụng các tính năng tự động hóa dàn trang của Canva AI để căn chỉnh bố cục, font chữ, màu sắc, từ đó cho ra mắt sản phẩm trình chiếu cuối cùng một cách nhanh chóng và thẩm mỹ.'
    ]
  },
  {
    id: 5,
    title: 'Đánh giá Hiệu quả của AI',
    badge: 'Đánh giá',
    detail: 'Phân tích đa chiều về những điểm AI thực hiện xuất sắc và những giới hạn hiện tại của công nghệ này trong quy trình làm việc.',
    extraType: 'table',
    tableHeaders: ['Khía cạnh', 'Nhận định chi tiết'],
    tableRows: [
      ['Ưu điểm nổi trội', 'Tối ưu hóa tốc độ, khả năng xử lý dữ liệu khổng lồ để brainstorming và tự động hóa các tác vụ lặp lại (hậu kỳ, định dạng).'],
      ['Hạn chế tồn đọng', 'Thiếu tư duy phản biện, thiếu trải nghiệm cảm xúc thực tế và thường xuyên mắc lỗi logic khi xử lý chi tiết phức tạp/nhất quán dài hạn.'],
      ['Chuyển dịch vai trò', 'Người dùng chuyển từ "người thực thi thủ công" sang "người điều phối và biên tập", tập trung vào thẩm định chiến lược và cá nhân hóa.']
    ]
  },
  {
    id: 6,
    title: 'Góc nhìn Đạo đức Công nghệ',
    badge: 'Ethics',
    detail: 'Khi sử dụng AI tạo sinh, người dùng cần tỉnh táo trước những thách thức về mặt đạo đức xã hội.',
    extraType: 'list',
    content: [
      'Vấn đề bản quyền: Có nguy cơ vi phạm bản quyền khi các mô hình AI sử dụng dữ liệu huấn luyện từ các tác phẩm nghệ sĩ mà không xin phép.',
      'Tác động việc làm: Nguy cơ cạnh tranh và làm mất việc làm đối với các vị trí lao động cấp thấp trong ngành sáng tạo.',
      'Định kiến & Tin giả: Khả năng AI khuếch đại các định kiến xã hội hoặc bị lạm dụng để tạo ra thông tin sai lệch (Deepfake), gây ảnh hưởng tiêu cực đến cộng đồng.'
    ]
  }
];

export default function GenericLessonPage() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 text-teal-950 font-sans pb-12">
      <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-20 border-b border-emerald-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-teal-600 hover:text-emerald-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-teal-900 flex items-center gap-2">
              <span className="text-2xl">{LESSON_CONFIG.emoji}</span> Bài tập {LESSON_CONFIG.number}: {LESSON_CONFIG.title}
            </h1>
          </div>
          <div className="text-sm font-bold text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-4 py-2 rounded-full uppercase tracking-wider hidden md:block text-center shadow-sm">
            Tiến độ: <span className="text-emerald-600">{currentStep + 1}</span> / {steps.length}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        <aside className="lg:col-span-4 flex flex-col gap-6 sticky top-[100px] max-h-[calc(100vh-120px)]">
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
            
            <a 
              href={`/${LESSON_CONFIG.pdfFile}`} 
              download={LESSON_CONFIG.downloadFile}
              className="w-full flex justify-center items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold py-3 rounded-xl transition-colors border border-emerald-200 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Tải xuống bài tập
            </a>
          </div>
        </aside>

        <section className="lg:col-span-8 space-y-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 shadow-sm border-2 border-emerald-100">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Bước {steps[currentStep].id}</span>
                <h2 className="text-3xl font-black text-teal-900 mt-4 tracking-tight">{steps[currentStep].title}</h2>
              </div>
              <div className="bg-sky-50 text-sky-800 px-4 py-2 rounded-2xl border-2 border-sky-100 flex items-center gap-2 flex-shrink-0 shadow-sm">
                <span className="text-lg">💡</span>
                <span className="font-mono font-bold text-sm uppercase tracking-wider">{steps[currentStep].badge}</span>
              </div>
            </div>

            <p className="text-teal-800/80 text-lg font-medium leading-relaxed mb-8 border-l-4 border-emerald-300 pl-5">
              {steps[currentStep].detail}
            </p>

            <div className="space-y-6 bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100/50">
              <h3 className="font-bold text-teal-700 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">📄</span> Chi tiết phân tích
              </h3>
              
              {steps[currentStep].extraType === 'text' && (
                <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-white shadow-sm">
                  {(steps[currentStep].content || []).map((para, idx) => (
                    <p key={idx} className="text-teal-800 text-base font-medium leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {steps[currentStep].extraType === 'list' && (
                <ul className="space-y-3 bg-white p-6 rounded-2xl border-2 border-white shadow-sm list-none">
                  {(steps[currentStep].content || []).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-teal-800 font-medium text-base leading-relaxed">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {steps[currentStep].extraType === 'table' && (
                <div className="overflow-x-auto rounded-xl border border-emerald-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        {(steps[currentStep].tableHeaders || []).map((head, idx) => (
                          <th key={idx} className="p-3 font-bold text-sm tracking-wider whitespace-nowrap border-b-2 border-emerald-700">{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-50">
                      {(steps[currentStep].tableRows || []).map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-emerald-50/50 transition-colors">
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className={`p-3 text-sm text-teal-800 ${cellIdx === 0 ? 'font-bold bg-emerald-50/30 w-1/4' : 'font-medium'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

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