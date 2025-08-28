function renderResults(){
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem('nova_selected_traits') || '[]');
  } catch {}
  const box = document.getElementById('results-container');
  box.innerHTML = '';
  list.forEach(name => {
    const pill = document.createElement('span');
    pill.className = 'pill';
    pill.textContent = name;
    box.appendChild(pill);
  });
  const hidden = document.getElementById('selectedTraitsField');
  if (hidden) hidden.value = list.join(', ');
}

function downloadPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Nova Report', 14, 18);
  doc.setFontSize(12);
  const list = JSON.parse(localStorage.getItem('nova_selected_traits') || '[]');
  const lines = ['Selected Traits:', ...list.map((t,i)=> `${i+1}. ${t}`)];
  doc.text(lines, 14, 30);
  doc.save('nova-report.pdf');
}

window.addEventListener('DOMContentLoaded', renderResults);
