import { useColorScheme } from '@mui/material';
import React, { useState } from 'react';
import '../../../assets/sass/board_card.scss'

import theme_ from '../../../theme'
import { useEffect } from 'react';
import List_Card from './ListCard/List_Card';
import {
    closestCenter,
    pointerWithin,
    rectIntersection,
    DndContext,
    DragOverlay,
    getFirstCollision,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useDroppable,
    useSensors,
    useSensor,
    MeasuringStrategy,
    defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import {
    SortableContext,
    useSortable,
    arrayMove,
    verticalListSortingStrategy,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ListColumn from './Column/ListColumn';

const PLACEHOLDER_ID = 'placeholder';
function Board_Card(props) {

    const { mode, setMode } = useColorScheme();
    const [ColumnState, SetColumnState] = useState(props.item_);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        console.log("handleDragEnd", event);
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
    useEffect(() => {
        console.log("props", props)
        // SetColumnState(props.item_);
        console.log("ColumnState", ColumnState)

    }, [])

    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <SortableContext
                    items={ColumnState?.map(x => x._id)}
                    strategy={horizontalListSortingStrategy}
                >
                    {
                        ColumnState?.map((item_col) => {
                            return (
                                <ListColumn key={item_col._id} data={item_col}></ListColumn>

                            )
                        }
                        )

                    }

                </SortableContext>
            </DndContext>
        </>

    );
}

export default Board_Card;