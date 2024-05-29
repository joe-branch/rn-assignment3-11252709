import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import profile from '../workApp/assets/pro.png'
import Vector from '../workApp/assets/Vector.png'
import cat1 from '../workApp/assets/cat1.png'
import cat2 from '../workApp/assets/cat2.png'
import cat3 from '../workApp/assets/cat3.png'
import cat4 from '../workApp/assets/cat4.png'
import cat5 from '../workApp/assets/cat5.png'
import cat6 from '../workApp/assets/cat6.png'
import cat7 from '../workApp/assets/cat7.png'
import cat8 from '../workApp/assets/cat8.png'

export default function App() {
  const category = [
    {
      id: 1,
      title: 'Exercise',
      subTitle: '12 Tasks',
      image: cat1
    },
    {
      id: 2,
      title: 'Study',
      subTitle: '12 Tasks',
      image: cat2
    },
    {
      id: 3,
      title: 'Code',
      subTitle: '12 Tasks',
      image: cat3
    },
    {
      id: 4,
      title: 'Tutorial',
      subTitle: '12 Tasks',
      image: cat4
    },
    {
      id: 5,
      title: 'Eat',
      subTitle: '12 Tasks',
      image: cat5
    },
    {
      id: 6,
      title: 'Take a Coffee',
      subTitle: '12 Tasks',
      image: cat6
    },
    {
      id: 7,
      title: 'Call Dad',
      subTitle: '12 Tasks',
      image: cat7
    },
    {
      id: 8,
      title: 'Text Future',
      subTitle: '12 Tasks',
      image: cat8
    }
  ];

  const ongoing = [
    {
      id: 1,
      title: 'Mobile App Development'
    },
    {
      id: 2,
      title: 'Web Development'
    },
    {
      id: 3,
      title: 'Push Ups'
    },
    {
      id: 4,
      title: 'Eating'
    },
    {
      id: 5,
      title: 'On Phone'
    },
    {
      id: 6,
      title: 'Taking Coffee'
    },
    {
      id: 7,
      title: 'Daddy Calling...'
    },
    {
      id: 8,
      title: 'Online Meeting'
    },
    {
      id: 9,
      title: 'Software Engineering'
    },
    {
      id: 10,
      title: 'Security Inteligence'
    },
    {
      id: 11,
      title: 'Novels'
    },
    {
      id: 12,
      title: 'Project Proposal'
    },
    {
      id: 13,
      title: 'Self Development'
    },
    {
      id: 14,
      title: 'Assignments'
    },
    {
      id: 15,
      title: 'Meditation'
    }
  ]

  return (
    
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.proText}>Hello , Devs</Text>
        <View style={styles.circ}>
        <Image source={profile} style={styles.proImage}/>
        </View> 
      </View>
      <Text style={styles.notification}>14 tasks today</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.search}>
        <TextInput placeholder='Search' style={styles.searchbox} keyboardType='default' keyboardAppearance='dark'/>
        <View style={styles.filter}>
          <Image source={Vector} style={{marginTop: 12, marginLeft: 10}}/>
        </View>
      </View>
      <AntDesign name="search1" size={23} color="black" style={{marginTop: -35, marginLeft: 35, }}/>
      
      <Text style={styles.catego}>Categories</Text>
      <View style={styles.mainCategory}>
        <FlatList
        data={category}
        renderItem={({item}) => (
          <View style={styles.listBox}>
            <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            </View>
            <Image source={item.image} style={styles.catImage}/>
          </View>
        )}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
         />
      </View>
      <Text style={styles.ongoing}>Ongoing Task</Text>
      <View style={styles.last}>
        <FlatList 
        data={ongoing}
        renderItem={({item}) => (
          <View style={styles.lastR}>
            <Text style={styles.taskT}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        />
      </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingTop: 70
  },
  profile: {
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  proText: {
    color: '#000',
    fontSize: 32,
    lineHeight: 38.4,
    fontWeight: '700',
  },
  circ: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 25,
    backgroundColor: '#fff'
  },
  proImage: {
    width: 46,
    height: 45,
  },
  notification: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: '500',
    marginTop: -10
  },
  searchbox: {
    width: 280,
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 14,
    paddingLeft: 50,
    fontWeight: '700',
    fontSize: 16,
    color: 'black'
  },
  filter: {
    width: 50,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F0522F'
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 29,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  mainCategory: {
    marginTop: 20
  },
  catego: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 50,
    
  },
  listBox: {
    width: 186,
    height: 192,
    borderColor: '#FBF9F7',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: '#FBF9F7'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 26,
    paddingTop: 10,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 26,
  },
  catImage: {
    width: 151,
    height: 132,
    marginLeft: 21,
    marginTop: 7,
    objectFit: 'contain'
  },
  ongoing: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginTop: 25
  },
  lastR: {
    width: 354,
    height: 128,
    marginLeft: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8D1BA',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  taskT: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 16,
    paddingTop: 45
  }
});
