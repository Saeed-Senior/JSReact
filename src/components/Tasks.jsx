
function Tasks() {

   // ============================================================ TASK-1

   const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
   const positive = array.filter(item => {
      return item >= 0;
   })
   console.log(positive);

   // ============================================================ TASK-2

   const messages = [
      {message: 'hello', error: true},  
      {message: 'javascript', error: false},  
      {message: 'expovisiov', error: true},  
      {message: 'react', error: true},  
      {message: 'angular', error: false}, 
      {message: 'es6', error: false}, 
   ];
   const messagesFilter = messages.filter(item => {
      return item.error !== true;
   })
   console.log(messagesFilter);

   // ============================================================ TASK-3

   const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];
   const wordsMap = words.map(item => {
      return item.length < 5 ? item = '*' : item;
   })
   console.log(wordsMap);

   // ============================================================ TASK-4

   const sendMessage = (message) => {
      /*
      * тут какой-то большой код для отправки сообщения
      */
   }
   
   const half = (number) => {
      return number / 2;
   }
   
   const showConsole = () => {
      console.log('Экспо');
   }
   
   const concatWords = (first, second) => {
      return first + second;
   }

   // ============================================================ TASK-5

   function justText () {'expo';}
   
   const logging = function (text) {console.log(text);}
   
   function add (x,y) {
      const z = 3;
   
      return z * x * y;
   }
   
   const onlyPositive = function (number) {
      if(number < 0) {
         return false;
      }
   
      return true;
   }

   return(
      <>
      <h1 className="text-center">TASKS</h1>
      </>
   )
}

export default Tasks;