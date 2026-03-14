'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Lesson2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-teal-50 to-emerald-50 text-teal-950 font-sans pb-20">
      <header className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-teal-600 hover:text-emerald-500 font-bold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Trang chủ
          </Link>
          <span className="font-bold text-emerald-600 uppercase tracking-widest text-sm">Bài tập 02</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 mt-12 space-y-8">
        {/* 1. TIÊU ĐỀ & MỤC TIÊU */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h1 className="text-3xl font-black text-teal-900 mb-4 uppercase tracking-tight">Khai thác dữ liệu và thông tin</h1>
          <div className="flex items-center gap-2 text-emerald-600 font-bold mb-4">
            <span className="text-xl">🎯</span> Mục tiêu và Chủ đề nghiên cứu:
          </div>
          <p className="text-teal-800/80 leading-relaxed font-medium">
            <strong>Mục tiêu: </strong>Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.<br></br>
            <strong>Chủ đề: </strong>Phân tích xu hướng phát triển công nghệ <strong>Thiết kế Vi mạch (IC Design)</strong> và Bán dẫn toàn cầu thông qua khai thác dữ liệu học thuật đa nguồn.
          </p>
        </div>

        {/* 2. QUÁ TRÌNH THỰC HIỆN - THEO YÊU CẦU TRONG ẢNH */}
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-emerald-100">
          <h2 className="text-2xl font-bold text-teal-900 mb-8 flex items-center gap-2">
            <span className="text-3xl">🛠️</span> Quy trình khai thác
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-sky-50 rounded-[2rem] border-b-4 border-sky-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-sky-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">01</div>
              <h3 className="font-bold text-sky-900 mb-2 uppercase text-sm tracking-widest">Nguồn học thuật</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Khai thác thông tin từ <strong>Google Scholar</strong> và cơ sở dữ liệu thư viện VNU để thu thập hơn 10 tài liệu, bao gồm 5 bài báo khoa học chuyên ngành.
              </p>
            </div>

            <div className="p-6 bg-emerald-50 rounded-[2rem] border-b-4 border-emerald-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">02</div>
              <h3 className="font-bold text-emerald-900 mb-2 uppercase text-sm tracking-widest">Đánh giá độ tin cậy</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Áp dụng bộ tiêu chí: Tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật để sàng lọc thông tin chất lượng cao.
              </p>
            </div>

            <div className="p-6 bg-teal-50 rounded-[2rem] border-b-4 border-teal-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">03</div>
              <h3 className="font-bold text-teal-900 mb-2 uppercase text-sm tracking-widest">Sách & Tạp chí</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Tổng hợp kiến thức từ các nguồn sách chuyên khảo và tạp chí công nghệ uy tín để có cái nhìn đa chiều về ngành công nghiệp bán dẫn.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-[2rem] border-b-4 border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-slate-500 text-white rounded-xl flex items-center justify-center font-black mb-4 shadow-sm">04</div>
              <h3 className="font-bold text-slate-900 mb-2 uppercase text-sm tracking-widest">Tổng hợp dữ liệu</h3>
              <p className="text-teal-800/70 text-sm leading-relaxed">
                Xây dựng bảng tổng hợp hệ thống hóa các nguồn thông tin đã tìm kiếm kèm theo xếp hạng độ tin cậy dựa trên phân tích chuyên sâu.
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
            <p className="text-teal-600 font-bold mb-4">Báo cáo kèm bảng tổng hợp và danh mục tài liệu tham khảo</p>
            <a href="#" className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg border-b-4 border-emerald-700">
              Xem chi tiết sản phẩm (PDF)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}