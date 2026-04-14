'use client';
import { useState } from 'react';
import Link from 'next/link';

// --- CẤU HÌNH NỘI DUNG BÀI TẬP 2 ---
const LESSON_CONFIG = {
  number: "02",
  title: "Tìm kiếm & đánh giá thông tin học thuật",
  emoji: "🔬",
  pdfFile: "Thuchanh_NguyenVanThanh_2.pdf",
};

const steps = [
  {
    id: 1,
    title: 'Sự chuyển dịch kiến trúc',
    badge: 'Bức tường bộ nhớ',
    detail: 'Sự phát triển vượt bậc của AI đã đặt ra thách thức chưa từng có. CPU không còn đáp ứng đủ nhu cầu, ngành vi mạch chuyển hướng sang kiến trúc tăng tốc chuyên dụng.',
    extraType: 'text',
    content: [
      'Bản chất các mạng thần kinh bị chi phối bởi phép toán nhân-tích lũy (MAC). Số lượng ALU hạn chế trong CPU khiến việc xử lý song song hàng triệu phép toán cực kỳ kém hiệu quả.',
      'Hiện tượng "bức tường bộ nhớ" (memory wall) xảy ra khi tốc độ di chuyển dữ liệu ngoài chip (DRAM) không theo kịp tính toán. Giải pháp hiện nay là tối đa hóa tái sử dụng dữ liệu và giảm băng thông bằng các khối tính toán song song.'
    ]
  },
  {
    id: 2,
    title: 'So sánh nền tảng phần cứng',
    badge: 'GPU vs FPGA vs ASIC',
    detail: 'Sự lựa chọn giữa GPU, FPGA và ASIC phụ thuộc vào sự đánh đổi giữa hiệu năng, tính linh hoạt và chi phí. Dưới đây là tóm tắt các đặc tính kỹ thuật quan trọng nhất:',
    extraType: 'table',
    tableHeaders: ['Đặc tính', 'GPU', 'FPGA', 'ASIC/NPU'],
    tableRows: [
      ['Kiến Trúc', 'SIMD/SIMT', 'Lập trình được', 'Tùy chỉnh hoàn toàn'],
      ['Linh Hoạt', 'Rất cao', 'Cao', 'Thấp (Cố định)'],
      ['Năng Lượng', 'Trung bình', 'Cao', 'Rất cao'],
      ['Độ Trễ', 'Trung bình', 'Rất thấp', 'Thấp nhất']
    ]
  },
  {
    id: 3,
    title: 'Kiến trúc GPU Blackwell',
    badge: 'Đột phá 4-Bit',
    detail: 'NVIDIA thiết lập tiêu chuẩn mới với kiến trúc Blackwell, kết hợp tinh vi các công nghệ bán dẫn tiên tiến nhất nhằm giải quyết bài toán AI tạo sinh ở quy mô trung tâm dữ liệu.',
    extraType: 'text',
    content: [
      'Blackwell được xây dựng dựa trên cấu trúc hai khuôn (die) lớn nhất hiện nay, kết nối chip-to-chip 10 TB/s giúp vượt qua giới hạn vật lý và duy trì sự thống nhất bộ nhớ.',
      'Cải tiến bước ngoặt: Transformer Engine hỗ trợ tính toán FP4 (4-bit floating point) nhờ microscaling. Việc này tăng gấp đôi hiệu suất mà không làm giảm đáng kể độ chính xác so với thế hệ trước.'
    ]
  },
  {
    id: 4,
    title: 'FPGA và Soft NPU',
    badge: 'Project Brainwave',
    detail: 'Trong khi GPU tập trung xử lý khối lượng lớn (throughput), hệ thống thời gian thực cần độ trễ cực thấp. Microsoft đã dùng NPU mềm trên FPGA cho dự án Project Brainwave.',
    extraType: 'text',
    content: [
      'Điểm độc đáo là toàn bộ tham số mô hình DNN được "ghim" (pinning) thẳng vào bộ nhớ trên chip, loại bỏ hoàn toàn việc truy xuất DRAM ngoài chip vốn chậm chạp.',
      'Trên FPGA Intel Stratix 10, hệ thống đạt 10-35 TFLOPS với độ trễ dưới 4ms cho mô hình RNN lớn, vượt xa các GPU truyền thống khi không sử dụng cơ chế gom nhóm (batching).'
    ]
  },
  {
    id: 5,
    title: 'Thiết kế ASIC chuyên dụng',
    badge: 'Tối ưu hóa FP8',
    detail: 'ASIC đại diện cho giải pháp hiệu quả năng lượng nhất vì mọi bóng bán dẫn đều phục vụ mục đích cụ thể. Chip AI 7nm của IBM là minh chứng điển hình.',
    extraType: 'table',
    tableHeaders: ['Tên Chip', 'Tiến Trình', 'Hiệu Suất', 'Năng Lượng'],
    tableRows: [
      ['IBM 7nm', '7 nm', '25.6 TFLOPS (FP8)', 'Rất cao (Workload-aware)'],
      ['Blackwell', '4 nm (4NP)', '20 PetaFLOPS (FP4)', '25x so với thế hệ Hopper'],
      ['Brainwave', '14 nm', '35 TFLOPS (RNN)', 'Tối ưu cho độ trễ'],
      ['TrueNorth', '28 nm', '-', 'Cực cao (Neuromorphic)']
    ]
  },
  {
    id: 6,
    title: 'Điện toán biên (Edge AI)',
    badge: 'Tiết kiệm năng lượng',
    detail: 'Khi AI tích hợp vào thiết bị cảm biến và IoT, thiết kế vi mạch không chỉ nhắm tới hiệu suất mà phải đạt được mức tiêu thụ năng lượng cực thấp (Ultra-low power).',
    extraType: 'list',
    content: [
      'Cấp độ kiến trúc: Sử dụng các NPU chuyên dụng cho từng loại tác vụ thay vì CPU tổng quát.',
      'Cấp độ mạch điện: Áp dụng kỹ thuật ngắt xung (clock gating) và ngắt nguồn (power gating).',
      'Cấp độ dữ liệu: Sử dụng cắt tỉa (pruning) để loại bỏ trọng số 0, giảm phép tính.',
      'Cấu hình lại động: Kiến trúc EARA kết hợp quản lý đa mức giúp giảm 29% điện năng.'
    ]
  },
  {
    id: 7,
    title: 'An ninh phần cứng',
    badge: 'Lớp bảo vệ cốt lõi',
    detail: 'Sự gia tăng tác vụ AI nhạy cảm đã đưa an ninh phần cứng lên vị trí ưu tiên. Các chip hiện đại tích hợp sẵn Confidential Computing để bảo vệ dữ liệu.',
    extraType: 'text',
    content: [
      'Blackwell sử dụng TEE-I/O đảm bảo sự toàn vẹn cho dữ liệu truyền tải qua NVLink.',
      'Nguyên thể bảo mật PUF (Physically Unclonable Function) tạo ra mã định danh duy nhất từ biến thể vật lý silicon, cung cấp Root of Trust vững chắc. Đồng thời mật mã hậu lượng tử (PQC) cũng đang được thúc đẩy.'
    ]
  },
  {
    id: 8,
    title: 'AI for EDA',
    badge: 'Tự động hóa thiết kế',
    detail: 'Một trong những xu hướng hứa hẹn nhất là việc sử dụng chính AI để thiết kế các thế hệ vi mạch tiếp theo (EDA), xử lý không gian thiết kế khổng lồ.',
    extraType: 'text',
    content: [
      'Các nghiên cứu như AlphaChip ứng dụng học tăng cường (RL) để tối ưu hóa sơ đồ bố trí chip chỉ trong vài giờ thay vì hàng tuần.',
      'Các mô hình ngôn ngữ lớn (LLM) được dùng để hiểu đặc tả tự nhiên và chuyển thành mã RTL, mở ra kỷ nguyên "thiết kế vi mạch hoàn toàn tự động".'
    ]
  }
];

