
// CALCULATOR LOGIC
const crownSlider = document.getElementById('crownSlider');
if (crownSlider) {
  const calcCount = document.getElementById('calcCount');
  const calcTotal = document.getElementById('calcTotal');
  const calcUs = document.getElementById('calcUs');
  const calcDentai = document.getElementById('calcDentai');
  const calcProfit = document.getElementById('calcProfit');
  
  const US_PRICE = 600;
  const DENTAI_PRICE = 150;
  const SAVINGS_PER_CROWN = US_PRICE - DENTAI_PRICE;

  crownSlider.addEventListener('input', (e) => {
    const count = parseInt(e.target.value);
    calcCount.textContent = count;
    
    const yearlySavings = count * SAVINGS_PER_CROWN * 12;
    calcTotal.textContent = yearlySavings.toLocaleString();
    
    const usMonthly = count * US_PRICE;
    calcUs.textContent = usMonthly.toLocaleString();
    
    const dentaiMonthly = count * DENTAI_PRICE;
    calcDentai.textContent = dentaiMonthly.toLocaleString();
    
    const profitCrowns = Math.floor((count * SAVINGS_PER_CROWN) / DENTAI_PRICE);
    calcProfit.textContent = profitCrowns + " implant crowns";
  });
}
