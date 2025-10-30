#!/bin/bash

# สีสำหรับ output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 YakuzaBet Website Docker Deployment${NC}"
echo -e "${YELLOW}=====================================${NC}"

# ตรวจสอบว่ามี Docker หรือไม่
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker ยังไม่ได้ติดตั้ง${NC}"
    exit 1
fi

# ตรวจสอบว่ามี Docker Compose หรือไม่
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}❌ Docker Compose ยังไม่ได้ติดตั้ง${NC}"
    exit 1
fi

# สร้างโฟลเดอร์ logs
mkdir -p logs
chmod 755 logs

# หยุดและลบ containers เก่าถ้ามี
echo -e "${YELLOW}🧹 ทำความสะอาด containers เก่า...${NC}"
docker-compose down --remove-orphans

echo -e "${YELLOW}📦 Building Docker image...${NC}"
docker-compose build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build สำเร็จ${NC}"
else
    echo -e "${RED}❌ Build ล้มเหลว${NC}"
    exit 1
fi

echo -e "${YELLOW}🚀 Starting containers...${NC}"
docker-compose up -d

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ เว็บไซต์เริ่มทำงานแล้ว${NC}"
    echo -e "${YELLOW}📍 เข้าชมได้ที่: http://localhost:7111${NC}"
    echo -e "${YELLOW}📍 Production: http://yakuzabet1.com${NC}"
    echo -e "${YELLOW}📊 ดู logs: docker-compose logs -f${NC}"
    echo -e "${YELLOW}🛑 หยุดทำงาน: docker-compose down${NC}"
else
    echo -e "${RED}❌ การเริ่มทำงานล้มเหลว${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deploy เสร็จเรียบร้อย!${NC}"
