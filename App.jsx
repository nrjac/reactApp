import React from 'react';

class App extends React.Component {
   render() {
   var i = 2;

   var myStyle = {
         fontSize: 30,
         color: '#FF0000'
      }

      return (
      <html>
         <div>
            <h1>Header</h1>
            <h2>Content
            </h2>
            
        {/*Multi line comment...
        	{//End of the line Comment...} ...????
        */}

            <p style = {myStyle}>This is the content!!!</p>
         </div>

         <div>
            <h1>{i == 1 ? 1+1 : 'Falsie Output'}</h1>
         </div>
       </html>
       
      );
   }
}

export default App;