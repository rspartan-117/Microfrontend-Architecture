import React, { Suspense } from "react";
import RemoteApp from "app2/App";
import RemoteApp2 from "app3/App";

const App = () => {

  return (
<div style={{ display: "flex", flexDirection: "column"}}>
  {/* Header */}
  <div style={{textAlign: "center"}}>
    <h1>Proof of Concept : Host App</h1>
  </div>
  {/* Remote Apps */}
  <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start", // Prevents shifting when height changes
          gap: "20px", // Adds spacing between components
          padding: "20px",
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
