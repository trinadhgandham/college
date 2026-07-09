const bcrypt = require('bcryptjs');
const { init, run, get } = require('./db');
(async () => { await init();
  if (!(await get('SELECT id FROM admins WHERE email=?', ['admin@college.edu']))) await run('INSERT INTO admins(name,email,password_hash) VALUES(?,?,?)', ['System Administrator','admin@college.edu', await bcrypt.hash('Admin@12345', 12)]);
  const students = [['S-1001','Ava Santos','ava.santos@example.edu','Computer Science','1st Year','555-0101'],['S-1002','Noah Reyes','noah.reyes@example.edu','Information Technology','2nd Year','555-0102'],['S-1003','Mia Cruz','mia.cruz@example.edu','Business Administration','3rd Year','555-0103']];
  for (const s of students) if (!(await get('SELECT id FROM students WHERE student_no=?', [s[0]]))) await run('INSERT INTO students(student_no,name,email,department,year_level,phone) VALUES(?,?,?,?,?,?)', s);
  if (!(await get('SELECT id FROM events LIMIT 1'))) await run('INSERT INTO events(title,description,venue,starts_at,ends_at,qr_token,is_active) VALUES(?,?,?,?,?,?,1)', ['Freshers Orientation','Opening orientation and attendance demo.','Main Auditorium','2026-07-10T09:00','2026-07-10T12:00','demo-orientation-token']);
  console.log('Seed complete. Login: admin@college.edu / Admin@12345'); process.exit(0);
})().catch(e => { console.error(e); process.exit(1); });
