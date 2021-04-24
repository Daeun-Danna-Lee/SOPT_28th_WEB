import React from "react";
import Hello from './Hello';

function App() {

  const userName = "Danna";

  return (
    <>
    {/* name이라는 이름으로 userName을 Hello 컴포넌트에 전달 */}
      <Hello name={userName} />  
    </>
  )
}

export default App;