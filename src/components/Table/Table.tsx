import React from "react";

// TODO: сделать более переиспользуемый компонент, логику эффектора вынести во view
interface TableProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
}

export function Table<T>({ data, renderItem }: TableProps<T>) {
  if (!data || data.length === 0) {
    return <p>Нет данных</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={(item as any).id}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
