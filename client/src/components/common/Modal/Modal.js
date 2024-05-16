import { StyleSheet } from 'react-native';
import { Modal as PaperModal, useTheme } from 'react-native-paper';

const Modal = ({ contentContainerStyle, children, ...rest }) => {
  const theme = useTheme();

  return (
    <PaperModal
      contentContainerStyle={[
        styles.contentContainer,
        { backgroundColor: theme.colors.background },
        contentContainerStyle,
      ]}
      {...rest}
    >
      {children}
    </PaperModal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginHorizontal: 45,
    marginVertical: 75,
    padding: 20,
    borderRadius: 10,
  },
});

export default Modal;
