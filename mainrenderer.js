 import { items } from './data/items.js';

async function render() {
  const list = document.getElementById('list');
  list.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    list.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>
            <a href="https://search.naver.com/search.naver?query=${encodeURIComponent(item.name)}" target="_blank">
                검색
            </a>
            </td>
        </tr>
        `;
  }
}

render();