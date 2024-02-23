import React, {useState} from 'react';
import {
    ListView,
    TodoText,
    TodoDate,
    HiddenButton,
    SwipedTodoText,
    colors,
    ListViewHidden
} from '../styles/appStyles'

import { SwipeListView } from 'react-native-swipe-list-view';
import {Entypo} from "@expo/vector-icons";

const ListItems = ({todos, setTodos}) => {

    // for styling currently swiped todo row
    const [swipedRow, setSwipeRow] = useState(null);

    const handleDeleteTodo = (rowMap, rowKey) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }

    return(
        <>
            {todos.length == 0 && <TodoText>You have no Todos today</TodoText>}
            
            {todos.length != 0 &&<SwipeListView
                data={todos}
                renderItem={(data) => {
                    // #1 below if statement not working
                    // it's suppose to line out the text of the row
                    // thst is swiped
                    const RowText = data.item.key == swipedRow ? SwipedTodoText : TodoText;

                    return(
                        <ListView
                            underlaycolors={colors.primary}
                            onPress={() => {

                            }}
                        >
                            <>
                                <TodoText>{data.item.title}</TodoText>
                                <TodoDate>{data.item.date}</TodoDate>
                            </>
                            
                        </ListView>
                    )
                }} 

                renderHiddenItem={(data, rowMap) => {
                    return(
                        <ListViewHidden>
                            <HiddenButton
                                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
                            >
                                <Entypo name="trash" size={25} color={colors.secondary}/>
                            </HiddenButton>
                        </ListViewHidden>
                    )
                }}

                leftOpenValue={80}
                previewRowKey={"1"}
                previewOpnValue={80}
                previewOpenDelay={3000}
                disableLeftSwipe={true}
                style={{
                    flex: 1, paddingBottom: 30, marginBottom: 40
                }}

                // #1
                onRowOpen={(rowkey) => {
                    setSwipeRow(rowkey);
                }}
                // #1
                onRowClose={() => {
                    setSwipeRow(null);
                }}
            />}
        </>
    );
}

export default ListItems;