# YakuzaBet Website - Production Ready

เว็บไซต์สล็อตออนไลน์ YakuzaBet พร้อม Facebook Pixel Tracking และระบบวิเคราะห์ลูกค้า

## 🌐 การติดตั้งและ Deploy

### การ Deploy (Production Ready)
```bash
./deploy.sh
```

### Manual Deploy
```bash
# Build และรัน
docker-compose up -d

# ดู logs
docker-compose logs -f

# หยุดทำงาน
docker-compose down
```

## 🔧 การตั้งค่าเซิร์ฟเวอร์

เซิร์ฟเวอร์นี้ใช้ Cloudflare ที่ติดตั้งอยู่แล้ว ไม่จำเป็นต้องตั้งค่าเพิ่มเติม

### Port Configuration
- **HTTP**: Port 80
- **HTTPS**: Port 443
- **Domain**: yakuzabet1.com

## 📁 โครงสร้างไฟล์

```
111/
├── html/                 # ไฟล์เว็บไซต์
│   ├── index.html       # หน้าหลัก
│   ├── style.css        # CSS หลัก
│   ├── script.js        # JavaScript
│   ├── review-custom.css # CSS รีวิว
│   └── images/          # รูปภาพ
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose
├── nginx.conf          # Nginx configuration
├── deploy.sh           # Script สำหรับ deploy
└── README.md           # คู่มือนี้
```

## 🔧 การตั้งค่า

### เปลี่ยน Domain
แก้ไขในไฟล์ `nginx.conf`:
```nginx
server_name your-domain.com www.your-domain.com;
```

### เปลี่ยน Facebook Pixel ID
แก้ไขในไฟล์ `html/index.html`:
```javascript
fbq('init', 'YOUR_PIXEL_ID');
```

### เปลี่ยน Links
แก้ไขใน `html/index.html`:
- ลิงก์สมัครสมาชิก
- ลิงก์ติดต่อ Line

## 📊 การติดตามข้อมูล

เข้า Developer Console (F12) และใช้คำสั่ง:
```javascript
showReport()     // รายงานสรุป
showStats()      // สถิติวันนี้
showClicks()     // ประวัติการกดปุ่ม
showHotLeads()   // ลูกค้าที่สนใจสูง
clearData()      // ลบข้อมูล
```

## 🛠 คำสั่ง Docker

```bash
# ดูสถานะ containers
docker-compose ps

# ดู logs
docker-compose logs yakuzabet-web

# เข้าไปใน container
docker-compose exec yakuzabet-web sh

# รีสตาร์ท
docker-compose restart

# อัปเดตโค้ด
docker-compose down
docker-compose up -d --build
```

## 🌐 URLs

- **Local**: http://localhost
- **Production**: https://yakuzabet1.com

## 📈 Features

- ✅ Facebook Pixel Tracking
- ✅ ระบบรีวิวลูกค้าแบบสุ่ม
- ✅ ระบบแสดงยอดถอนเงิน
- ✅ อัตราการชนะแบบเรียลไทม์
- ✅ ระบบวิเคราะห์พฤติกรรมลูกค้า
- ✅ Responsive Design
- ✅ Performance Optimization

## 🔒 Security

- CSP Headers
- XSS Protection
- Frame Options
- HTTPS Ready
- Nginx Security Configuration

---

**พัฒนาโดย**: GitHub Copilot  
**วันที่**: October 1, 2025
