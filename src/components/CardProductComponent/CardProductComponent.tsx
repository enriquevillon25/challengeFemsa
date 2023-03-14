import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {styleGlobal} from '../../theme/Theme';
import {formatDate} from '../../utils/Formats';
// import Svg, {Polygon} from 'react-native-svg';
import {ArroRightIcon} from '../../../assets/index';
interface CardProduct {
  image: string;
  name: string;
  createdAt: string;
  isRedemption: boolean;
  points: number;
  onPress: () => void;
}
export const CardProductComponent = ({
  image,
  name,
  createdAt,
  isRedemption,
  points,
  onPress,
}: CardProduct) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => typeof onPress === 'function' && onPress()}
      accessibilityRole="button"
      testID="product-card">
      <Image
        testID="product-image"
        source={{uri: image}}
        style={styles.image}
      />
      <View style={styles.subContainer}>
        <View>
          <Text style={{...styleGlobal.fontGlobal, ...styles.titleName}}>
            {name}
          </Text>
          <Text
            testID="product-created-at"
            style={{...styleGlobal.fontGlobal, ...styles.dateCreated}}>
            {formatDate(createdAt)}
          </Text>
        </View>
        <View style={styles.subContainerPoints}>
          <Text style={{...styleGlobal.fontGlobal, ...styles.points}}>
            {isRedemption ? (
              <Text style={{color: '#FF0000'}}>-</Text>
            ) : (
              <Text style={{color: '#00B833'}}>+</Text>
            )}
            {points}
          </Text>
          <ArroRightIcon width={10} height={10} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 11,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  titleName: {
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 19,
    marginBottom: 2,
  },
  dateCreated: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
  },
  subContainerPoints: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    marginRight: 17,
  },
});
