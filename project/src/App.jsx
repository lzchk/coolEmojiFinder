import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Result from './components/Result'

//подключение бдшки со смайликами
let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();

  request.open("GET", pathToFile, false);
  request.send(null);

  let my_JSON_object = JSON.parse(request.responseText);

  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");

function App() {
  //использование хуков. изначально выводятся только фрукты.. почему? захотелось)
  const [valueEmoji, setValueEmoji] = useState('fruit');

  return (
    //само приложение, построенное из блоков
    <div className="App">
        <Header/>
        {/* функция для отслеживания изменения в форме */}
        <Form setValueEmoji={setValueEmoji}/>
        {/* вывод карточек. если его убрать, будет пусто:( */}
        <Result valueEmoji={valueEmoji}/>
    </div>
    
  );
}

export default App;
