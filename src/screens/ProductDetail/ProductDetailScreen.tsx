import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton';
import {styleGlobal} from '../../theme/Theme';
import {formatDate} from '../../utils/Formats';

export const ProductDetailScreen = ({navigation, route}: any) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{uri: route.params?.item.image}}
          style={{...styles.image, width: width - 40, height: height * 0.4}}
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.subTitle}>Detalles del producto</Text>
        <Text style={{...styles.buydate, ...styleGlobal.fontGlobal}}>
          Comprado el {formatDate(route.params?.item.createdAt)}
        </Text>
        <Text style={styles.subTitle}>
          Con esta compra
          {route.params?.item.is_redemption ? 'canjeaste:' : 'acumulaste:'}
        </Text>
        <Text style={{...styles.points, ...styleGlobal.fontGlobal}}>
          {route.params?.item.points} puntos
        </Text>
      </View>
      <View style={styles.containerButtons}>
        <PrimaryButton
          title="Aceptar"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  containerInfo: {
    marginTop: 10,
    flex: 1,
  },
  containerImage: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  containerButtons: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    width: '100%',
  },
  image: {
    borderRadius: 10,
  },
  subTitle: {
    color: '#9B9898',
    fontWeight: '800',
    fontize: 14,
    lineHeight: 19,
    marginTop: 20,
  },
  buydate: {
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    marginTop: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 33,
    marginTop: 30,
  },
});
