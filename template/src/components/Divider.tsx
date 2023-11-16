import React from 'react'
import { View } from 'react-native'

export interface DividerProps {
    size?: number
    horizontal?: boolean
    line?: boolean
}

const DEFAULT_DISTANCE = 10
const Divider = ({
    size = DEFAULT_DISTANCE,
    horizontal = false
}: DividerProps) => (
    <View style={[horizontal ? { width: size } : { height: size }]} />
)

export default Divider
