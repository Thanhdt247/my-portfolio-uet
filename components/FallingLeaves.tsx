'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Leaf {
  id: number;
  left: string;
  size: number;
  fallDuration: string;
  swayDuration: string;
  delay: string;
  swayX: string;
  rotX: string;
  imageSrc: string;
}

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Render trên client để tránh Hydration error
    const leafCount = 35; // Tăng số lượng lá lên để ngập tràn màn hình hơn
    const leafImages = ['/assets/leaf_1.png', '/assets/leaf_2.png'];

    const newLeaves = Array.from({ length: leafCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // Vị trí ngẫu nhiên theo chiều ngang
      size: Math.random() * 15 + 20, // Kích thước từ 20px - 35px
      
      // Thời gian rơi từ đỉnh xuống đáy (10s - 25s tuỳ lá nặng nhẹ)
      fallDuration: `${Math.random() * 15 + 10}s`, 
      
      // Chu kỳ lắc lư trái phải (3s - 7s để tạo nhịp điệu tự nhiên)
      swayDuration: `${Math.random() * 4 + 3}s`, 
      
      // Thủ thuật delay số âm: Giúp lá đã rơi sẵn trên màn hình ngay khi load web
      delay: `-${Math.random() * 30}s`, 
      
      // Khoảng cách lướt gió trái/phải (50px đến 150px, random hướng)
      swayX: `${(Math.random() * 100 + 50) * (Math.random() > 0.5 ? 1 : -1)}px`, 
      
      // Độ xoay của lá khi bị gió thổi (90 độ đến 270 độ)
      rotX: `${Math.random() * 180 + 90}deg`, 
      
      imageSrc: leafImages[Math.floor(Math.random() * leafImages.length)]
    }));

    setLeaves(newLeaves);
  }, []);

  return (
    // Dùng z-0 để lá nằm dưới menu nhưng trên nền, pointer-events-none để không chặn click chuột
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute leaf-fall drop-shadow-sm"
          style={{
            left: leaf.left,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
            // Truyền các biến CSS động vào style
            ['--fall-duration' as string]: leaf.fallDuration,
            ['--sway-duration' as string]: leaf.swayDuration,
            ['--sway-x' as string]: leaf.swayX,
            ['--rot-x' as string]: leaf.rotX,
            animationDelay: leaf.delay, // Áp dụng delay âm để lá rải rác ngay từ đầu
          }}
        >
          <Image
            src={leaf.imageSrc}
            alt="Lá bay theo gió"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}