export default function GenericLessonPage() {
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
              <span className="text-2xl">{LESSON_CONFIG.emoji}</span> Bài tập {LESSON_CONFIG.number}: {LESSON_CONFIG.title}
            </h1>
          </div>
          <div className="text-sm font-bold text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-4 py-2 rounded-full uppercase tracking-wider hidden md:block text-center shadow-sm">
            Tiến độ: <span className="text-emerald-600">{currentStep + 1}</span> / {steps.length}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}></div>
      </header>

      <main className="max-w-7xl mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* Sidebar Navigation */}
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

          {/* KHU VỰC TẢI PDF CHUẨN KÍCH CỠ LESSON 1 */}
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
              download={LESSON_CONFIG.pdfFile}
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
                <span className="text-lg">💡</span>
                <span className="font-mono font-bold text-sm uppercase tracking-wider">{steps[currentStep].badge}</span>
              </div>
            </div>

            {/* Đoạn mô tả */}
            <p className="text-teal-800/80 text-lg font-medium leading-relaxed mb-8 border-l-4 border-emerald-300 pl-5">
              {steps[currentStep].detail}
            </p>

            {/* Content Box */}
            <div className="space-y-6 bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100/50">
              <h3 className="font-bold text-teal-700 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-lg">📄</span> Chi tiết phân tích
              </h3>
              
              {/* Render Đoạn văn bản */}
              {steps[currentStep].extraType === 'text' && (
                <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-white shadow-sm">
                  {steps[currentStep].content.map((para, idx) => (
                    <p key={idx} className="text-teal-800 text-base font-medium leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {/* Render Danh sách */}
              {steps[currentStep].extraType === 'list' && (
                <ul className="space-y-3 bg-white p-6 rounded-2xl border-2 border-white shadow-sm list-none">
                  {steps[currentStep].content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-teal-800 font-medium text-base leading-relaxed">
                      <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Render Bảng */}
              {steps[currentStep].extraType === 'table' && (
                <div className="overflow-x-auto rounded-xl border border-emerald-100 bg-white shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-emerald-600 text-white">
                      <tr>
                        {steps[currentStep].tableHeaders.map((head, idx) => (
                          <th key={idx} className="p-3 font-bold text-sm tracking-wider whitespace-nowrap border-b-2 border-emerald-700">{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-50">
                      {steps[currentStep].tableRows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-emerald-50/50 transition-colors">
                          {row.map((cell, cellIdx) => (
                            <td key={cellIdx} className={`p-3 text-sm text-teal-800 ${cellIdx === 0 ? 'font-bold bg-emerald-50/30' : 'font-medium'}`}>
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