import { Table } from "./entities/ui/Table";
import "./App.css";

// TODO: сделать другую иерархию папок:
// src
//   components
//     Table
//       Table.tsx
//       Table.scss
//   views
//     TableView
//       TableView.tsx
//       TableView.scss
//       model.ts

// TODO: переписать на scss

// TODO: импортировать TableView тут

function App() {
  return (
    <div className="container">
      <Table />
    </div>
  );
}

export default App;
