import { Box, useColorScheme } from '@mui/material';
import React, { useState } from 'react';
import '../../../assets/sass/board_card.scss'
import { useEffect } from 'react';

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
import Card_Iteam from './ListCard/Card.jsx/Card_item';

const PLACEHOLDER_ID = 'placeholder';
function Board_Card(props) {
    const keyboardSensor = useSensor(KeyboardSensor);
    const mouseSensor = useSensor(MouseSensor, {
        // Require the mouse to move by 10 pixels before activating
        activationConstraint: {
            distance: 5,
        },
    });
    const touchSensor = useSensor(TouchSensor, {
        // Press delay of 250ms, with tolerance of 5px of movement
        activationConstraint: {
            delay: 250,
             tolerance: 500
        },
    });
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
    );
    const { mode, setMode } = useColorScheme();
    const [ColumnState, SetColumnState] = useState([]);
    const [CardState, SetCardState] = useState([]);
    const [dataActive, setdataActive] = useState(null);
    const [dataActiveItemCard, setdataActiveItemCard] = useState(null);
    const handleDragEnd = (event) => {
        const { active, over } = event;
        console.log("handleDragEnd", event)
        if (event.active.data.current.columnId) {
            // dành cho card
            let data_card = ColumnState.find(x => x._id == event.active.data.current.columnId).cards
            const oldIndex = data_card.findIndex(x => x._id == active.id);
            const newIndex = data_card.findIndex(x => x._id == over.id)
            const dndOrderedCards = arrayMove(data_card, oldIndex, newIndex);
            console.log("dndOrderedCards", dndOrderedCards);

            const Index_Col = ColumnState.findIndex(x => x._id == event.active.data.current.columnId);
            if (Index_Col >= 0) {
                ColumnState[Index_Col].cards = dndOrderedCards
                SetColumnState(ColumnState);
            }
        }
        else {
            //  dành cho column
            if (active.id !== over.id) {
                const oldIndex = ColumnState.findIndex(x => x._id == active.id);
                const newIndex = ColumnState.findIndex(x => x._id == over.id)
                SetColumnState(arrayMove(ColumnState, oldIndex, newIndex));

                //     const oldIndex = items.indexOf(active.id);
                //     const newIndex = items.indexOf(over.id);

                //     return arrayMove(items, oldIndex, newIndex);
                // });
            }
        }

    }
    const handleDragStart = (event) => {
        console.log("handleDragStart", event);

        if (event.active.data.current.columnId) {
            //  dành cho card item
            setdataActive(null)

            let data_card = ColumnState.find(x => x._id == event.active.data.current.columnId).cards
            SetCardState(data_card.find(x => x._id == event.active.id))
        }
        else {
            //  dành cho column
            SetCardState(null)
            setdataActive(ColumnState.find(x => x._id == event.active.id))

        }
    }
    useEffect(() => {
        SetColumnState(props.item_);
        console.log("ColumnState", ColumnState);
    }, [props])

    return (
        <>
            <DndContext  onDragEnd={handleDragEnd} sensors={sensors} onDragStart={handleDragStart}>
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
                <DragOverlay>
                    {


                        dataActive ? (
                            <ListColumn data={dataActive} />
                        ) : <Card_Iteam item_card={CardState} mode_={props.mode_} ></Card_Iteam>


                    }
                </DragOverlay>
            </DndContext>
        </>

    );
}

export default Board_Card;