import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("adds, completes, and deletes a toDo", () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Title...");
  fireEvent.change(input, { target: { value: "Write README" } });
  fireEvent.click(screen.getByRole("button", { name: "Add" }));

  const toDo = screen.getByText("Write README");
  expect(toDo).not.toBeNull();
  expect(input.value).toBe("");

  fireEvent.click(toDo);
  expect(toDo.closest("li").classList.contains("checked")).toBe(true);

  fireEvent.click(screen.getByRole("button", { name: "Delete Write README" }));
  expect(screen.queryByText("Write README")).toBeNull();
});
