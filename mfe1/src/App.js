import React, { Suspense } from "react";
import RemoteApp from "app2/App";
import RemoteApp2 from "app3/App";

const App = () => {

  return (
<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
  {/* Header */}
  <div style={{textAlign: "center"}}>
    <h1>Proof of Concept : Host App</h1>
  </div>
  {/* Remote Apps */}
  <div
    style={{
      display: "flex",
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically // 
      padding: "20px",
      margin:"200px", // Adds padding to prevent elements from touching screen edges// 
    }}
  >
    <Suspense fallback={"loading..."}>
      <RemoteApp2 />
      <RemoteApp />
    </Suspense>
  </div>
</div>

  );
};

export default App;
