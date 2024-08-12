import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialItems = [
  { id: '1', content: 'England Island', subtext: 'Sydney, Australia', image: '/images/scotland-island.png', icon: '/images/location-icon.png' },
  { id: '2', content: 'The Charles Grand Brasserie & Bar', subtext: 'Lorem ipsum, Dolor', image: '/images/charles-grand.png', icon: '/images/location-icon.png' },
  { id: '3', content: 'Bridge Climb', subtext: 'Dolor, sit amet', image: '/images/bridge-climb.png', icon: '/images/location-icon.png' },
  { id: '4', content: 'Scotland Island', subtext: 'Sydney, Australia', image: '/images/scotland-island-boat.png', icon: '/images/location-icon.png' },
  { id: '5', content: 'Clam Bar', subtext: 'Etcetera veni, Vidi vici', image: '/images/clam-bar.png', icon: '/images/location-icon.png' },
  { id: '6', content: 'Vivid Festival', subtext: 'Sydney, Australia', image: '/images/vivid-festival.png', icon: '/images/location-icon.png' },
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
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
                  <>
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`select-none flex items-center px-10 py-5 font-gelion relative ${
                        snapshot.isDragging ? 'z-10' : ''
                      }`}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      {snapshot.isDragging && (
                        <div className="absolute inset-0 bg-gray-500 opacity-50 rounded-2xl"></div>
                      )}
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
                    {snapshot.isDragging && (
                      <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                          top: snapshot.draggingOver ? 0 : 'unset',
                          left: snapshot.draggingOver ? 0 : 'unset',
                          transform: provided.draggableProps.style.transform,
                        }}
                      >
                        <div className="select-none flex items-center px-10 py-5 font-gelion bg-white border rounded-lg shadow-lg">
                          <img
                            src={image}
                            alt={content}
                            className="w-12 rounded-2xl mr-6"
                          />
                          <span className="font-medium text-med leading-6 text-customBlack">{content}</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;