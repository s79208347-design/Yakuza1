# ใช้ Nginx เป็น base image
FROM nginx:alpine

# Copy ไฟล์เว็บไซต์ไปใน container
COPY html/ /usr/share/nginx/html/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# เปิดพอร์ต 80
EXPOSE 80

# รัน nginx
CMD ["nginx", "-g", "daemon off;"]
