# Draggable List Component

This React and Next.js project uses the react-beautiful-dnd library to create a draggable list of items with custom drag-and-drop functionality, including real-time cursor tracking and a unique drag preview. The component allows the user to rearrange items with a list by dragging them into new positions.

## Features

* Drag-and-Drop: Powered by react-beautiful-dnd for smooth drag-and-drip functionality.
* Real-Time Cursor Tracking: Tracks cursor position during dragging for a custom preview experience.
* Custom Drag Preview: A floating, styled preview of the dragged item follows the cursor.
* Item List: Displays a list of locations with images, names, and descriptions.

## Installation

1. Clone the repository.
    git clone https://github.com/caseofbase18/draggable_list.git
2. Navigate into the project directory.
    cd draggable-list
3. Install dependencies.
    npm install

## Usage

To start the app locally:
    npm run dev

This will start the development server on http://localhost:3000

## Code Explanation

1. Dependencies: Uses react-beautiful-dnd for drag-and-drop functionality.
2. State Management:
    * items: Array of list items initialized with sample data.
    * draggedItem: Tracks the currently dragged item to render the custom preview.
    * cursorPosition: Tracks cursor position for custom preview placement.
3. Event Handlers:
    * handleOnDragEnd: Updates the items list based on the new item order after dragging.
    * handleDragStart: Sets the dragged item for custom preview.
4. Custom Preview: A custom preview element renders while dragging, positioned near the cursor.

