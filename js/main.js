function handleMove(evt) {
  // Check if we should exit the function
  // according to the current state
  // For example, ignore clicks if the
  // game has been won or is a tie:
  if (winner) return;
  // Logic/Code to update all impacted state
  ...
  // Visualize all state
  render();
}
