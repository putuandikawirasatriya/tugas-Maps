import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.663412,
          longitude: 115.244265
        },
        title: 'Cinemaxx',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude:-8.653566,
          longitude: 115.210343
        },
        title: 'Denpasar Cineplex',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude:-8.666004,
          longitude: 115.214265
        },
        title: 'Cinema XXI',
        subtitle: ''
      },
      {
        key:4,
        latlng: {
          latitude:-8.711687,
          longitude: 115.170467
        },
        title: 'Beachwalk XXI'
      }
      ,
      {
        key:5,
        latlng: {
          latitude:-8.103058,
          longitude: 115.090770
        },
        title: 'BlackBox Movies'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Bioskop di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://donyandika41@gmail.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});