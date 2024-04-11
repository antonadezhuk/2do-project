import { Card as PaperCard } from 'react-native-paper';

const Card = ({ children, ...rest }) => <PaperCard {...rest}>{children}</PaperCard>;

Card.Actions = ({ children, ...rest }) => (
  <PaperCard.Actions {...rest}>{children}</PaperCard.Actions>
);

Card.Content = ({ children, ...rest }) => (
  <PaperCard.Content {...rest}>{children}</PaperCard.Content>
);

Card.Cover = ({ source, ...rest }) => <PaperCard.Cover source={source} {...rest} />;

Card.Title = ({ title, subtitle, ...rest }) => (
  <PaperCard.Title title={title} subtitle={subtitle} {...rest} />
);

Card.Title.defaultProps = {
  titleVariant: 'titleLarge',
  subtitleVariant: 'bodyLarge',
};

export default Card;
