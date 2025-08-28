let selected = new Set();

async function loadTraits(){
  try {
    const res = await fetch('./traitdata.json', { cache: 'no-store' });
    const traits = await res.json();
    const container = document.getElementById('traits-container');
    container.innerHTML = '';
    traits.forEach((trait) => {
      const div = document.createElement('div');
      div.className = 'trait';
      div.textContent = trait.name;
      div.onclick = () => {
        if (div.classList.toggle('selected')) {
          selected.add(trait.name);
        } else {
          selected.delete(trait.name);
        }
      };
      container.appendChild(div);
    });
  } catch (e) {
    console.error('Failed to load traitdata.json', e);
    const c = document.getElementById('traits-container');
    c.innerHTML = '<p style="color:#b00">Could not load traits. Please refresh.</p>';
  }
}

function submitTraits(){
  const list = Array.from(selected);
  try { localStorage.setItem('nova_selected_traits', JSON.stringify(list)); } catch {}
  window.location.href = 'results.html';
}

window.addEventListener('DOMContentLoaded', loadTraits);
