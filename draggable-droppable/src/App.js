import React from 'react';
// import DragThingsToBoxesDemo from './DragThingsToBoxes/DragThingsToBoxesDemo';
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimals/DragFoodToAnimalsDemo';

function App() {
  return (
    <div className="App">
      <DragFoodToAnimalsDemo/>
				<hr />
      <BasicDragDemo />
    </div>
  );
}

export default App;
