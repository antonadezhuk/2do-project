import { Dialog as PaperDialog } from 'react-native-paper';

const Dialog = ({ visible, children, ...rest }) => (
  <PaperDialog visible={visible} {...rest}>
    {children}
  </PaperDialog>
);

Dialog.Actions = ({ children, ...rest }) => (
  <PaperDialog.Actions {...rest}>{children}</PaperDialog.Actions>
);

Dialog.Content = ({ children, ...rest }) => (
  <PaperDialog.Content {...rest}>{children}</PaperDialog.Content>
);

Dialog.Icon = ({ icon, ...rest }) => <PaperDialog.Icon icon={icon} {...rest} />;

Dialog.ScrollArea = ({ children, ...rest }) => (
  <PaperDialog.ScrollArea {...rest}>{children}</PaperDialog.ScrollArea>
);

Dialog.Title = ({ children, ...rest }) => (
  <PaperDialog.Title {...rest}>{children}</PaperDialog.Title>
);

export default Dialog;
