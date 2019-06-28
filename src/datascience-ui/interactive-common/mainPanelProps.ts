// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import * as React from 'react';

import { IInteractiveWindowMapping } from '../../client/datascience/interactive-window/interactiveWindowTypes';
import { IMainPanelState } from './mainPanelState';

export interface IMainPanelHOCProps {
    skipDefault?: boolean;
    testMode?: boolean;
    baseTheme: string;
    codeTheme: string;
}

export interface IFocusable {
    focus(): void;
}

export interface IMainPanelProps extends IMainPanelHOCProps {
    value: IMainPanelState;
    activated: Event<void>;
    sendMessage<M extends IInteractiveWindowMapping, T extends keyof M>(type: T, payload?: M[T]): void;
    refreshVariables(): void;
    deleteCell(index: number): void;
    collapseAll(): void;
    expandAll(): void;
    clearAll(): void;
    undo(): void;
    redo(): void;
    submitInput(code: string): void;
    readOnlyCodeCreated(text: string, file: string, id: string, monacoId: string): void;
    editableCodeCreated(text: string, file: string, id: string, monacoId: string): void;
    codeChange(changes: monacoEditor.editor.IModelContentChange[], id: string, modelId: string): void;
}
