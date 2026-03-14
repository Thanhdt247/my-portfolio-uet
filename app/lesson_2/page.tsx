import Link from 'next/link';
import Image from 'next/image';

export default function AssignmentPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-teal-50 to-emerald-50 text-teal-950 font-sans pb-20">
      <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-emerald-500 font-bold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Trang chủ
          </Link>
          <span className="font-bold text-emerald-600">Bài tập 2</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* 1. TIÊU ĐỀ & MỤC TIÊU */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h1 className="text-3xl font-black text-teal-900 mb-4">Khai thác dữ liệu và thông tin</h1>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
            <span className="text-xl">🎯</span> Mục tiêu:
          </div>
          <p className="text-teal-800/80 leading-relaxed font-medium">
            Làm chủ các toán tử tìm kiếm nâng cao (Google Dorks) và rèn luyện kỹ năng đánh giá độ tin cậy của thông tin trên môi trường số thông qua bộ tiêu chí đánh giá chuẩn học thuật.
          </p>
        </div>

        {/* 2. QUÁ TRÌNH THỰC HIỆN */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🛠️</span> Quá trình thực hiện
          </h2>
          <div className="space-y-4 text-teal-800/80 font-medium">
            <p>• <strong>Bước 1:</strong> Xác định từ khóa và sử dụng toán tử <code>site:</code>, <code>filetype:</code> để lọc tài liệu chuyên ngành.</p>
            <p>• <strong>Bước 2:</strong> Áp dụng phương pháp đánh giá nguồn tin để chọn lọc ra 3 nguồn tin uy tín nhất.</p>
            <p>• <strong>Bước 3:</strong> Tổng hợp dữ liệu và lập bảng so sánh đối chiếu thông tin.</p>
          </div>
        </div>

        {/* 3. SẢN PHẨM CUỐI CÙNG */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎁</span> Sản phẩm hoàn thiện
          </h2>
          
          {/* Khu vực chèn File PDF hoặc Ảnh kết quả */}
          <div className="bg-slate-50 border-2 border-dashed border-emerald-200 rounded-3xl p-10 text-center">
            <div className="text-4xl mb-4">📄</div>
            <p className="text-teal-600 font-bold mb-4">Bảng đánh giá nguồn tin học thuật</p>
            <a href="#" className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg border-b-4 border-emerald-700">
              Xem chi tiết sản phẩm (PDF)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}