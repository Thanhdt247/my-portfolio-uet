'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
const [isOpen, setIsOpen] = useState(false);
const assignments = [
    { id: 1, title: "Máy tính & Thiết bị ngoại vi", desc: "Thao tác tệp tin và quản lý hệ thống máy tính." },
    { id: 2, title: "Khai thác dữ liệu & Thông tin", desc: "Kỹ năng tìm kiếm và đánh giá nguồn tin học thuật." },
    { id: 3, title: "Tổng quan về Trí tuệ nhân tạo", desc: "Ứng dụng AI và kỹ năng Prompt Engineering." },
    { id: 4, title: "Giao tiếp & Hợp tác số", desc: "Làm việc nhóm và trao đổi trong môi trường số." },
    { id: 5, title: "Sáng tạo nội dung số", desc: "Thiết kế và xây dựng sản phẩm nội dung đa phương tiện." },
    { id: 6, title: "An toàn & Liêm chính học thuật", desc: "Bảo mật thông tin và đạo đức trong môi trường số." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-teal-50 to-emerald-100 text-teal-950 font-sans pt-16 selection:bg-emerald-300 selection:text-teal-900">
      
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md shadow-sm z-50 border-b-2 border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-extrabold text-2xl text-emerald-600 tracking-tight flex items-center gap-2">
            <span className="text-3xl">🍃</span> Portfolio.
          </div>
          
          {/* MENU ĐÃ CẬP NHẬT TỔNG KẾT */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-teal-700 uppercase tracking-wider">
            <a href="#trang-chu" className="hover:text-emerald-500 hover:-translate-y-0.5 transition-transform">Trang chủ</a>
            <a href="#kinh-nghiem" className="hover:text-emerald-500 hover:-translate-y-0.5 transition-transform">Kinh nghiệm</a>
            <a href="#bai-tap" className="hover:text-emerald-500 hover:-translate-y-0.5 transition-transform">Bài tập</a>
            
            {/* Mục Tổng kết mới đây Thành ơi */}
            <a href="#tong-ket" className="hover:text-emerald-500 hover:-translate-y-0.5 transition-transform text-emerald-600 font-black">Tổng kết</a> 
            
            <a href="#lien-he" className="hover:text-emerald-500 hover:-translate-y-0.5 transition-transform">Liên hệ</a>
          </div>
        </div>
      </nav>

      <section id="trang-chu" className="max-w-6xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black text-teal-900 mb-6 leading-tight drop-shadow-sm">
            Chào thầy cô và các bạn, <br/>
            <span className="text-emerald-600 drop-shadow-md">mình là Thành ✌️</span>
          </h1>
          <p className="text-lg text-teal-800/80 mb-8 leading-relaxed font-medium">
            Mình hiện đang là sinh viên khoa <strong>Điện tử viễn thông tại VNU-UET</strong>. 
            Đây là không gian số nơi mình lưu trữ các kết quả thực hành từ môn Nhập môn Công nghệ số, 
            đồng thời chia sẻ một chút về hành trình học tập và sở thích vọc vạch công nghệ.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#bai-tap" className="bg-emerald-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-400 border-b-4 border-emerald-700 hover:border-emerald-500 active:translate-y-1 active:border-b-0 transition-all">
              Xem Bài Tập 🚀
            </a>
            <a href="#lien-he" className="bg-white text-teal-700 px-8 py-3 rounded-2xl font-bold hover:bg-sky-50 border-b-4 border-teal-200 hover:border-sky-200 active:translate-y-1 active:border-b-0 transition-all">
              Kết nối
            </a>
          </div>
        </div>
        
        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-300 rounded-[3rem] opacity-70 animate-spin-slow"></div>
          <div className="absolute inset-0 bg-emerald-300 rounded-[3rem] opacity-70 animate-spin-reverse"></div>
          <div className="absolute inset-3 md:inset-4 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-xl bg-white z-10 group">
            <Image
              src="/favicon.jpg" 
              alt="Ảnh đại diện của Thành"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </div>
      </section>

      <section id="kinh-nghiem" className="bg-white/40 backdrop-blur-sm py-24 border-y-2 border-emerald-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center text-teal-900 drop-shadow-sm">Kinh nghiệm & Kỹ năng</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/80 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm border-b-2 border-sky-200">🎓</div>
              <h3 className="text-xl font-bold text-teal-900 mb-3">Học thuật (VNU-UET)</h3>
              <p className="text-teal-800/70 font-medium leading-relaxed">
                Đang xây dựng nền tảng vững chắc với các môn Giải tích, Vật lý và Mạch điện tử. 
                Đặt mục tiêu GPA ổn định và rèn luyện tư duy logic chuẩn kỹ sư.
              </p>
            </div>
            <div className="p-8 bg-white/80 rounded-3xl border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-sm border-b-2 border-emerald-200">⚡</div>
              <h3 className="text-xl font-bold text-teal-900 mb-3">Kỹ năng Số & Công nghệ</h3>
              <p className="text-teal-800/70 font-medium leading-relaxed">
                Ứng dụng AI, Prompt Engineering vào việc học. Đam mê tự tìm tòi lập trình, 
                thiết lập máy chủ và quản lý hệ thống dữ liệu cá nhân.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="bai-tap" className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-teal-900 mb-4 drop-shadow-sm">Danh sách Bài tập</h2>
          <p className="text-teal-700 font-medium">Các sản phẩm thực hành được tổng hợp qua từng chương học</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((item) => (
            <Link 
              key={item.id} 
              href={`/lesson_${item.id}`}
              className="group bg-white p-6 rounded-3xl shadow-sm border-2 border-emerald-100 hover:border-sky-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-sky-100 rounded-full group-hover:scale-150 transition-transform duration-500 -z-10"></div>
              
              <div className="text-sm font-black text-emerald-500 mb-3 tracking-wider">BÀI TẬP {item.id}</div>
              <h3 className="text-xl font-bold mb-3 text-teal-900 group-hover:text-sky-600">{item.title}</h3>
              <p className="text-teal-700/80 font-medium text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center text-sky-600 font-bold text-sm bg-sky-50 inline-flex px-4 py-2 rounded-xl">
                Xem chi tiết 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="tong-ket" className="bg-emerald-50/50 py-24 border-t-2 border-emerald-100 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-teal-900 mb-4 drop-shadow-sm">Project Conclusion 🌿</h2>
            <p className="text-teal-700 font-medium">Nhìn lại quá trình xây dựng Digital Portfolio</p>
          </div>

          <div className="space-y-10">
            
            {/* 1. Trải nghiệm và cảm nhận cá nhân */}
            <div className="bg-white p-8 rounded-[2.5rem] border-b-8 border-emerald-200 shadow-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold text-teal-900 mb-4 flex items-center gap-3">
                <span className="bg-emerald-100 p-2 rounded-xl text-2xl">🌱</span>
                Personal Experience
              </h3>
              <p className="text-teal-800/80 leading-relaxed font-medium">
                Quá trình thực hiện dự án Portfolio này là một hành trình thú vị từ những dòng code Next.js đầu tiên đến khi hoàn thiện giao diện sinh động. Mình cảm nhận được sức mạnh của việc tự tay xây dựng "ngôi nhà số" cho bản thân, không chỉ là làm bài tập mà còn là cách để mình hệ thống lại tư duy của một sinh viên kỹ thuật tại <strong>VNU-UET</strong>.
              </p>
            </div>

            {/* 2. Kiến thức và kỹ năng quan trọng nhất */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-[2rem] border-b-8 border-sky-200 shadow-md">
                <h4 className="font-bold text-sky-800 mb-3 flex items-center gap-2 uppercase text-sm tracking-widest">
                  Technical Skills
                </h4>
                <ul className="text-teal-800/80 text-sm space-y-2 font-medium">
                  <li>• Biết cơ bản Framework Next.js & Tailwind CSS.</li>
                  <li>• Quản lý mã nguồn và cấu trúc thư mục chuẩn.</li>
                  <li>• Tối ưu hóa hiệu ứng đồ họa (Animations).</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border-b-8 border-orange-200 shadow-md">
                <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2 uppercase text-sm tracking-widest">
                  Digital Literacy
                </h4>
                <ul className="text-teal-800/80 text-sm space-y-2 font-medium">
                  <li>• Kỹ năng Prompt Engineering với AI.</li>
                  <li>• Đánh giá và lọc thông tin học thuật.</li>
                  <li>• Quy tắc đặt tên tệp tin chuyên nghiệp.</li>
                </ul>
              </div>
            </div>

            {/* 3. Điểm tâm đắc & Thách thức */}
            <div className="bg-teal-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl rotate-12">✨</div>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h3 className="text-emerald-400 font-bold text-xl mb-4 flex items-center gap-2">
                    🏆 My Favorites
                  </h3>
                  <p className="text-emerald-50/80 text-sm leading-relaxed italic">
                    Điều mình tâm đắc nhất chính là việc kết hợp được phong cách "hoạt hình thiên nhiên" vào một dự án kỹ thuật. Hiệu ứng viền xoay quanh ảnh đại diện là điểm nhấn giúp Portfolio của mình không bị hòa lẫn với bất kỳ ai.
                  </p>
                </div>
                <div>
                  <h3 className="text-orange-400 font-bold text-xl mb-4 flex items-center gap-2">
                    🧩 Challenges
                  </h3>
                  <p className="text-orange-50/80 text-sm leading-relaxed italic">
                    Thách thức lớn nhất là xử lý các lỗi xung đột CSS và Hydration của Next.js. Tuy nhiên, qua việc tự mày mò sửa lỗi, mình đã hiểu sâu hơn về cách trình duyệt render giao diện và cách tối ưu hóa hiệu năng web.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-teal-600 font-bold animate-bounce text-sm uppercase tracking-widest">
              Ready to fly into the digital world! 🚀
            </p>
          </div>
        </div>
      </section>
      <section id="lien-he" className="bg-teal-900 text-emerald-50 py-24 border-t-8 border-emerald-500">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6 text-white drop-shadow-md">Giữ liên lạc nhé! 📬</h2>
          <p className="text-teal-100/80 mb-10 text-lg font-medium">
            Nếu thầy cô có góp ý cho bài tập, hoặc các bạn muốn cùng thảo luận về công nghệ, 
            đừng ngại kết nối với mình qua các kênh dưới đây.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => setIsOpen(true)}
              className="bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-400 border-b-4 border-emerald-700 hover:border-emerald-500 active:translate-y-1 active:border-b-0 transition-all"
            >
              Gửi Email cho mình
            </button>
            
            <button 
              onClick={() => setIsOpen(true)} 
              className="bg-teal-800 text-white border-2 border-teal-600 px-8 py-4 rounded-2xl font-bold hover:bg-teal-700 hover:border-teal-500 active:translate-y-1 transition-all"
            >
              Facebook / GitHub
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-teal-950 py-8 text-center text-teal-600 font-medium text-sm">
        © 2026 - Digital Portfolio by Thành (Lynx).
      </footer>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-teal-950/60 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative bg-white rounded-[3rem] p-8 max-w-sm w-full shadow-2xl border-4 border-emerald-400 animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-black text-teal-900 mb-6 text-center">Let's Connect! 🤝</h3>
            
            <div className="space-y-4">
              {/* Lựa chọn 1: Email */}
              <a href="mailto:thanh.uet@vnu.edu.vn" className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-100 hover:border-emerald-400 transition-all group">
                <span className="text-2xl">📧</span>
                <div className="flex flex-col">
                  <span className="font-bold text-emerald-900">Email (Personal)</span>
                  <span className="text-xs text-emerald-600/70">nguyenthanhcv247@gmail.com</span>
                </div>
              </a>

              {/* Lựa chọn 2: Facebook */}
              <a href="https://www.facebook.com/Lynh.NguyenThanh" target="_blank" className="flex items-center gap-4 p-4 bg-sky-50 rounded-2xl border-2 border-sky-100 hover:border-sky-400 transition-all group">
                <span className="text-2xl">👤</span>
                <span className="font-bold text-sky-900">Facebook Profile</span>
              </a>

              {/* Lựa chọn 3: GitHub */}
              <a href="https://github.com/Thanhdt247/my-portfolio-uet" target="_blank" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-slate-400 transition-all group">
                <span className="text-2xl">💻</span>
                <span className="font-bold text-slate-900">GitHub (Source)</span>
              </a>
            </div>

            <button onClick={() => setIsOpen(false)} className="mt-6 w-full py-3 text-teal-500 font-bold hover:text-red-500 transition-colors">
              Đóng lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}