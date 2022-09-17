import React, { useContext, useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Todo(props) {
  const { selTheme } = useContext(ThemeContext);
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <>
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2 "
        style={{ color: selTheme.foreground }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
      >
        <span
          className="me-auto"
          style={
            props.completed
              ? {
                  textDecoration: "line-through",
                }
              : null
          }
        >
          {props.title}
        </span>
        <span>
          {isMouseOver && (
            <>
              <button
                onClick={() => props.onMark()}
                className="btn btn-success"
              >
                <IconCheck />
              </button>
              <button
                onClick={() => props.onMoveUp()}
                className="btn btn-secondary"
              >
                <IconArrowUp />
              </button>
              <button
                onClick={() => props.onMoveDown()}
                className="btn btn-secondary"
              >
                <IconArrowDown />
              </button>
              <button
                onClick={() => props.onDelete()}
                className="btn btn-danger"
              >
                <IconTrash />
              </button>
            </>
          )}
        </span>
      </div>
    </>
  );
}
