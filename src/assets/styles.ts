import { appColors } from './colors';
import { StyleSheet } from "react-native";
import { HEIGHT } from './screen'

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background,
    },
    label: {
        fontSize: HEIGHT(16),
        color: 'white'
    },
    blueLabel: {
        fontSize: HEIGHT(16),
        color: appColors.blue
    },
    greyText: {
        fontSize: HEIGHT(14),
        color: appColors.grey
    },
    topTabLable: {
        fontSize: HEIGHT(16),
        textTransform: 'none',
    },
    panelLabel: {
        fontSize: HEIGHT(20),
        color: 'white'
    }
})