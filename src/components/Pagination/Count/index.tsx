import Text, { TextComponentProps } from '../../Text';
import locales from './locales';

export interface CountProps extends TextComponentProps {
  pageIndex: number;
  pageCount: number;
}

const Count: React.FC<CountProps> = ({ pageIndex, pageCount, ...props }) => {
  return (
    <Text {...props}>
      <Text type="secondary" as="span">
        {locales.page}
      </Text>
      <Text type="secondary" as="span" fontWeight="bold">
        {pageIndex + 1}
      </Text>
      <Text type="secondary" as="span">
        {locales.on}
      </Text>
      <Text type="secondary" as="span" fontWeight="bold">
        {pageCount}
      </Text>
    </Text>
  );
};

export default Count;
