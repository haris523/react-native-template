import { styles } from '@styles/globalStyles'
import { FC, ReactNode } from 'react'
import { View, ViewStyle } from 'react-native'

interface Props {
    style?: ViewStyle
    children: ReactNode | ReactNode[]
}
const Container: FC<Props> = ({ style, children }) => {
    return <View style={[styles.flexOne, style]}>{children}</View>
}

export default Container
