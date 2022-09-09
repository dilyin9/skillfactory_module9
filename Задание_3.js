let button = document.querySelector('.btn');
button.addEventListener('click', () => {
  let num = document.querySelector('input').value;
  if (num > 10 || num < 1) {
    if (!document.querySelector('p')){
    let text = document.createElement('p');
    text.textContent = 'число вне диапазона от 1 до 10';
    document.body.append(text);
    }
  }
  else {
    if (document.querySelector('p')){
      document.querySelector('p').remove();
    }
    let url = `https://picsum.photos/v2/list?limit=${num}`;
    getResult(url, updateHTML)
  }
});

function getResult(url, func) {
  let newRequest = new XMLHttpRequest();
  newRequest.open('GET', url);
  newRequest.onload = () => {
    if (newRequest.status >= 400) console.log('Ошибка');
    else {
      let result = JSON.parse(newRequest.response);
      func(result);
    }
  }
  newRequest.onerror = () => {
    console.log(`Ошибка: статус ответа : ${newRequest.status}`);
  }
  newRequest.send();

}

function updateHTML(html) {
  console.log(html);
  let newHTML = '';
  html.forEach(element => {
    let newBlock = `<div><img src="${element.download_url}" width=200px height=200px/></div>`;
    newHTML += newBlock;
  });
  let scriptObj = document.body.lastElementChild;
  scriptObj.insertAdjacentHTML('beforebegin', newHTML);
}