import { StyleSheet } from 'react-native';
import { PaperSelect } from 'react-native-paper-select';

const Select = ({
  label,
  arrayList,
  selectedArrayList,
  multiEnable,
  value,
  onSelection,
  ...rest
}) => (
  <PaperSelect
    label={label}
    arrayList={arrayList}
    selectedArrayList={selectedArrayList}
    multiEnable={multiEnable}
    value={value}
    onSelection={onSelection}
    dialogStyle={styles.dialog}
    {...rest}
  />
);

const styles = StyleSheet.create({
  dialog: {
    marginHorizontal: 45,
    borderRadius: 10,
  },
});

export default Select;
