# MVC Exams

##### October 17, 2021

This repository was created for preparation before testing MVC and used in exams.

## Features

- Fetch data from text file // but bug if you try to refresh you will see it

## Get Start

After clone this repository you can install the dependencies and devDependencies.

```sh
npm i
```

And you can run server.

```sh
npm start
```

## File Structure

```sh
├───controllers
│   ├───logic.js
│   └───router.js
├───models
│   └───dump.txt
├───node_modules
├───views
│   └───home.ejs
├───.gitignore
├───package.json
├───README.md
└───server.js
```

## อธิบาย

ใช้ตัว server.js เป็น server ที่รันบนพอท 3000

Views
มีหน้าเดียวคือหน้า home - แสดงข้อมูลจาก api
(ซึ่งในนั้นมี navigationbar ที่ดูเหมือนจะมีหลายหน้า แต่ว่ามันสวยดีเลยไม่ได้ลบออก + ลบไม่ทัน )ในไฟล์นี้จะทำงานร่วมกันตัว controller ทั้งตัว router และ logic

Models
สร้างไฟล์ dump.txt ที่เป็นเสมือน database แต่เป็น text file

Controller
-logic.js ทำหน้าที่แปลง text file เป็น object
-router.js ทำหน้าที่เป็น router ในการสลับ link
