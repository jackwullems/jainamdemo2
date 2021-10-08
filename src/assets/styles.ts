import { appColors } from './colors';
import { StyleSheet } from "react-native";
import { HEIGHT, FONT } from './screen'

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background,
    },
    label: {
        fontSize: FONT(16),
        color: 'white'
    },
    blueLabel: {
        fontSize: FONT(16),
        color: appColors.blue
    },
    greyText: {
        fontSize: FONT(14),
        color: appColors.grey
    },
    topTabLable: {
        fontSize: FONT(16),
        textTransform: 'none',
    },
    panelLabel: {
        fontSize: FONT(20),
        color: 'white'
    }
})