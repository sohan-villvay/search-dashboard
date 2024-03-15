
import React from 'react';
import { Cross2Icon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import { UpdateSynonymDelete } from '@app/curations/update-delete';
import { RowData } from '@tanstack/react-table';

interface Props {
  item: string;
  row: any;
}

const ClosableTag: React.FC<Props> = ({ item, row }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleRemoveItem = (item: string) => {
    setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
  };

  return (
        <div className="m-2">
          <span className="inline-flex items-center px-2 py-1 bg-sky-100 rounded-full text-sky-800 font-medium border">
            {item}
            <UpdateSynonymDelete synonym={item} row={row}/>
          </span>
        </div>
  );
};

export default ClosableTag;
