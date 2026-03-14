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
          <span className="font-bold text-emerald-600 uppercase tracking-widest text-sm">Bài tập 01</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* 1. TIÊU ĐỀ & MỤC TIÊU */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h1 className="text-3xl font-black text-teal-900 mb-4 uppercase tracking-tight">Máy tính và các thiết bị ngoại vi</h1>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
            <span className="text-xl">🎯</span> Mục tiêu:
          </div>
          <p className="text-teal-800/80 leading-relaxed font-medium">
            Làm chủ các thao tác quản lý tệp tin và thư mục trên hệ điều hành Windows, tối ưu hóa không gian lưu trữ và rèn luyện kỹ năng sử dụng phím tắt chuyên nghiệp.
          </p>
        </div>

        {/* 2. QUÁ TRÌNH THỰC HIỆN - DẠNG CARD */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-8 flex items-center gap-2">
            <span className="text-3xl">🛠️</span> Quá trình thực hiện
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-sky-50 rounded-[2rem] border-b-4 border-sky-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">01</div>
              <h3 className="font-bold text-sky-900 mb-2 uppercase text-sm tracking-widest">Thiết lập Workspace</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Sử dụng <code>Win + E</code> để mở File Explorer và thiết lập thư mục thực hành cá nhân tại ổ đĩa dữ liệu để đảm bảo an toàn cho tệp tin.
              </p>
            </div>

            <div className="p-6 bg-emerald-50 rounded-[2rem] border-b-4 border-emerald-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">02</div>
              <h3 className="font-bold text-emerald-900 mb-2 uppercase text-sm tracking-widest">Cấu trúc thư mục</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Khởi tạo tệp tin văn bản (<code>.txt</code>), thực hiện các thao tác đổi tên (Rename) và tổ chức hệ thống thư mục phân cấp một cách khoa học.
              </p>
            </div>

            <div className="p-6 bg-teal-50 rounded-[2rem] border-b-4 border-teal-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">03</div>
              <h3 className="font-bold text-teal-900 mb-2 uppercase text-sm tracking-widest">Điều phối dữ liệu</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Thực hành điều phối dữ liệu bằng các lệnh <strong>Copy/Cut & Paste</strong> (<code>Ctrl+C/X</code> và <code>Ctrl+V</code>) linh hoạt giữa các thư mục.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-[2rem] border-b-4 border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-slate-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">04</div>
              <h3 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-widest">Quản lý nâng cao</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Xử lý xóa tệp tin, phân biệt giữa Delete thường và <code>Shift + Delete</code>, đồng thời khôi phục dữ liệu từ Recycle Bin khi cần thiết.
              </p>
            </div>
          </div>
        </div>

        {/* 3. SẢN PHẨM HOÀN THIỆN */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎁</span> Sản phẩm hoàn thiện
          </h2>
          
          <div className="bg-slate-50 border-2 border-dashed border-emerald-200 rounded-3xl p-10 text-center">
            <div className="text-4xl mb-4">📄</div>
            <p className="text-teal-600 font-bold mb-4">Báo cáo thực hành Hệ điều hành & Tệp tin</p>
            <a href="#" className="inline-block bg-emerald-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg border-b-4 border-emerald-700">
              Xem chi tiết sản phẩm (PDF)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}