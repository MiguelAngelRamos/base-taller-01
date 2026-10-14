import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

const TabsLayout = () => {
  return (
    <Tabs
     screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor: 'white',
        sceneStyle: { backgroundColor: 'tomato' },
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: '#fff',
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
            tintColor = {'green'}
            size = {28}
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
            tintColor = {'green'}
            size = {28}
          />
        ) }}/>
    </Tabs>
  )
}

export default TabsLayout;