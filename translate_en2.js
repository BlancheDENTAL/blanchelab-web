const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'en.html');
let html = fs.readFileSync(file, 'utf8');

const dictionary = {
  '블랑쉬랩 — Blanche Dental Clinic 직영 기공소': 'DentAi — Premium In-house Dental Lab',
  'Blanche Dental Clinic 직영 기공소, 블랑쉬랩. Implant Crown 220,000원부터. First Case Free.': 'Premium In-house Dental Lab, DentAi. Implant Crown from $150. First Case Free.',
  '10일': '10 Days',
  '20만원': '$150',
  'Dr. Kim님': 'Dr. Kim',
  '박': 'P',
  'Dr. Park님': 'Dr. Park',
  '전치부 Esthetics': 'Anterior Esthetics',
  '이': 'L',
  'Dr. Lee님': 'Dr. Lee',
  '3본 Bridge': '3-unit Bridge',
  '최': 'C',
  '최** 원장님': 'Dr. Choi',
  '/월': '/mo',
  '전담 기공사 배정': 'Dedicated Tech Assigned',
  '20만원~': '$150~',
  '어떤 스캐너로든 스캔': 'Scan with Any Scanner',
  '원장님 스타일 등록': 'Save Your Style',
  '전담 기공사가 3D 디자인 확인': '3D Design Preview',
  '첫 번에 장착': 'Seat on First Try',
  'Blanche Dental Clinic 기공소 내부 사진': 'DentAi Lab Interior',
  '발송 전 수석 기공사가 마진 적합도, 쉐이드, 교합 접촉을 직접 확인합니다.': 'Senior tech verifies margin fit, shade, and occlusal contacts before shipping.',
  'State / Region 선택': 'Select Region',
  '쉐이드, 마진 종류, Other 요청사항을 자유롭게 적어주세요...': 'Please specify shade, margins, or any other preferences...',
  '서비스': 'Services',
  '크라운 & Bridge': 'Crown & Bridge',
  '시작하기': 'Get Started',
  'Blanche Dental Clinic Operated · Seoul, Korea': 'Directly Operated · Seoul, Korea'
};

for (const [ko, en] of Object.entries(dictionary)) {
  html = html.split(ko).join(en);
}

fs.writeFileSync(file, html, 'utf8');
console.log('Final translation complete.');
