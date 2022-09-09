const xmlString = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();
const parseObject = parser.parseFromString(xmlString, 'text/xml');
let main = parseObject.querySelector('list');
let elems = main.querySelectorAll('student');
let jsObject = {
  list : []
}
for (student of elems) {
  let fullname, age, profession, lang;
  let name = student.querySelector('name');
  lang = name.getAttribute('lang');
  fullname =name.children[0].textContent + " " + name.children[1].textContent;
  age = student.querySelector('age').textContent;
  profession = student.querySelector('prof').textContent;
  jsObject.list.push({'name': fullname, 'age': age, 'prof':profession, 'lang': lang})
}
console.log(jsObject);
