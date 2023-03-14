import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {CardProductComponent} from '../../components/CardProductComponent/CardProductComponent';
import {PrimaryButtonComponent} from '../../components/PrimaryButtonComponent/PrimaryButtonComponent';
import {useMovements} from '../../hooks/useMovements';
import {styleGlobal} from '../../theme/Theme';

export const HomeScreen = ({navigation}: any) => {
  const {
    products,
    totalPoints,
    currentMonth,
    showListProducts,
    loading,
    typeProductsView,
    setTypeProductsView,
    listProducts,
  } = useMovements();

  return (
    <SafeAreaView style={{...styles.container}} testID="HomeScreen">
      <View>
        <Text style={{...styleGlobal.fontGlobal, ...styles.titleWelcome}}>
          Bienvenido de vuelta!
        </Text>
        <Text style={{...styleGlobal.fontGlobal, ...styles.titleName}}>
          Ruben Rodriguez
        </Text>
      </View>
      <View>
        <Text style={{...styleGlobal.fontGlobal, ...styles.titlePoints}}>
          TUS PUNTOS
        </Text>
        <View style={styles.containerTotalPoints}>
          <Text
            style={{
              ...styleGlobal.fontGlobal,
              ...styles.fontMonth,
            }}>
            {currentMonth}
          </Text>
          <Text
            style={{
              ...styleGlobal.fontGlobal,
              ...styles.fontPoints,
            }}>
            {totalPoints} pts
          </Text>
        </View>
      </View>
      <View>
        <Text style={{...styleGlobal.fontGlobal, ...styles.titlePoints}}>
          TUS MOVIMIENTOS
        </Text>
        <View style={styles.containerProducts}>
          {products && (
            <FlatList
              data={showListProducts[typeProductsView]()}
              refreshControl={
                <RefreshControl refreshing={loading} onRefresh={listProducts} />
              }
              renderItem={({item}) => (
                <CardProductComponent
                  createdAt={item.createdAt}
                  image={item.image}
                  isRedemption={item.is_redemption}
                  name={item.product}
                  points={item.points}
                  onPress={() => navigation.navigate('ProductDetail', {item})}
                />
              )}
              ItemSeparatorComponent={() => <View style={{height: 8}} />}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </View>
      <View style={styles.containerButtons}>
        {typeProductsView === 'earn' || typeProductsView === 'redeemed' ? (
          <PrimaryButtonComponent
            onPress={() => {
              setTypeProductsView('all');
            }}
            title="Todos"
            width="100%"
          />
        ) : (
          <>
            <PrimaryButtonComponent
              onPress={() => {
                setTypeProductsView('earn');
              }}
              title="Ganados"
              width="45%"
            />
            <PrimaryButtonComponent
              onPress={() => {
                setTypeProductsView('redeemed');
              }}
              title="Canjeados"
              width="45%"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  titleWelcome: {
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 27,
    color: '#020202',
  },
  titleName: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: '#020202',
  },
  containerTotalPoints: {
    borderRadius: 20,
    backgroundColor: '#334FFA',
    paddingVertical: 21,
    paddingHorizontal: 18,
    marginHorizontal: 30,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  fontMonth: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 22,
    marginBottom: 5,
  },
  fontPoints: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 44,
    textAlign: 'center',
  },
  titlePoints: {
    color: '#9B9898',
    fontWeight: '800',
    fontize: 14,
    lineHeight: 19,
    marginVertical: 20,
  },
  containerProducts: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 10,
    height: 350,
  },
  containerButtons: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
