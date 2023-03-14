import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {styleGlobal} from '../../theme/Theme';

interface IPrimaryButton {
  title: string;
  onPress: () => void;
  width?: string;
}
export const PrimaryButtonComponent = ({
  title,
  onPress,
  width = '100%',
}: IPrimaryButton) => {
  return (
    <TouchableOpacity
      style={{...styles.container, width: width}}
      onPress={onPress}
      accessibilityRole='button'
      >
      <Text style={{...styleGlobal.fontGlobal, ...styles.title}}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334FFA',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
  },
});
