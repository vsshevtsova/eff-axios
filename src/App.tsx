import { TableView } from "./views/TableView/TableView.tsx";
import "./assets/styles/app.scss";

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
      <TableView />
    </div>
  );
}

export default App;
