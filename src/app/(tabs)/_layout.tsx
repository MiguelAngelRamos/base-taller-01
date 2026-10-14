import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { colors } from '../../theme/colors'
const TabsLayout = () => {
  return (
    <Tabs
     screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerShadowVisible: false,
        sceneStyle: { backgroundColor: colors.background },
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarActiveTintColor: colors.textSoft,
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
      }}
    >
      <Tabs.Screen 
       name = "index"
       options = {{ 
        title: 'FlatList',
        tabBarIcon: ({color, size }) => (
          <SymbolView 
            name= {{
              ios: 'list.bullet',
              android: 'format_list_bulleted',
            }}
            tintColor = {color}
            size = {size}
          />
        )
        }}/>
      <Tabs.Screen
       name = "scroll-view"
       options = {{ 
        title: 'ScrollView',
        tabBarIcon: ({color, size }) => (
          <SymbolView 
            name= {{
              ios: 'scroll',
              android: 'swipe_vertical',
            }}
            tintColor = {color}
            size = {size}
          />
        ) }}/>
    </Tabs>
  )
}

export default TabsLayout;