 import { items } from './data/items.js';

function render() {
    const list = document.getElementById('list');
    list.innerHTML = '';

    items.forEach((item, i) => {
        console.log(item);
        list.innerHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td>${item.price}</td>
            <td>
            <a href="https://search.naver.com/search.naver?query=${encodeURIComponent(item.name)}" target="_blank">
                검색
            </a>
            </td>
        </tr>
        `;
    });
}

render();