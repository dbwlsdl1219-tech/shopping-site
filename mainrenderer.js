const res = await fetch(`./data/items.json?v=${Date.now()}`);
const items = await res.json();

const list = document.getElementById('list');
list.innerHTML = '';

items.forEach((item, i) => {
  list.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${item.name}</strong></td>
      <td class="desc">${item.desc}</td>
      <td>
        <a class="btn" href="https://search.naver.com/search.naver?query=${encodeURIComponent(item.name)}" target="_blank">
          검색
        </a>
      </td>
    </tr>
  `;
});