import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Platform } from 'react-native'
import Card from '../components/Card'
import AppButton from '../components/Button'

const PALETTE = {
  primary: '#009179',
  accent: '#006A58',
  stonetone: '#E7E1C6',
  textprimary: '#3C3B35'
}

export default function LearnScreen(){
  const [resources, setResources] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const host = Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http://localhost:5000'
    fetch(`${host}/api/learn`)
      .then(r => r.json())
      .then(d => setResources(d))
      .catch(err => console.warn(err))
      .finally(()=> setLoading(false))
  },[])

  if(loading) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color={PALETTE.primary} />
    </View>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Learn Center</Text>

      <FlatList
        data={resources}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{paddingBottom:24}}
        renderItem={({item}) => (
          <Card style={{marginBottom:12}}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSummary}>{item.summary}</Text>
            <View style={{marginTop:8}}>
              <AppButton title="Read more" variant="primary" onPress={()=>{ /* navigate to details later */ }} />
            </View>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16, backgroundColor:'#fff' },
  center: { flex:1, justifyContent:'center', alignItems:'center' },
  heading: { fontSize:24, fontWeight:'700', color:PALETTE.textprimary, marginBottom:12 },
  cardTitle: { fontSize:18, fontWeight:'600', color:PALETTE.textprimary },
  cardSummary: { fontSize:14, color:'#333', marginTop:6 }
})
