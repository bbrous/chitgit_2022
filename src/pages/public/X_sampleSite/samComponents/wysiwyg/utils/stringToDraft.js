import { convertFromRaw, convertToRaw, EditorState } from "draft-js";

export default function stringToDraft(text) {
  try {
    const json = JSON.parse(text);
    const raw = convertFromRaw(json);
    return raw;
  } catch (e) {
    return {
      _immutable: {
        allowUndo: true,
        currentContent: {
          entityMap: {},
          blockMap: {
            "9mqrk": {
              key: "9mqrk",
              type: "unstyled",
              text: "te",
              characterList: [
                { style: [], entity: null },
                { style: [], entity: null }
              ],
              depth: 0,
              data: {}
            }
          },
          selectionBefore: {
            anchorKey: "9mqrk",
            anchorOffset: 0,
            focusKey: "9mqrk",
            focusOffset: 0,
            isBackward: false,
            hasFocus: true
          },
          selectionAfter: {
            anchorKey: "9mqrk",
            anchorOffset: 2,
            focusKey: "9mqrk",
            focusOffset: 2,
            isBackward: false,
            hasFocus: true
          }
        },
        decorator: { _decorators: [{}] },
        directionMap: { "9mqrk": "LTR" },
        forceSelection: false,
        inCompositionMode: false,
        inlineStyleOverride: null,
        lastChangeType: "insert-characters",
        nativelyRenderedContent: null,
        redoStack: [],
        selection: {
          anchorKey: "9mqrk",
          anchorOffset: 2,
          focusKey: "9mqrk",
          focusOffset: 2,
          isBackward: false,
          hasFocus: false
        },
        treeMap: {
          "9mqrk": [
            {
              start: 0,
              end: 2,
              decoratorKey: null,
              leaves: [{ start: 0, end: 2 }]
            }
          ]
        },
        undoStack: [
          {
            entityMap: {},
            blockMap: {
              "9mqrk": {
                key: "9mqrk",
                type: "unstyled",
                text: "",
                characterList: [],
                depth: 0,
                data: {}
              }
            },
            selectionBefore: {
              anchorKey: "9mqrk",
              anchorOffset: 0,
              focusKey: "9mqrk",
              focusOffset: 0,
              isBackward: false,
              hasFocus: false
            },
            selectionAfter: {
              anchorKey: "9mqrk",
              anchorOffset: 0,
              focusKey: "9mqrk",
              focusOffset: 0,
              isBackward: false,
              hasFocus: false
            }
          }
        ]
      }
    };
  }
}
