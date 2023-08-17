import { FlexProps, Flex } from '../Flex/Flex';

export type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
    const { align } = props;
    return <Flex {...props} direction='row' align={align} />;
};
