import React from 'react';
import DragThingsToBoxesDemo from './DragThingsToBoxes/DragThingsToBoxesDemo';
import BasicDragDemo from './BasicDragDemo';
import DragFoodToAnimalsDemo from './DragFoodToAnimals/DragFoodToAnimalsDemo';
import DragElementWithClickHandlers from './DragElementWithClickHandlers';

function App() {
  return (
    <div className="App">
      <DragThingsToBoxesDemo/>
				{/* <hr />
      <DragFoodToAnimalsDemo/>
				<hr />
      <BasicDragDemo />
      <hr />
				<DragElementWithClickHandlers /> */}
    </div>
  );
}

export default App;
