import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: 150, height: 150, resizeMode: 'contain' }}
      />
      <Text style={{ fontWeight: 'bold' }}>{product.title}</Text>
      <Text>Price: ${product.price}</Text>
      <Text>{product.description}</Text>
      <Button title="Добавить в корзину" onPress={onAddToCart} />
    </View>
  );
}
