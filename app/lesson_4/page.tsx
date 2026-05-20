'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- CẤU HÌNH NỘI DUNG BÀI TẬP 4 ---
const LESSON_CONFIG = {
  number: "04",
  title: "Vận dụng công cụ trực tuyến trong quản trị dự án nhóm",
  emoji: "🚀",
  pdfFile: "Lesson4/Thuchanh_NguyenVanThanh_4.pdf",
  downloadFile: "Thuchanh_NguyenVanThanh_4.pdf",
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
    title: 'Tổng quan Lựa chọn Công cụ',
    badge: 'Hệ sinh thái',
    detail: 'Để tối ưu hóa hiệu suất cá nhân và sự phối hợp nhóm trong dự án "Ứng dụng của AI và Computer Vision trong quản lý giao thông", một hệ sinh thái công cụ chủ chốt đã được thiết lập.',
    extraType: 'list',
    content: [
      'Quản lý dự án (Trello): Sử dụng để quản trị luồng công việc (Workflow) theo mô hình Kanban.',
      'Soạn thảo & Lưu trữ (Google Docs & Drive): Hệ sinh thái đám mây giúp đồng bộ hóa tài liệu theo thời gian thực.',
      'Giao tiếp nhóm (Messenger): Kênh tương tác nhanh, dễ vận hành và trao đổi thông tin tới mọi người.',
      'Làm nội dung trực quan (PowerPoint, Gamma): Đóng góp làm PowerPoint để tăng tính linh hoạt và chủ động trong quá trình làm việc nhóm.'
    ]
  },
  {
    id: 2,
    title: 'Tương tác và Thảo luận',
    badge: 'Messenger',
    detail: 'Quá trình tương tác, duy trì kết nối và giải quyết các vướng mắc của nhóm 12 thông qua kênh giao tiếp trực tuyến.',
    extraType: 'list',
    content: [
      'Chủ động cập nhật: Báo cáo tiến độ công việc hàng ngày vào kênh chat chung của nhóm.',
      'Giải quyết vấn đề: Tích cực tham gia các cuộc họp nhanh (Stand-up meeting) trực tuyến qua tính năng gọi video/âm thanh để tháo gỡ vướng mắc.'
    ]
  },
  {
    id: 3,
    title: 'Đóng góp Nội dung Trực tiếp',
    badge: 'Google Docs',
    detail: 'Quá trình tham gia soạn thảo và hoàn thiện "Báo cáo Chuyên sâu: Trí tuệ Nhân tạo và Thị giác Máy tính trong Kỷ nguyên Giao thông Thông minh (ITS)".',
    extraType: 'list',
    content: [
      'Lịch sử chỉnh sửa: Đóng góp khoảng 60% nội dung văn bản trực tiếp trên tài liệu chung.',
      'Chế độ Suggestion: Sử dụng tính năng đề xuất để chỉnh sửa ý tưởng của thành viên khác mà không làm mất dữ liệu gốc.',
      'Nhận xét (Comments): Trực tiếp phản hồi vào các đoạn văn bản cần làm rõ, chỉnh sửa nội dung sao cho phù hợp với từng cá nhân trong nhóm.'
    ]
  },
  {
    id: 4,
    title: 'Tổ chức Lưu trữ & Trình bày',
    badge: 'Drive & PPT',
    detail: 'Quy trình quản lý tài nguyên số và đóng góp thiết kế sản phẩm thuyết trình cuối cùng để tăng tính gắn kết cho nhóm.',
    extraType: 'list',
    content: [
      'Tổ chức và lưu trữ khoa học: Sắp xếp các thư mục, tài nguyên, video và nội dung trên Google Drive để mọi thành viên dễ dàng truy cập và đồng bộ.',
      'Đóng góp cá nhân cho nhóm: Thiết kế slide PowerPoint với nội dung trực quan giúp mọi người dễ hình dung, dễ hiểu và tạo sự thích thú trong quá trình làm việc.'
    ]
  },
  {
    id: 5,
    title: 'Phân tích Hiệu quả & Thách thức',
    badge: 'Đánh giá',
    detail: 'Đánh giá thực tế về ưu điểm của các công cụ mang lại, nhận diện những khó khăn và đề xuất giải pháp xử lý triệt để.',
    extraType: 'table',
    tableHeaders: ['Khía cạnh', 'Phân tích chi tiết', 'Giải pháp áp dụng'],
    tableRows: [
      ['Hiệu quả đạt được', 'Tính minh bạch cao (biết rõ vị trí trong tiến trình nhóm). Giảm nhiễu thông tin nhờ phân loại kênh giao tiếp tốt.', 'Học hỏi thêm nhiều kiến thức bổ ích từ các thành viên khác.'],
      ['Thách thức gặp phải', 'Quá tải thông báo: Việc nhận quá nhiều thông báo từ các nền tảng đôi khi gây xao nhãng hiệu suất làm việc.', 'Cần có cơ chế lọc thông tin ưu tiên.'],
      ['Biện pháp khắc phục', 'Thiết lập khung giờ vàng: Đề xuất các khoảng thời gian "tập trung" để giải quyết dứt điểm các vấn đề.', 'Tối ưu hóa thông báo: Dùng tính năng "Do not disturb" khi cần tập trung sâu.']
    ]
  },
  {
    id: 6,
    title: 'Tổng kết & Rút kinh nghiệm',
    badge: 'Kết luận',
    detail: 'Nhìn lại toàn bộ hành trình quản trị dự án, các công cụ không chỉ hỗ trợ hoàn thành công việc mà còn rèn luyện kỹ năng mềm thiết yếu.',
    extraType: 'text',
    content: [
      'Hành trình thực hiện dự án đã mang lại sự thay đổi rõ rệt trong tư duy làm việc và cộng tác nhóm.',
      'Sự kết hợp nhịp nhàng giữa tính kỷ luật trên Trello, sự tỉ mỉ trong Google Docs, óc sáng tạo với PowerPoint, sự kết nối qua Messenger và tính hệ thống của Google Drive đã tạo nên một quy trình làm việc hiệu quả và chuyên nghiệp.'
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