function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <img
        src="/omf.png"
        alt="Orion Metal Fest"
        style={{
          maxWidth: "100%",
          maxHeight: "100vh",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default App;
