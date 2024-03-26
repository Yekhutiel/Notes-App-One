import React from 'react';
import { Modal } from 'react-native';
import {
    ModalButton,
    ModalContainer,
    ModalView,
    StyledInput,
    ModalAction,
    ModalActionGroup,
    ModalIcon,
    HeaderTitle,
    colors
} from './../styles/appStyles';
import {AntDesign} from '@expo/vector-icons';

const InputModal = (modalVisible, setModalVisible, todoInputValue, setTodoInputValue) => {
    const handleCloseModal = () => {
        setModalVisible(false)
    }

    const handleSubmit = () => {
        alert("submitted");
    }

    return(
        <>
            <ModalButton onPress={() => {setModalVisible(true)}}>
                <AntDesign name="plus" size={30} color={colors.secondary}/>
            </ModalButton>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ModalContainer>
                    <ModalIcon>
                        <AntDesign name="edit" size={30} color={colors.tertiary}/>
                    </ModalIcon>

                    <StyledInput 
                        placeholder='Add a todo'
                        placeholderTextColor={colors.alternative}
                        selectionColor={colors.secondary}
                        autoFocus={true}
                        onChangeText={(text) => setTodoInputValue(text)}
                        value={todoInputValue}
                        onSubmitEditing={handleSubmit}
                    />

                    <ModalActionGroup>

                        <ModalAction color={colors.primary} onPress={handleCloseModal}>
                        <AntDesign name="close" size={28} color={colors.tertiary} />
                        </ModalAction>

                        <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                        <AntDesign name="check" size={28} color={colors.secondary} />
                        </ModalAction>

                    </ModalActionGroup>

                </ModalContainer>
            </Modal>
        </>
    );
}

export default InputModal;