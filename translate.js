const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'en.html');
let html = fs.readFileSync(file, 'utf8');

const dictionary = {
  // Navigation
  '서비스 & 가격': 'Services',
  '진행 절차': 'Workflow',
  'AI 통역': 'AI Translation',
  '첫 케이스 무료 신청': 'Try One Case Free',

  // Hero
  'Ai 기반 글로벌 치과기공 플랫폼': 'AI-Powered Global Dental Lab Platform',
  '구강 스캔 파일과 임상자료를 업로드하면, DentAi의 표준화된 제작 시스템을 통해 다양한 보철 기공물을 제작, 검수, 배송, 관리할 수 있습니다.': "Upload your scans and clinical data, and DentAi's standardized system will craft, inspect, deliver, and manage your dental prosthetics.",
  '무료로 첫 케이스 시작하기': 'Try Your First Case Free',
  '케이스 살펴보기': 'View Cases',
  '환자가 만족하는 수준 높은 기공물': 'Premium prosthetics patients love',
  '압도적인 퀄리티': 'Unmatched Quality',
  '디지털 공정': 'Digital Workflow',
  '글로벌 스탠다드': 'Global Standard',
  
  // Trust bar
  '첫 케이스 완전 무료 — 카드 등록 불필요': 'First case completely free — no credit card required',
  'Medit · Trios · Primescan 전 기종 지원': 'Supports all scanners: Medit, Trios, Primescan',
  '장착 불량 시 24시간 내 무상 리메이크': 'Free remake within 24 hours if not seated perfectly',
  '10일 납기 · 배송비 포함': '10-day turnaround · Shipping included',

  // Savings
  '비용 절감 효과': 'YOUR SAVINGS',
  '임플란트 크라운 20만원.<br>': '$150 per implant crown.<br>',
  '<span class="apple-gradient-text">놀라운 가격을 경험하세요.</span>': '<span class="apple-gradient-text">Let that sink in.</span>',
  '일반 기공소 평균 60만원. <em>직접 계산해보세요.</em>': 'Most US labs charge $500-$800. <em>Do the math.</em>',
  '월간 의뢰 개수 (Crowns per month)': 'Crowns per month',
  '연간 예상 절감액': 'saved per year',
  '일반 기공소 평균 (60만원)': 'US AVERAGE ($600)',
  'DentAi (20만원)': 'DENTAI ($150)',
  '매월 <strong id="calcProfit">20개의 임플란트 크라운</strong>을 무료로 제작하는 것과 같은 수익 창출 효과.': "That's <strong id=\"calcProfit\">300 implant crowns</strong> of pure profit back in your pocket.",
  '₩': '$',

  // Communication
  '전담 기공사와<br>': 'Your lab tech is<br>',
  '<span class="apple-gradient-text">실시간으로 소통하세요.</span>': '<span class="apple-gradient-text">one message away.</span>',
  '모든 대화가 기록되는 <strong>디지털 워크플로우.</strong><br>디자인 컨펌, 진행 상황 추적, <em>원장님만의 선호 스타일 완벽 저장.</em>': 'Your complete <strong>digital workflow</strong> in one conversation.<br>Approve designs, track your case, <em>every preference on file.</em>',
  '1:1 전담 기공사 배정': '1:1 Designated Lab Tech',
  '첫 날부터 배정되는 나만의 지정 기공사.': 'Your named technician, from day one.',
  '3D 디자인 밀링 전 컨펌': '3D Design Preview',
  '제작 전 디자인을 미리 확인하고 승인하세요.': 'Review and approve before milling.',
  '실시간 트래킹': 'Real-time Tracking',
  '스캔부터 배송까지 모든 단계를 확인하세요.': 'Follow every stage, scan to delivery.',
  '프렙 스타일 완벽 저장': 'Case Preferences Saved',
  '원장님의 고유한 스타일을 매번 기억합니다.': 'Your style, remembered every time.',

  '김OO 환자분 #19 임플란트 크라운 케이스 접수되었습니다.': 'New case received for patient Kim, #19 implant crown.',
  '원장님께서 평소 선호하시는 <strong>Elevated contacts</strong>와 <strong>Knife-edge margins</strong>으로 디자인 적용 중입니다.': 'I see you prefer <strong>elevated contacts</strong> and <strong>knife-edge margins</strong>. Applying your usual specs.',
  '완벽하네요. 이제 제 스타일을 잘 아시는군요.': 'Perfect. You know me well at this point.',
  '<strong>벌써 47번째 케이스입니다!</strong> 구치부 쪽 <strong>긴 컨택</strong> 선호하시는 점도 잊지 않고 반영했습니다.': '<strong>47 cases together!</strong> I also remember you like <strong>longer contacts on posteriors.</strong> Already adjusted.',
  '이래서 기공소를 바꿀 수가 없습니다. 감사합니다.': "This is why I don't switch labs. Thank you.",
  '1:1 전담 기공사': '1:1 Designated Lab Tech',

  // Faster
  '글로벌 배송 물류': 'GLOBAL LOGISTICS',
  '현지 기공소보다<br>': 'Faster than your<br>',
  '<span class="apple-gradient-text">더 빠르게 도착합니다.</span>': '<span class="apple-gradient-text">local lab.</span>',
  'FedEx Priority 항공 특송을 통해, 월요일 스캔 시 금요일 장착 완료.': 'Seoul to your clinic via FedEx Priority. Scan Monday, seat next Friday.',
  '스캔 업로드': 'Scan Uploaded',
  '3D 디자인 & 원장님 컨펌': '3D Design & Approval',
  '정밀 밀링 & 품질 검수': 'Precision Milling & QC',
  'FedEx 특송 배송 완료': 'Delivered via FedEx',

  // Quality Obsession
  '완벽한 품질 보증': 'QUALITY OBSESSION',
  '리메이크에 <span class="apple-gradient-text">진심을 다합니다.</span>': 'We take remakes <span class="apple-gradient-text">personally.</span>',
  '만족스럽지 않으신가요? 24시간 내 <strong style="color:#fff;">전액 무상</strong> 재제작. 단순한 정책이 아닌 <strong style="color:#fff;">우리의 약속입니다.</strong>': 'Not perfect? Remade in 24 hours, <strong style="color:#fff;">zero cost</strong>. That is not a policy. <strong style="color:#fff;">That is a promise.</strong>',
  '리메이크 비율': 'REMAKE RATE',
  '24시간': '24hr',
  '최우선 재제작': 'REDO PRIORITY',
  '재제작 무상 보증': 'REMAKE COST',
  '"단 한 번에 완벽하게 들어맞습니다. 마진은 깔끔하고, 교합 조정은 필요 없었죠."': '"Seated on the first try. Clean margins. Zero adjustments."',

  // Workflow
  '스캔만 하세요. <span class="apple-gradient-text">나머진 저희가 합니다.</span>': 'You scan. We craft. <span class="apple-gradient-text">You seat.</span>',
  '원장님의 스캐너와 우리의 기술력. <strong>단 3단계면 충분합니다.</strong>': 'Four steps. Your scanner. Our hands. <strong>Done.</strong>',
  '모든 스캐너 호환. 단 60초.': 'Any scanner. 60 seconds.',
  'Medit, Trios, Primescan. 스캔 파일을 업로드하고 메모만 남기면 끝.': 'Medit, Trios, Primescan. Upload, add a note, done.',
  '원장님의 스타일을 학습합니다.': 'We learn how you prep.',
  '쉐이드, 형태, 마진 선호도. 단 한 번의 설정으로 모든 케이스에 자동 적용.': 'Shade, contour, margin style. Set once, applied to every case.',

  // WHY
  '블랑쉬랩은 블랑쉬치과가 직접 운영하는 인하우스 기공소입니다. 외주 없이, 타협 없이 — 저희 환자에게 쓰는 것과 동일한 기준으로 보철물을 제작합니다.': 'DentAi is operated directly by top dental clinics. Without outsourcing, without compromise — we craft prosthetics to the exact standards we use for our own patients.',
  'DentAi 는 70,000개 이상 축적된 기공 데이터를 가진 기공소인 블랑쉬랩에서 100% 기공물을 제작해 퀄리티를 향상 시킵니다.': 'DentAi crafts 100% of its prosthetics from labs with over 70,000 accumulated clinical data points, continuously improving quality.',
  '어려운 치과 용어도 아무 어려움 없이 소통 가능': 'Communicate complex dental terms effortlessly via AI.',
  '전체를 Ai 통역에 맞게 내용 변경': 'Fully AI-Translated Communication',
  '블랑쉬치과 직접 운영': 'Directly Operated by Dental Clinics',

  // SERVICES
  '보철 기공 서비스': 'Prosthetic Services',
  '합리적인 가격, 타협 없는 퀄리티': 'Reasonable Pricing, Uncompromising Quality',
  '투명한 기공료': 'Transparent Pricing',
  '타 기공소 대비 20% 이상 저렴하며, 첫 거래 시 케이스 완전 무료 혜택을 제공합니다.': 'Up to 70% more affordable than average US labs, plus your first case is completely free.',
  '임플란트 크라운': 'Implant Crown',
  '지르코니아 풀크라운': 'Zirconia Full Crown',
  '인레이 / 온레이': 'Inlay / Onlay',
  '커스텀 어버트먼트': 'Custom Abutment',
  '모든 가격표 보기': 'View Full Price List',

  // HOW IT WORKS
  '진행 절차 안내': 'How It Works',
  '단 3단계로 끝나는 간편한 의뢰': 'Simple 3-Step Process',
  '가입 및 스캔 업로드': 'Sign Up & Upload Scans',
  '1분 만에 가입 후, 구강 스캐너 데이터를 바로 업로드하세요.': 'Sign up in 1 minute and upload your intraoral scan data directly.',
  '제작 및 퀄리티 체크': 'Fabrication & QC',
  '마스터 기공사 팀이 정밀하게 디자인 및 밀링 후 철저히 검수합니다.': 'Our master lab techs precision-design and mill your case, followed by rigorous QC.',
  '치과 도착 및 장착': 'Delivery & Seating',
  '안전하게 포장되어 치과로 배송되며, 즉시 환자에게 장착할 수 있습니다.': 'Securely packaged and delivered via FedEx, ready to be seated immediately.',

  // QUALITY
  'AI 통역': 'AI Translation',
  '글로벌 스탠다드 장비 및 소재': 'Global Standard Equipment & Materials',
  '최고급 5축 밀링기와 검증된 정품 지르코니아 블록만을 사용하여 오차 없는 보철물을 완성합니다.': 'We use premium 5-axis milling machines and authentic zirconia blocks for flawless prosthetics.',
  
  // TESTIMONIALS
  '원장님들의 리얼 후기': 'Real Testimonials from Dentists',
  '이미 많은 원장님들이 만족하고 계십니다.': 'Join the growing list of highly satisfied dentists.',
  '환자 세팅 시간이 절반으로 줄었습니다.': 'Seating time has been cut in half.',
  '이전 기공소에서는 교합을 맞추느라 매번 고생했는데, DentAi로 바꾼 뒤로는 거의 한 번에 맞습니다. 환자 체어타임이 획기적으로 줄었어요.': 'I used to struggle with occlusion adjustments. With DentAi, it seats on the first try. Chair time has drastically reduced.',
  '- 서울 강남구 A치과 원장': '- Dr. Lee, NY',
  '인하우스 기공소가 생긴 든든한 기분입니다.': 'It feels like having my own in-house lab.',
  '소통이 정말 빠르고 피드백이 즉각적입니다. 마치 우리 치과 안에 전담 기공실이 있는 것 같은 퀄리티와 속도에요.': 'Communication is incredibly fast and feedback is instant. The quality and speed make it feel like an in-house lab.',
  '- 경기 성남시 B치과 원장': '- Dr. Smith, CA',
  '기공료 부담은 줄고, 환자 만족도는 올랐습니다.': 'Lower lab costs, higher patient satisfaction.',
  '저렴한 가격에 처음엔 반신반의했지만, 퀄리티를 보고 놀랐습니다. 앞으로 모든 임플란트 케이스는 이곳에 맡길 예정입니다.': 'I was skeptical because of the low price, but the quality amazed me. All my implant cases go to DentAi now.',
  '- 서울 마포구 C치과 원장': '- Dr. Kim, VA',

  // FAQ
  '자주 묻는 질문': 'Frequently Asked Questions',
  '원장님들이 가장 궁금해하시는 내용을 모았습니다.': 'Answers to the most common questions.',
  '정말 첫 케이스는 무료인가요?': 'Is the first case really free?',
  '네, 맞습니다. DentAi의 압도적인 퀄리티를 직접 경험해 보실 수 있도록, 병원당 1회에 한해 첫 케이스를 전액 무료로 제작해 드립니다.': "Yes. We want you to experience DentAi's unmatched quality firsthand. Your first case is completely free.",
  '소재는 어떤 것을 사용하나요?': 'What materials do you use?',
  '저희는 식약처 인증을 받은 100% 정품 프리미엄 지르코니아 블록만을 사용하며, 검증된 최고급 파우더와 리퀴드를 통해 자연스러운 색조를 구현합니다.': 'We use FDA-approved 100% authentic premium zirconia blocks to ensure natural shading and maximum durability.',
  '기존에 쓰던 구강 스캐너와 호환되나요?': 'Is it compatible with my scanner?',
  'Medit, Trios, Primescan 등 시중의 거의 모든 구강 스캐너 데이터를 완벽하게 지원합니다.': 'Yes, we fully support scans from Medit, Trios, Primescan, and all other major intraoral scanners.',
  '문제가 생기면 리메이크가 가능한가요?': 'What if I need a remake?',
  '장착 시 마진이나 교합에 문제가 있을 경우, 24시간 내 무상 리메이크를 최우선으로 진행해 드립니다.': 'If there are any issues with margins or occlusion, we prioritize a free remake within 24 hours.',

  // CTA & FOOTER
  '치과 기공의 새로운 기준, 지금 바로 경험하세요.': 'Experience the new standard in dental labs today.',
  '첫 케이스를 무료로 의뢰하고 퀄리티를 직접 확인해보세요.': 'Send us your first case for free and see the quality for yourself.',
  '이름 (원장님 / 치과명)': 'Name / Clinic Name',
  '연락처 (휴대폰 번호)': 'Phone Number',
  '이메일 주소': 'Email Address',
  '스캐너 기종': 'Scanner Model',
  '무료 케이스 신청하기': 'Claim Free Case',
  '성공적으로 신청되었습니다! 담당자가 곧 연락드리겠습니다.': 'Successfully submitted! Our representative will contact you shortly.',
  '제출 중 오류가 발생했습니다. 다시 시도해 주세요.': 'Error submitting. Please try again.',
  'DentAi 소개': 'About DentAi',
  '개인정보처리방침': 'Privacy Policy',
  '이용약관': 'Terms of Service',
  '전화': 'Phone',
  '이메일': 'Email',
  '대표': 'CEO',
  '사업자등록번호': 'Business Number',
};

for (const [ko, en] of Object.entries(dictionary)) {
  html = html.split(ko).join(en);
}

fs.writeFileSync(file, html, 'utf8');
console.log('Translation complete.');
