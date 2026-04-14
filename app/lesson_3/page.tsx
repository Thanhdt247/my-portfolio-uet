'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- CẤU HÌNH NỘI DUNG BÀI TẬP 3 ---
const LESSON_CONFIG = {
  number: "03",
  title: "Viết Prompt hiệu quả cho các tác vụ học tập",
  emoji: "🤖",
  pdfFile: "Lesson3/Thuchanh_NguyenVanThanh_3.pdf",
  downloadFile: "Thuchanh_NguyenVanThanh_3.pdf",
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
    title: 'Cơ sở lý luận & Nền tảng LLMs',
    badge: 'Khởi đầu',
    detail: 'Sự bùng nổ của các mô hình ngôn ngữ lớn (LLMs) như GPT-4, Claude và Gemini tạo ra sự chuyển dịch hệ hình sâu sắc. Để tối ưu hóa, cần hiểu cơ chế nội tại của chúng.',
    extraType: 'text',
    content: [
      'Các hệ thống LLM không "hiểu" thông tin theo cơ chế sinh học của não bộ. Chúng giải mã và tái tạo ngôn ngữ thông qua kiến trúc toán học xác suất thống kê dựa trên mạng nơ-ron Transformer và cơ chế Tự chú ý (Self-Attention).',
      'Việc tối ưu hóa cấu trúc câu lệnh (Prompt Engineering) thực chất là hành vi thu hẹp không gian xác suất có chủ đích, ép buộc ma trận chú ý của mô hình tập trung tối đa vào các yêu cầu đã định khung.'
    ]
  },
  {
    id: 2,
    title: 'Khảo sát 1: Tóm tắt Tài liệu',
    badge: 'Tác vụ 1',
    detail: 'Tác vụ tóm tắt học thuật yêu cầu khả năng tinh giản thông tin cao. Thách thức lớn nhất đối với LLMs là "bỏ quên bối cảnh" và xu hướng bảo lưu biệt ngữ phức tạp.',
    extraType: 'table',
    tableHeaders: ['Cấp độ Lệnh', 'Ví dụ Lệnh (Prompt)', 'Kỹ thuật Áp dụng'],
    tableRows: [
      ['Cơ bản', 'Tóm tắt bài báo nghiên cứu sau đây cho tôi: [Nội dung]', 'Lệnh hướng dẫn đơn thuần. Không áp dụng rào cản tham số.'],
      ['Cải tiến', 'Tóm tắt quyển tài liệu này trong giới hạn 200 từ, bao gồm đúng 3 ý chính và 1 câu kết luận.', 'Áp dụng nguyên tắc giới hạn độ dài và yêu cầu cấu trúc số lượng ý.'],
      ['Nâng cao', 'Bạn là nhà nghiên cứu cấp cao... Trích xuất 3 luận điểm... Trình bày dạng bảng...', 'Role Prompting, Delimiters, và Output Formatting (Định dạng đầu ra).']
    ]
  },
  {
    id: 3,
    title: 'Khảo sát 2: Giải thích Khái niệm',
    badge: 'Tác vụ 2',
    detail: 'Khả năng tiếp thu khái niệm mới tỷ lệ thuận với việc liên kết kiến thức nền. Thách thức của LLM là lạm dụng biệt ngữ kỹ thuật, tạo rào cản nhận thức.',
    extraType: 'table',
    tableHeaders: ['Cấp độ Lệnh', 'Ví dụ Lệnh (Prompt)', 'Kỹ thuật Áp dụng'],
    tableRows: [
      ['Cơ bản', 'Giải thích cơ chế hoạt động của kiến trúc mạng nơ-ron Transformer.', 'Truy vấn dữ liệu thuần túy, thiếu hoàn toàn thông tin đối tượng.'],
      ['Cải tiến', 'Bạn là giảng viên. Giải thích cho sinh viên năm nhất khoa học xã hội. Ngôn ngữ đơn giản, có ví dụ.', 'Nguyên tắc bối cảnh đối tượng (SV năm nhất) và bắt buộc ví dụ thực tiễn.'],
      ['Nâng cao', 'Đóng vai người cố vấn. Hướng dẫn tôi qua phương pháp Socrates... Không đưa câu trả lời ngay, chờ tôi trả lời...', 'Vấn đáp Socrates (Socratic dialogue), Đóng vai, và Lệnh Điều kiện hóa.']
    ]
  },
  {
    id: 4,
    title: 'Khảo sát 3: Thiết kế Đánh giá',
    badge: 'Tác vụ 3',
    detail: 'Việc tạo bộ câu hỏi ôn tập không chỉ kiểm tra trí nhớ mà phải thúc đẩy phân tích và sáng tạo. LLM cần định hướng lập luận mẫu để tạo case study sâu sắc.',
    extraType: 'table',
    tableHeaders: ['Cấp độ Lệnh', 'Ví dụ Lệnh (Prompt)', 'Kỹ thuật Áp dụng'],
    tableRows: [
      ['Cơ bản', 'Tạo một bộ câu hỏi ôn tập về Chiến tranh Lạnh.', 'Lệnh mô tả chung, không giới hạn hay phân loại cấu trúc.'],
      ['Cải tiến', 'Tạo 5 câu trắc nghiệm, 3 câu tự luận. Kèm đáp án và giải thích lý do các phương án sai không đúng.', 'Cấu trúc hóa số lượng đầu ra và yêu cầu lập luận ngược.'],
      ['Nâng cao', 'Tạo hệ thống dựa trên thang Bloom. Cung cấp ví dụ mẫu (Q/A). Tạo 3 tình huống tương tác thực tế...', 'Few-Shot Prompting (ví dụ mẫu) và Tình huống tương tác phân tầng.']
    ]
  },
  {
    id: 5,
    title: 'Cơ chế tác động của Prompt',
    badge: 'Meta-Analysis',
    detail: 'Sự chênh lệch chất lượng đầu ra không đến từ lượng kiến thức LLM sở hữu, mà cốt lõi đến từ năng lực kích hoạt các phân vùng dữ liệu tương ứng thông qua lệnh.',
    extraType: 'list',
    content: [
      'Cơ chế Few-Shot Prompting: Cung cấp ví dụ mẫu đóng vai trò như một "mỏ neo" từ vựng, giúp hệ thống phân phối thống kê chính xác, loại trừ lan man.',
      'Kỹ thuật Suy luận Tuần tự (CoT): Yêu cầu AI "suy nghĩ từng bước" buộc mạng nơ-ron tạo ra token trung gian, giảm thiểu ảo giác kiến thức (hallucination).',
      'Ký hiệu và Định dạng: Dùng Delimiters (###, """) tách biệt lệnh và ngữ liệu. Output Formatting (JSON, Markdown) giúp dễ dàng tái sử dụng dữ liệu.',
      'Biến số Temperature: Chỉnh về 0 cho các tác vụ cần logic khắt khe/tóm tắt chính xác. Chỉnh 0.7 - 1.0 để kích thích tính sáng tạo và liên tưởng phong phú.'
    ]
  },
  {
    id: 6,
    title: '5 Nguyên tắc Thiết kế Lệnh',
    badge: 'Cẩm nang',
    detail: 'Dựa trên khảo sát, báo cáo tổng hợp 5 nguyên lý toàn diện (Synthesis of Principles) để thiết lập hệ sinh thái câu lệnh chuyên nghiệp, đạt hiệu suất tối đa.',
    extraType: 'list',
    content: [
      '1. Định hình Bối cảnh Phức hợp (Complex Context Grounding): Cung cấp chi tiết đối tượng mục tiêu, tình huống và mục đích để làm màng lọc xác suất.',
      '2. Nhập vai Chuyên sâu (Persona Adoption): Cung cấp chức danh, kinh nghiệm và thái độ cho AI để can thiệp trực tiếp vào trọng số ưu tiên từ vựng.',
      '3. Cấu trúc hóa Giới hạn (Structural Blueprinting): Thiết lập rào cản độ dài, số lượng mục và cấu trúc trình bày để duy trì tính dễ đọc, không lan man.',
      '4. Lập luận Hỗ trợ Nhận thức (Cognitive Scaffolding): Dùng CoT, RAG hoặc Few-shot cho các vấn đề trừu tượng để mô phỏng tư duy rẽ nhánh của con người.',
      '5. Tinh chỉnh Tương tác (Iterative Refinement): Lặp lại và tinh chỉnh lệnh thông qua các kịch bản đối thoại (như Socrates) biến AI thành đối tác tư duy sâu.'
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
              
              {/* Đã thêm || [] để fix lỗi TypeScript cho Vercel */}
              {steps[currentStep].extraType === 'text' && (
                <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-white shadow-sm">
                  {(steps[currentStep].content || []).map((para, idx) => (
                    <p key={idx} className="text-teal-800 text-base font-medium leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Đã thêm || [] để fix lỗi TypeScript cho Vercel */}
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

              {/* Đã thêm || [] để fix lỗi TypeScript cho Vercel */}
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