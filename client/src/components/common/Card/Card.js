import { Card as PaperCard } from 'react-native-paper';

const Card = ({ style, children, ...rest }) => (
  <PaperCard style={[{ flex: 1, overflow: 'hidden' }, style]} {...rest}>
    {children}
  </PaperCard>
);

Card.Actions = ({ children, ...rest }) => (
  <PaperCard.Actions {...rest}>{children}</PaperCard.Actions>
);

Card.Content = ({ children, ...rest }) => (
  <PaperCard.Content {...rest}>{children}</PaperCard.Content>
);

Card.Cover = ({ style, source, ...rest }) => (
  <PaperCard.Cover style={[{ borderRadius: 0 }, style]} source={source} {...rest} />
);

Card.Title = ({ title, ...rest }) => <PaperCard.Title title={title} {...rest} />;

Card.Title.defaultProps = {
  titleVariant: 'titleLarge',
  subtitleVariant: 'bodyLarge',
};

export default Card;
