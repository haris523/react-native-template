import Keys from '@constants/mmkv/keys'
import { storage } from '@helpers/initMMKV'
import { useMMKVBoolean } from 'react-native-mmkv'

const useAuth = () => {
    const [token, setToken] = useMMKVBoolean(Keys.AUTH_DATA, storage)

    return {
        token,
        setToken
    }
}

export default useAuth
