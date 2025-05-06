// EmailJS Integration
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

function collectAndSend() {
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        name: name,
        phone: phone
    }).then(() => {
        alert('Information sent successfully!');
    });
}

// Risk Analysis Tool
const riskQuestions = [
    "Investment Horizon: <select><option>1-3 years</option><option>3-5 years</option></select>",
    "Risk Tolerance: <select><option>Low</option><option>Medium</option><option>High</option></select>"
];

document.getElementById('riskQuestions').innerHTML = riskQuestions.map((q, i) => 
    `<div class="question">Q${i+1}: ${q}</div>`).join('');

function analyzeRisk() {
    const answers = [...document.querySelectorAll('select')].map(s => s.value);
    let recommendation = '';
    
    if(answers[1] === 'High') {
        recommendation = 'Growth Stocks (60%), Crypto (20%), ETFs (20%)';
    } else {
        recommendation = 'ETFs (50%), Bonds (30%), REITs (20%)';
    }
    
    document.getElementById('riskResult').innerHTML = `
        <h4>AI Recommendation:</h4>
        <p>${recommendation}</p>
    `;
}

// Portfolio Optimizer
function optimizePortfolio() {
    const amount = document.getElementById('investmentAmount').value;
    const portfolio = {
        conservative: ['Bonds (40%)', 'ETFs (40%)', 'Stocks (20%)'],
        moderate: ['ETFs (50%)', 'Stocks (30%)', 'Crypto (20%)']
    };
    
    document.getElementById('portfolioResult').innerHTML = `
        <p>Recommended Allocation for $${amount}:</p>
        <ul>
            ${portfolio.moderate.map(a => `<li>${a}</li>`).join('')}
        </ul>
    `;
}

// Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target);
    alert('Message sent successfully!');
});
