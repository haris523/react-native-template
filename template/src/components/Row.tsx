import { styles } from '@styles/globalStyles'
import { FC, ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

interface Props {
    style?: ViewStyle
    children: ReactNode | ReactNode[]
    alignItems?: ViewStyle['alignItems']
    justifyContent?: ViewStyle['justifyContent']
}
const Row: FC<Props> = ({
    style,
    children,
    alignItems = 'center',
    justifyContent = 'flex-start'
}) => {
    return (
        <View style={[styles.row, { alignItems, justifyContent }, style]}>
            {children}
        </View>
    )
}

export default Row
