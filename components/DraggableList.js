import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialItems = [
  { id: '1', content: 'Scotland Island', subtext: 'Sydney, Australia', image: '/images/scotland-island.png', icon: '/images/location-icon.png' },
  { id: '2', content: 'The Charles Grand Brasserie & Bar', subtext: 'Lorem ipsum, Dolor', image: '/images/charles-grand.png', icon: '/images/location-icon.png' },
  { id: '3', content: 'Bridge Climb', subtext: 'Dolor, sit amet', image: '/images/bridge-climb.png', icon: '/images/location-icon.png' },
  { id: '4', content: 'Scotland Island', subtext: 'Sydney, Australia', image: '/images/scotland-island-boat.png', icon: '/images/location-icon.png' },
  { id: '5', content: 'Clam Bar', subtext: 'Etcetera veni, Vidi vici', image: '/images/clam-bar.png', icon: '/images/location-icon.png' },
  { id: '6', content: 'Vivid Festival', subtext: 'Sydney, Australia', image: '/images/vivid-festival.png', icon: '/images/location-icon.png' },
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);
  const [draggedItem, setDraggedItem] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleOnDragEnd = (result) => {
    setDraggedItem(null);
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  const handleDragStart = (start) => {
    const item = items.find((i) => i.id === start.draggableId);
    setDraggedItem(item);
  };

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleDragStart}>
      <Droppable droppableId="items">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="p-0 list-none"
          >
            {items.map(({ id, content, subtext, image, icon }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided, snapshot) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`select-none flex items-center px-10 py-5 font-gelion relative ${
                      snapshot.isDragging ? 'opacity-0' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={content}
                      className="w-24 rounded-2xl mr-6"
                    />
                    <div className="flex flex-col gap-1 relative z-20">
                      <span className="font-medium text-med leading-6 text-customBlack">{content}</span>
                      {subtext && (
                        <span className="font-normal text-customGrey text-small leading-22px flex items-center">
                          <img src={icon} alt={subtext} className="flex w-4 mr-1"/>{subtext}
                        </span>
                      )}
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      {/* Custom drag preview */}
      {draggedItem && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            top: cursorPosition.y + 5,
            left: cursorPosition.x + 5,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="select-none flex items-center px-10 py-5 font-gelion bg-white border rounded-lg shadow-lg">
            <img
              src={draggedItem.image}
              alt={draggedItem.content}
              className="w-12 rounded-2xl mr-6"
            />
            <span className="font-medium text-med leading-6 text-customBlack">{draggedItem.content}</span>
          </div>
        </div>
      )}
    </DragDropContext>
  );
};

export default DraggableList;