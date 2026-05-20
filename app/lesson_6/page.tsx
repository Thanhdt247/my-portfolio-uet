'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- CẤU HÌNH NỘI DUNG BÀI TẬP 6 ---
const LESSON_CONFIG = {
  number: "06",
  title: "Khung Đạo đức, Chính sách và Ứng dụng AI trong Học thuật",
  emoji: "⚖️",
  pdfFile: "Lesson6/Thuchanh_NguyenVanThanh_6.pdf",
  downloadFile: "Thuchanh_NguyenVanThanh_6.pdf",
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
    title: 'Chính sách & Liêm chính Học thuật',
    badge: 'Policy',
    detail: 'ĐHQGHN (VNU) và UET định hướng tích hợp AI có kiểm soát, đề cao năng lực số thay vì cấm đoán, đồng thời thiết lập quy định nghiêm ngặt về liêm chính học thuật.',
    extraType: 'list',
    content: [
      'Định hướng chiến lược: VNU triển khai học phần mới VNU1001 (Nhập môn Công nghệ số và ứng dụng AI) để trang bị kỹ năng và giáo dục đạo đức không gian mạng.',
      'Chế tài xử lý vi phạm: Các hành vi đạo văn do lạm dụng AI sẽ bị xử lý nghiêm (trừ điểm, hủy bài, đình chỉ học). Các văn bản có tỷ lệ AI tạo ra vượt mức 90% sẽ bị đưa lên Hội đồng xem xét.',
      'Hệ thống DoIT: Nền tảng đối chiếu tài liệu trực tuyến của UET/VNU đóng vai trò then chốt giúp sinh viên kiểm tra tỷ lệ trùng lặp và nguồn gốc tài liệu trước khi nộp.'
    ]
  },
  {
    id: 2,
    title: 'Thực nghiệm: Tổng hợp Tài liệu',
    badge: 'Experiment',
    detail: 'Quá trình thực nghiệm sử dụng LLM (Gemini) vào nhiệm vụ tổng hợp tài liệu chuyên sâu với chủ đề: "An ninh Internet Vạn vật (IoT Security)".',
    extraType: 'table',
    tableHeaders: ['Vòng Truy vấn', 'Câu lệnh thiết kế (Prompt)', 'Đầu ra hệ thống AI (Output)'],
    tableRows: [
      ['Vòng 1: Phân tích Lỗ hổng', 'Đóng vai chuyên gia an ninh mạng độc lập. Dựa trên tài liệu IEEE/MDPI (2024-2025), tổng hợp lỗ hổng IoT theo mô hình 3 lớp...', 'Cung cấp phân tích cấu trúc: Lớp Cảm nhận (bị thao túng phần cứng), Lớp Mạng (DDoS), Lớp Ứng dụng (Zero-day).'],
      ['Vòng 2: Phân tích Giải pháp', 'Phân tích cách công nghệ AI tiên tiến (Federated Learning, XAI, GANs) xây dựng hệ thống phòng thủ IoT. Cung cấp cơ chế & lợi ích.', 'Hệ thống hóa giải pháp: Federated Learning (bảo vệ quyền riêng tư), XAI (minh bạch hóa IDS), GANs (mô phỏng tấn công).']
    ]
  },
  {
    id: 3,
    title: 'Giám sát & Tích hợp (Human Oversight)',
    badge: 'Human-in-the-loop',
    detail: 'Việc tiếp nhận toàn bộ nội dung do AI sinh ra mang rủi ro "ảo giác" rất cao. Cần có sự can thiệp của con người để bảo vệ tính toàn vẹn của nghiên cứu.',
    extraType: 'list',
    content: [
      'Kiểm chứng (Fact-checking): Đối chiếu chéo số liệu AI cung cấp với báo cáo thực tế (VD: xác nhận số liệu từ báo cáo Nozomi Networks 2025).',
      'Bổ sung kiến thức chuyên môn: Chủ động tích hợp thêm tài liệu tiêu chuẩn ISO/IEC 30141 và NIST 8259 để lấp đầy lỗ hổng bối cảnh quản trị rủi ro mà AI bỏ sót.',
      'Bảo vệ tiếng nói cá nhân: Viết lại toàn bộ (paraphrasing) văn phong máy móc cứng nhắc của AI thành dạng văn xuôi tường thuật học thuật mượt mà.'
    ]
  },
  {
    id: 4,
    title: 'Tác động Nhận thức của AI',
    badge: 'Cognitive',
    detail: 'AI định hình lại thói quen tư duy của sinh viên. Tùy thuộc vào chiến lược, sự chia sẻ "tải trọng nhận thức" có thể mang tính hủy diệt hoặc nâng tầm.',
    extraType: 'table',
    tableHeaders: ['Loại hình Tương tác', 'Đặc điểm Nhận thức', 'Hệ quả Học thuật'],
    tableRows: [
      ['Giao phó Cơ học (System 1 Habit)', 'Tự động hóa giải pháp, né tránh tư duy phức tạp, chấp nhận mọi kết quả đầu ra vô điều kiện từ AI.', 'Bào mòn tư duy phản biện, thui chột sự sáng tạo và gia tăng rủi ro gian lận hợp đồng (contract cheating).'],
      ['Sử dụng Chuyển đổi (Dialogic Use)', 'Phản biện liên tục với đầu ra, tái cấu trúc logic, dùng AI để khám phá các giả thuyết mới (frame generation).', 'Nâng cao kỹ năng lập luận, mở rộng năng lực giải quyết vấn đề và củng cố sự tự tin trong nghiên cứu.']
    ]
  },
  {
    id: 5,
    title: 'Bộ 7 Nguyên tắc Trách nhiệm',
    badge: 'Principles',
    detail: 'Hệ trục giá trị nội tâm đóng vai trò làm kim chỉ nam đảm bảo việc khai thác công nghệ không đi ngược lại mục đích tối thượng của giáo dục.',
    extraType: 'list',
    content: [
      '1. Bảo toàn tư duy độc lập: Không nhượng quyền tư duy phân tích, định hướng cốt lõi cho thuật toán.',
      '2. Trách nhiệm giải trình vô điều kiện: Người đứng tên bài viết chịu 100% trách nhiệm cho lỗi sai, dữ liệu giả hay vi phạm bản quyền do AI sinh ra.',
      '3. Minh bạch & Ghi công tuyệt đối: Mọi hình thức can thiệp của AI (viết nháp, chỉnh sửa) phải được trích dẫn, công bố rõ ràng.',
      '4. Kiểm chứng kép (Fact-Checking): Thông tin từ AI là "chưa xác thực" cho đến khi đối chiếu với nguồn đáng tin cậy.',
      '5. Bảo mật dữ liệu: Tuyệt đối không đưa dữ liệu chưa công bố, mã nguồn riêng hay thông tin cá nhân vào nền tảng AI.',
      '6. Chống ảo tưởng năng lực: Phân định rõ giữa sức mạnh của công cụ và kỹ năng thực tế của bản thân.',
      '7. Tuân thủ thể chế: Chấp hành tuyệt đối các quy định, ngưỡng giới hạn phần trăm AI do trường đại học đề ra.'
    ]
  },
  {
    id: 6,
    title: 'Thiết kế Trực quan (Infographic)',
    badge: 'Infographic',
    detail: 'Dự án hoàn thiện bao gồm việc thiết kế Infographic "Sử dụng AI có trách nhiệm trong học thuật" nhằm cô đọng hóa các nguyên tắc.',
    extraType: 'text',
    content: [
      'Infographic được chia thành 6 mảng chính để truyền tải thông điệp nhanh chóng, bao gồm: Nguyên tắc cốt lõi (liêm chính, trung thực, công bằng), Hướng dẫn người dùng, Quy chuẩn trích dẫn nguồn, Phát triển tư duy phản biện, Cảnh báo lạm dụng/gian lận, và Vai trò định hướng của nhà trường.',
      'Sản phẩm này đóng vai trò như một bảng hướng dẫn trực quan (visual guide) giúp sinh viên dễ dàng ghi nhớ và tuân thủ các chuẩn mực đạo đức mới.'
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